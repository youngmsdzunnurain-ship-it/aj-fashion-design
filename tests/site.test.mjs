import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const html = read("index.html");
const css = read("css/style.css");
const js = read("js/script.js");
const privacy = read("privacy.html");
const netlify = read("netlify.toml");
const crest = read("assets/images/aj-stitches-crest.svg");

test("business identity and contact details are consistent", () => {
  for (const value of ["A.J Couture & Lifestyle Hub", "Offa, Kwara State, Nigeria", "haminatadebiyi@gmail.com", "+2348106754141", "@aj_couturehub"]) {
    assert.ok(html.includes(value), "Missing business detail: " + value);
  }
  assert.ok(privacy.includes("haminatadebiyi@gmail.com"));
});

test("required local assets are present", () => {
  for (const path of ["css/style.css", "js/script.js", "privacy.html", "assets/images/favicon.svg", "assets/images/aj-monogram.svg", "assets/images/aj-couture-promo.jpg", "assets/images/aj-stitches-crest.svg"]) {
    assert.ok(existsSync(new URL("../" + path, import.meta.url)), "Missing local asset: " + path);
  }
});

test("About section uses the new AJ Stitches crest inside the preserved arch", () => {
  assert.match(html, /class="about-image" src="assets\/images\/aj-stitches-crest\.svg"/);
  assert.match(crest, /AJ STITCHES/);
  assert.match(crest, /CULTURE &amp; LIFESTYLE HUB/);
  const frameRules = [...css.matchAll(/\.about-image-frame\s*\{[^}]*\}/g)].map((match) => match[0]);
  assert.ok(frameRules.some((rule) => /border-radius:\s*210px 210px 0 0/.test(rule)));
  const imageRules = [...css.matchAll(/\.about-image\s*\{[^}]*\}/g)].map((match) => match[0]);
  assert.match(imageRules.at(-1) ?? "", /object-fit:\s*contain/);
});

test("hero bridal cutout keeps its natural proportions without CSS cropping", () => {
  const heroRules = [...css.matchAll(/\.hero \.hero-fashion\s*\{[^}]*\}/g)].map((match) => match[0]);
  assert.ok(heroRules.some((rule) =>
    /height:\s*auto/.test(rule) &&
    /max-height:\s*none/.test(rule) &&
    /object-fit:\s*contain/.test(rule) &&
    /aspect-ratio:\s*auto/.test(rule)
  ));
  const artRules = [...css.matchAll(/\.hero \.art\s*\{[^}]*\}/g)].map((match) => match[0]);
  assert.ok(artRules.some((rule) => /overflow:\s*visible/.test(rule)));
});
test("gallery has four real Nigerian fashion photos with lazy loading", () => {
  const photos = [...html.matchAll(/class="tile-photo" src="https:\/\/images\.pexels\.com\/photos\//g)];
  assert.equal(photos.length, 4);
  assert.equal((html.match(/class="tile-photo"/g) || []).length, 4);
  assert.equal((html.match(/loading="lazy"/g) || []).length >= 4, true);
  assert.match(css, /\.tile-photo\{[^}]*object-fit:cover/);
});

test("navigation anchors resolve to unique page sections", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, "Duplicate HTML id found");
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(target), "Unresolved navigation target: #" + target);
  }
});

test("enquiry handoff uses WhatsApp with encoded visitor input", () => {
  assert.match(js, /encodeURIComponent\(t\)/);
  assert.match(js, /https:\/\/wa\.me\//);
  assert.doesNotMatch(js, /\beval\s*\(/);
});

test("responsive and reduced-motion styles are present", () => {
  assert.match(css, /@media\s*\(max-width:/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test("Netlify serves the repository root with baseline security headers", () => {
  assert.match(netlify, /publish\s*=\s*["']\.["']/);
  for (const header of ["X-Content-Type-Options", "X-Frame-Options", "Referrer-Policy", "Permissions-Policy", "Strict-Transport-Security"]) {
    assert.ok(netlify.includes(header), "Missing Netlify header: " + header);
  }
});

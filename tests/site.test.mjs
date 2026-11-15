import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const html = read("index.html");
const css = read("css/style.css");
const js = read("js/script.js");
const privacy = read("privacy.html");
const netlify = read("netlify.toml");

test("business identity and contact details are consistent", () => {
  for (const value of ["A.J Couture & Lifestyle Hub", "Offa, Kwara State, Nigeria", "haminatadebiyi@gmail.com", "+2348106754141", "@aj_couturehub"]) {
    assert.ok(html.includes(value), "Missing business detail: " + value);
  }
  assert.ok(privacy.includes("haminatadebiyi@gmail.com"));
});

test("all required local site assets are present", () => {
  for (const path of ["css/style.css", "js/script.js", "privacy.html", "assets/images/favicon.svg", "assets/images/aj-couture-promo.jpg"]) {
    assert.ok(existsSync(new URL("../" + path, import.meta.url)), "Missing local asset: " + path);
  }
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

# Netlify deployment — A.J Couture & Lifestyle Hub

## Repository

`youngmsdzunnurain-ship-it/aj-fashion-design`

Production branch: `main`

## Before connecting Netlify

1. Confirm that `assets/images/aj-couture-promo.jpg` loads in the reviewed branch. The supplied promotional artwork is already committed there and is used by the hero and social-sharing metadata.
2. Keep the existing hero image and its position unchanged.
3. Preview the site locally and verify WhatsApp, phone, email and Instagram links with the business owner.
4. Merge the launch-ready pull request into `main` only after the review and checks pass.
5. AJ's founder portrait is a separate About-section asset. It is not currently present in the repository; do not substitute stock photography.

## Connect GitHub to Netlify

1. Sign in at https://app.netlify.com/.
2. Choose **Add new project** → **Import an existing project**.
3. Choose **GitHub** and authorize Netlify if prompted.
4. Select `youngmsdzunnurain-ship-it/aj-fashion-design`.
5. Set the production branch to `main`.
6. The repository's `netlify.toml` sets the publish directory to the repository root (`.`). Leave the build command empty.
7. Select **Deploy** and wait for the first production deploy to finish.
8. Open the generated `*.netlify.app` URL and test it on desktop and mobile.

## After first deploy

- Choose a memorable free Netlify subdomain under **Domain management**.
- Set the final site URL as the canonical URL and create `sitemap.xml`; do not publish placeholder URLs.
- Verify the site in Google Search Console and submit the sitemap.
- Test HTTPS, page sharing preview, form handoff and every contact link.
- Keep Netlify deploy previews enabled for future pull requests.

## Hosting notes

This project is plain HTML, CSS and JavaScript. It has no package install, build command, database, server-side form handler or required paid hosting service. The enquiry form opens WhatsApp with a prefilled message; the visitor must send it themselves.

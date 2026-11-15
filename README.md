# A.J Couture & Lifestyle Hub

A responsive, single-page website for A.J Couture & Lifestyle Hub, based in Offa, Kwara State, Nigeria.

## Project structure

- `index.html` — semantic page content, business metadata and enquiry form
- `css/style.css` — responsive emerald-green and gold styling, layout and motion
- `js/script.js` — accessible page interactions and WhatsApp enquiry handoff
- `assets/images/aj-couture-promo.jpg` — supplied A.J Couture promotional artwork (add this file before publishing)
- `assets/images/favicon.svg` — lightweight brand favicon
- `privacy.html` — privacy notice
- `netlify.toml` — static-site publishing and response-header configuration

## Preview locally

From the project directory, run:

```bash
php -S 127.0.0.1:8087
```

Open http://127.0.0.1:8087.

## Business contact

- Business: A.J Couture & Lifestyle Hub
- Location: Offa, Kwara State, Nigeria
- WhatsApp / phone: +234 810 675 4141
- Email: haminatadebiyi@gmail.com
- Instagram: @aj_couturehub

The enquiry form prepares a WhatsApp message. Visitors review and send it themselves; the static website does not store form submissions.

## Photography

The hero uses the brand's supplied promotional artwork. The four style cards describe services and are not presented as photographs of completed customer commissions. Add only original AJ work or photographs for which the business has publication permission.

## Netlify deployment

This is a static HTML/CSS/JavaScript website. No framework build command or paid server is required.

1. Push the finished project to the GitHub `main` branch.
2. In Netlify, choose **Add new project → Import an existing project → GitHub**.
3. Select `youngmsdzunnurain-ship-it/aj-fashion-design`.
4. Keep the repository root as the base directory. The included `netlify.toml` sets the publish directory to `.`.
5. Select **Deploy**. Netlify will deploy future commits to the production branch automatically.
6. Choose the free `*.netlify.app` site name or connect a domain you own.

Official guide: https://docs.netlify.com/start/quickstarts/deploy-from-repository/

## Before launch

- Add `assets/images/aj-couture-promo.jpg` (the supplied promotional artwork (JPEG)).
- Confirm the deployed preview on a phone and desktop.
- Test the WhatsApp, telephone, email and Instagram links.
- Add a canonical URL and sitemap only after the final public Netlify/custom domain is known.
- Replace the generic service cards with original portfolio photos when the owner has approved images.

## Search and privacy

The page includes a descriptive title, meta description, Open Graph/Twitter metadata and ClothingStore structured data. A privacy notice is available at `privacy.html`. Search engines control indexing; metadata does not guarantee ranking or immediate appearance.

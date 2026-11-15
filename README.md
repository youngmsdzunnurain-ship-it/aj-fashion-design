# A.J Couture & Lifestyle Hub

A responsive, single-page website for A.J Couture & Lifestyle Hub, based in Offa, Kwara State, Nigeria.

## Project structure

- `index.html` — semantic page content, business metadata and enquiry form
- `css/style.css` — responsive emerald-green and gold styling, layout and motion
- `js/script.js` — accessible page interactions and WhatsApp enquiry handoff
- `assets/images/aj-couture-promo.jpg` — supplied A.J Couture promotional artwork used in the hero
- `assets/images/favicon.svg` — lightweight brand favicon
- `privacy.html` — privacy notice
- `netlify.toml` — static-site publishing and response-header configuration
- `robots.txt` — crawler access policy

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

The hero uses the supplied A.J Couture promotional artwork. The existing hero artwork and its position are intentional and should not be replaced during routine styling changes. The four gallery cards describe service categories and are not presented as photographs of completed customer commissions. Add AJ's approved founder portrait beside the About copy when that original portrait asset is available in the repository; do not substitute a stock model or unrelated image.

## Netlify deployment

This is a static HTML/CSS/JavaScript website. No framework build command or paid server is required.

1. Push/merge the reviewed launch branch into the GitHub `main` branch.
2. In Netlify, choose **Add new project → Import an existing project → GitHub**.
3. Select `youngmsdzunnurain-ship-it/aj-fashion-design`.
4. Keep the repository root as the base directory. The included `netlify.toml` sets the publish directory to `.`.
5. Leave the build command empty and select **Deploy**.
6. Choose the free `*.netlify.app` site name or connect a domain you own.

Official guide: https://docs.netlify.com/start/quickstarts/deploy-from-repository/

## Before launch

- Confirm the hero artwork loads from `assets/images/aj-couture-promo.jpg` on the deployed preview.
- Confirm the original hero image and placement remain unchanged.
- Add AJ's founder portrait to the About section when the original image asset is available.
- Confirm the deployed preview on a phone and desktop.
- Test the WhatsApp, telephone, email and Instagram links with the business owner.
- Add a canonical URL and sitemap only after the final public Netlify/custom domain is known.
- Use only original portfolio photos or photographs for which the business has publication permission.

## Search and privacy

The page includes a descriptive title, meta description, Open Graph/Twitter metadata and ClothingStore structured data. A privacy notice is available at `privacy.html`. Search engines control indexing; metadata does not guarantee ranking or immediate appearance.

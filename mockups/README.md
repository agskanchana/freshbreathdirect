# Fresh Breath Direct: website mockups

Static HTML/CSS/JS homepage mockups for Gareth to choose a direction. Open `index.html` (the hub).

## Round 2 (current): `b2c-r2-instant-fresh-buddy/`

Gareth (10 Nov 2026) picked mockup 1 for the look, because PaperMints want every distributor to share its branding, plus mockup 2's Buddy for his own B2C and social personality. Round 2 loads mockup 1's stylesheet and adds `style.css` overrides: Picflow ambassadors in the hero with a Buddy sticker, the quiz restyled, real Picflow lifestyle photos, a social strip, and Buddy in the Fresh Kit, Fresh Club and footer.

Picflow assets: PaperMints' library at papermints.picflow.com/Marketing (51 galleries). Downloads live in `../picflow/` (git-ignored); web copies used by the page are in `shared/img/picflow/`. Picflow ads showing the Arabic-market pack are excluded. Downloaded so far: CoolCaps Mints, CoolCaps Strawberry, Mix Products, Mouth Sprays, PaperMints Strips, Strips Videos, Promotional materials. Still to download: the main-gallery brand artwork (logo, mouth graphics) and the lifestyle theme galleries.

## Round 1: consumer shop (B2C)

| Folder | Direction | Memorable piece |
|---|---|---|
| `b2c-1-instant-fresh/` | PaperMints' own sticker-pack look, bold and retail | Die-cut stickers, price stickers, giant mouth hero |
| `b2c-2-mint-buddy/` | Mascot-led, friendly, cartoon outlines | "Find your fresh" 3-tap quiz with Buddy |
| `b2c-3-fresh-science/` | Calm, clinical, credible | Interactive 4-layer pearl diagram + lab chart |
| `b2c-4-after-dark/` | Cinematic night-time, premium | "One night, five close calls" timeline reel |

All four carry the same content (range, how CoolCaps work, moments, proof, trade teaser, sign-up) so Gareth compares the look, not the copy.

## Shared files

- `shared/mockup.css`, `shared/mockup.js`: review navigator pill, demo basket, mobile menu, placeholder-link toast. Add `?shot` to a page URL to hide the pill for screenshots.
- `shared/img/brand/`: Mint Buddy logo (#21) cut out of `logos/gemini-v2/e3-mascot-pearl.jpg` (transparent, white-text version, mascot icon).
- `shared/img/products/`, `shared/img/lifestyle/`: official PaperMints images from papermints.eu (packaging must only ever come from here).
- `shared/img/web/`: web-sized WebP of the Codex-generated art (mascot poses, pearls, lifestyle and night photos, illustrations).
- `shared/img/gen/`: full-size Codex PNG originals (about 61 MB, not used by the pages) and `codex-prompts.md`.
- `shared/img/thumbs/`: hub screenshots.

## Content to confirm with Gareth

- Prices not in his spec: CoolCaps Twist 60 (£5.99), Strawberry Strips (£2.25), Fresh Kit bundle (£9.99, an idea), 10% first-order offer (an idea).
- "7,700+ sold on eBay UK, 100% positive" (from his B2B deck), company number 05224882 / VAT number (Waistaway Ltd's), "Made in Japan" for CoolCaps.
- Reviews are labelled samples; swap in real eBay/Amazon reviews.
- Facts follow PaperMints' official ingredient pages: 0.48 kcal/pearl (not 0.04), halal bovine gelatin, soy (CoolCaps), milk (Strips), aspartame. The GC/FPD result is a manufacturer's lab test vs a water control, not a clinical trial.

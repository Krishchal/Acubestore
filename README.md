# A Cube Store — Static Website

A pure HTML, CSS, and JavaScript build of the A Cube Store website. **No build step. No frameworks. No Node.** Just open `index.html` in a browser.

## Folder structure

```
static-site/
├── index.html
├── favicon.svg
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── logo.jpg
    └── product-*.png
```

## Features

- Responsive design (mobile / tablet / desktop)
- Product catalog with category filters
- Shopping cart (saved in browser localStorage)
- Checkout modal with Nepal payment methods (eSewa, Khalti, IME Pay, Bank Transfer)
- Software plans with switchable Basic / Professional / Enterprise tiers
- "Start Free Trial" modal with success state
- About / Careers / Contact sections
- Google Maps embed for Kalanki, Kathmandu
- Smooth scrolling, mobile hamburger menu, animated hero blobs

## Running locally

Just double-click `index.html`, or serve the folder with any static server:

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node (http-server)
npx http-server .
```

## Hosting on GitHub Pages (free)

1. Create a new repo on GitHub (e.g. `acube-store`).
2. Upload **all files inside `static-site/`** to the repo root (not the folder itself — the contents).
3. Go to the repo's **Settings → Pages**.
4. Under **Source**, choose `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/` in a minute or two.

That's it — no build commands, no configuration files needed.

## Other free hosts

The same files work with:
- **Netlify** — drag and drop the folder onto netlify.com/drop
- **Cloudflare Pages** — connect the repo
- **Vercel** — connect the repo
- **Surge.sh** — `npx surge .`

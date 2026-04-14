# Ctrl + Sea Website

Capstone project website for the **Ctrl + Sea** water-quality autonomous surface vehicle (ASV).

Built with Vite + React. Deploys as a static site to GitHub Pages.

---

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173/ctrl-sea-website/` in your browser.

---

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

---

## Deploy to GitHub Pages

### Option A — manual

```bash
npm run build
# push dist/ contents to the gh-pages branch
git subtree push --prefix dist origin gh-pages
```

### Option B — GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

Then in GitHub repo settings → Pages → Source → **GitHub Actions**.

---

## Base URL

The `base` in `vite.config.js` is set to `/ctrl-sea-website/`.

If the repo is named differently, or you use a custom domain (set `CNAME` in `public/`), change it to `/your-repo-name/` or `/` accordingly.

---

## Replacing placeholders

| What | Where |
|------|-------|
| Team member names, roles, photos | `src/data/content.js` → `team` array |
| Videos (YouTube embed URLs or local files) | `src/data/content.js` → `videos` array — set `src` field |
| Assembly/hardware photos | Add files to `public/media/photos/`, reference in `src/data/content.js` or directly in `Hardware.jsx` |
| GitHub / report / slides links | `src/data/content.js` → `site.github`, and `TeamDocs.jsx` |
| Course / institution name | `src/data/content.js` → `site.course` |

---

## Project structure

```
src/
  components/     One file per section (JSX + CSS)
  data/
    content.js    All editable copy, specs, team, video data
  App.jsx
  main.jsx
  index.css       Global styles and CSS variables
public/
  media/
    diagrams/     Real project diagrams (already committed)
    photos/       Drop hardware photos here when available
  favicon.svg
```

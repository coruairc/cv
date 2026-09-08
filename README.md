# Céin O'Rourke — CV Site

Static CV / portfolio built with **Astro 4** and **Tailwind CSS**. Terminal-noir aesthetic.

**Live URL (GitHub Pages):** https://coruairc.github.io/cv/

## Local development

```bash
npm install
npm run dev
```

- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

Configured with:

- `site`: `https://coruairc.github.io`
- `base`: `/cv/`

All asset and navigation links use `import.meta.env.BASE_URL`.

## GitHub Pages setup

1. Push this repo to GitHub (e.g. `coruairc/cv` or any repo you want to publish under `/cv/`).
2. Open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).

The workflow (`.github/workflows/deploy.yml`) installs dependencies, builds the site, uploads the Pages artifact, and deploys.

## Privacy

The public page includes email and LinkedIn only. Phone, date of birth, address, nationality, and driving licence are not shown on the HTML page.

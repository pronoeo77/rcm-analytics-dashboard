# RCM Intelligence — Executive Analytics Dashboard

A responsive, interactive **React + Recharts** portfolio dashboard demonstrating revenue cycle management (RCM) analytics, metric transparency, and a Python-to-Excel validation workflow.

> **PUBLIC DEMO NOTICE:** Every figure, payer name, and operational example in the live dashboard is **synthetic**. No patient records, source assessment workbook, employer correspondence, or original assessment data are included. Dashboard demo values are **not** the submitted assessment results.

## Features

- Executive overview with interactive payer filter, collection-rate visualization, and first-denial recovery illustration
- Revenue reconciliation and procedure/carrier variance table
- Denial code frequencies, repeat denials, and first-denial eligibility waterfall
- Payer response times and carrier scorecard
- **Searchable, expandable metric definitions** documenting business meaning, formula, and limitations (40+ definitions)
- Python/Excel validation explanation and tolerance rules
- Responsive desktop/mobile layout

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`).

To create the production bundle:

```bash
npm run build
npm run preview
```

## Publish to GitHub Pages

1. Create a public repository named `rcm-analytics-dashboard` under `pronoeo77`.
2. Push this project to the `main` branch.
3. In GitHub, open **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The included workflow deploys on pushes to `main`.
5. Your site will be available at `https://pronoeo77.github.io/rcm-analytics-dashboard/` after a successful deployment.

The Vite `base` is already set to `/rcm-analytics-dashboard/`. If you rename the repository, change `base` in `vite.config.js`.

## Metric methodology

See `docs/METHODOLOGY.md` and the **Metric definitions** tab in the dashboard. The original assessment Q1 methodology compared **earliest payment overall** to **earliest denial** by Charge ID. It did not identify the earliest payment *after* a denial when earlier payments existed. The demo documents that limitation rather than silently altering the original interpretation.

## Architecture

- `src/data.js`: synthetic, human-readable example data and metric definitions
- `src/main.jsx`: interactive views, filters, drill-down definitions, and charts
- `src/style.css`: responsive executive dashboard design
- `docs/METHODOLOGY.md`: calculation guide and interpretation notes
- `python/README.md`: notes on the private assessment generator and public sharing boundaries

## Planned extension

Add an optional **local-only import** of a sanitized summary JSON export from the Python generator, with schema checks and no server upload. Do not publish or commit proprietary source records.

## Author

Nicolas Cuervo · [GitHub @pronoeo77](https://github.com/pronoeo77)

# RCM Intelligence | Executive Analytics Dashboard

**Interactive Revenue Cycle Management Analytics | React • JavaScript • Recharts • Data Visualization**

[**View Live Interactive Dashboard**](https://pronoeo77.github.io/rcm-analytics-dashboard/) | [**View Source Code**](https://github.com/pronoeo77/rcm-analytics-dashboard)

## Project Overview

RCM Intelligence is an interactive analytics dashboard designed to demonstrate how healthcare revenue cycle data can be transformed into meaningful operational and financial insights.

The project combines financial performance analysis, denial trends, payer comparisons, and transparent metric definitions in a responsive executive reporting interface.

It showcases the application of analytical thinking, JavaScript development, interactive visualization, and data-quality methodology to business reporting.

**Data Privacy:** All dashboard figures, payer names, and operational examples are synthetic. No patient information, proprietary datasets, employer records, or original assessment results are published.

## Interactive Dashboard

Explore the live application:

**https://pronoeo77.github.io/rcm-analytics-dashboard/**

### Executive Overview
- Interactive payer filtering
- Collection-rate visualization
- Financial performance indicators
- First-denial recovery illustration

### Revenue Analytics
- Revenue reconciliation
- Procedure and carrier variance comparisons
- Financial performance reporting

### Denial Analytics
- Denial code frequency analysis
- Repeat-denial identification
- First-denial eligibility waterfall

### Payer Performance
- Payer response-time comparisons
- Carrier performance scorecards
- Operational performance indicators

### Metric Definitions and Validation
- More than 40 searchable, expandable metric definitions
- Documented calculations, assumptions, and limitations
- Python-to-Excel validation methodology
- Reconciliation and tolerance considerations

## Technical Stack

| Technology | Application |
|---|---|
| JavaScript | Dashboard functionality and interactive reporting |
| React | Component-based user interface |
| Recharts | Interactive data visualizations |
| HTML and CSS | Responsive dashboard layout |
| Vite | Development and production builds |
| Git and GitHub | Version control and source-code management |
| GitHub Actions | Automated deployment |
| GitHub Pages | Public website hosting |
| Python and Excel | Documented data-processing and validation workflow |

## Analytical Skills Demonstrated

**Financial Analytics:** Revenue reconciliation, collection-rate analysis, and variance reporting.

**Operational Analytics:** Denial trends, payer response times, and recovery-related measures.

**Business Intelligence:** Interactive dashboards, performance indicators, filtering, and executive reporting.

**Data Quality:** Metric definitions, reconciliation logic, calculation transparency, and documentation of analytical limitations.

**Software Development:** React development, JavaScript programming, responsive design, Git version control, and automated website deployment.

## Project Architecture

- `src/main.jsx` — Interactive dashboard views, filters, and charts
- `src/data.js` — Synthetic demonstration data and metric definitions
- `src/style.css` — Responsive interface styling
- `docs/METHODOLOGY.md` — Calculation methodology and interpretation notes
- `python/README.md` — Documentation of the Python/Excel workflow and public-sharing boundaries
- `.github/workflows/deploy.yml` — Automated GitHub Pages deployment

## Data Methodology and Transparency

The dashboard emphasizes clearly defined metrics and reproducible analytical reasoning.

The methodology documentation discusses revenue reconciliation, denial-related calculations, and interpretation limitations.

For example, the documented original assessment methodology compared the earliest payment overall with the earliest denial by Charge ID. This is distinct from identifying the earliest payment occurring after a denial.

That distinction is explicitly documented to avoid misrepresenting the analytical results.

See [Methodology Documentation](docs/METHODOLOGY.md) for additional details.

## Run Locally

Requires Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
npm run preview
```

## Future Enhancements

- Optional local import of sanitized analytical summaries
- Input schema validation
- Expanded interactive reporting capabilities
- Additional data-quality and reconciliation checks

## Author

**Nicolas Cuervo**

Analytics • Financial Reporting • Business Intelligence • Automation • Software Development

[GitHub Portfolio](https://github.com/pronoeo77)

---

*Portfolio demonstration using synthetic data. The application is not a production healthcare reporting system.*

# Python assessment generator — private source boundary

The submitted RCM assessment generator and its original Excel input/output files are **not included** in this public demo. They may contain confidential or restricted business data or proprietary assessment content.

The live React dashboard uses synthetic, hardcoded demonstration data from `src/data.js`. The future integration path is a Python exporter that generates **approved, aggregate-only, sanitized JSON**. Any future exporter should validate its schema and prohibit patient-level or account-level records in a public deployment.

Keep the original workbook unchanged for the review team. Obtain explicit permission before publishing any assessment source code, input data, outputs, or original aggregate results.

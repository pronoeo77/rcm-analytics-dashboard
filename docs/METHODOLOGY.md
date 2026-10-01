# Metric methodology and interpretation

This public portfolio dashboard uses **synthetic demonstration figures**, not the original assessment's financial or patient-related records. The following describes the submitted assessment's calculation approach for learning and review.

## Denial recovery

- **First denial date:** earliest `Denial Post Date` by Charge ID.
- **First payment date:** earliest `Payment Post Date` by Charge ID.
- **Eligible denied charge:** a Charge ID with a denial and either no payment record or a first payment after the first denial.
- **Excluded charge:** first payment on or before first denial.
- **Paid after first denial:** first payment exists and occurs after first denial.
- **Paid after denial percentage:** paid-after-first-denial count / eligible denied charge count × 100.

**Limitation:** Comparing first payment overall against first denial excludes charges with an early payment followed by a denial and a later payment. An event-sequence analysis of all payments would be a separate, more complete method and might produce different results.

## Reimbursement and variance

- **Total paid per charge:** sum of all Payment Amount rows by Charge ID.
- **Q2 included:** primary carrier is not `PATIENT` and the charge has a payment record.
- **Underpayment variance:** Expected Amount − Total Paid.
- **Procedure/carrier total:** sum variances by Procedure Code and Primary Carrier.
- **Collection rate:** Total Paid / Total Expected × 100.
- **Adjusted expected amount:** when primary carrier is PATIENT and Expected Amount is missing, substitute Charge Amount; otherwise retain Expected Amount.

A positive variance is not proof of a recoverable underpayment. Payment timing, contractual adjustments, open balances, and fee schedules are needed to establish cause.

## Payer timing

- **First response:** earliest first payment or first denial, whichever is recorded.
- **Eligible for timing:** Initial File Date and First Response Date are both present.
- **Post-to-file days:** Initial File Date − Charge Post Date.
- **File-to-response days:** First Response Date − Initial File Date.
- **Carrier average:** mean elapsed days for eligible charges grouped by primary carrier.

The response proxy is not equivalent to payer acknowledgment or final adjudication.

## Denial trends

- **Denial records:** count all denial transaction rows.
- **Unique denied charges:** distinct Charge IDs with denial records.
- **Denial code count:** number of records with a given Denial Code.
- **Repeat denial rate:** distinct Charge IDs with more than one denial / distinct denied Charge IDs.
- **Top three code concentration:** total records for the three most frequent codes / all denial records.

## Validation

Independent Python/pandas metrics are compared against Excel formula results. The original 16-check workbook uses tolerances of 0 for counts, $0.01 for currency, 0.01 for days, and 0.000001 for proportions stored as decimals. Passing means implementations agree within tolerance; it does not prove the underlying business assumption is correct.

For a full searchable reference, open the **Metric definitions** section of the app.

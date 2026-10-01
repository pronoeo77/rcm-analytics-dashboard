// PUBLIC DEMONSTRATION DATA ONLY. Synthetic values, not the submitted assessment results.
export const overview = {charges:24000,expected:6250000,paid:4812500,variance:1437500,collection:77,denied:3600,eligible:2240,paidAfter:1456,excluded:1360,repeat:820,denialRecords:4950};
export const payers = [
 {name:'Pioneer Health',expected:1510000,paid:1195000,response:38.4,denials:710,charges:5400},
 {name:'Meridian Benefits',expected:1280000,paid:965000,response:52.1,denials:670,charges:4600},
 {name:'Crescent Mutual',expected:1100000,paid:880000,response:31.6,denials:590,charges:3900},
 {name:'HarborCare',expected:970000,paid:705000,response:66.3,denials:625,charges:3600},
 {name:'Summit Assurance',expected:830000,paid:655000,response:44.8,denials:510,charges:3400},
 {name:'Other / Self-pay',expected:560000,paid:412500,response:27.5,denials:495,charges:3100}
];
export const denialCodes = [{code:'CO-197',label:'Authorization / precertification',count:920},{code:'CO-16',label:'Missing or incomplete information',count:810},{code:'CO-18',label:'Duplicate claim / service',count:620},{code:'CO-29',label:'Timely filing limit',count:460},{code:'Other',label:'Other denial categories',count:2140}];
export const procedures=[{code:'99285',carrier:'Pioneer Health',expected:260000,paid:199000},{code:'99284',carrier:'Meridian Benefits',expected:240000,paid:192000},{code:'99291',carrier:'HarborCare',expected:172000,paid:132000},{code:'99283',carrier:'Summit Assurance',expected:140000,paid:105000},{code:'99285',carrier:'Crescent Mutual',expected:150000,paid:118000}];
export const definitions = [
 {group:'Denial recovery',term:'Charge ID',meaning:'Identifier used to connect charge, payment, and denial records.',formula:'Match transactions by Charge ID.'},
 {group:'Denial recovery',term:'First Denial Date',meaning:'Earliest recorded denial for a charge.',formula:'MIN(Denial Post Date) for each Charge ID.',note:'Other denial events remain in the raw transaction history.'},
 {group:'Denial recovery',term:'First Payment Date',meaning:'Earliest recorded payment for a charge.',formula:'MIN(Payment Post Date) for each Charge ID.'},
 {group:'Denial recovery',term:'Unique Denied Charges',meaning:'Distinct charges with at least one denial.',formula:'COUNT DISTINCT Charge ID in Denials.'},
 {group:'Denial recovery',term:'Excluded Denied Charges',meaning:'Denied charges whose first payment was before or on the first denial.',formula:'First Payment Date exists AND First Payment Date <= First Denial Date.'},
 {group:'Denial recovery',term:'Eligible Denied Charges',meaning:'Denied charges with no recorded payment, or a first payment after the first denial.',formula:'First Denial Date exists AND (First Payment Date is blank OR First Payment Date > First Denial Date).'},
 {group:'Denial recovery',term:'Paid After First Denial',meaning:'Eligible charges whose first recorded payment followed their first denial.',formula:'First Payment Date exists AND First Payment Date > First Denial Date.',note:'The submitted methodology compares first payment overall to first denial. It does not search all later payments.'},
 {group:'Denial recovery',term:'Paid After Denial %',meaning:'Share of eligible denied charges meeting the payment-date condition.',formula:'Paid After First Denial / Eligible Denied Charges × 100.'},
 {group:'Denial recovery',term:'Days Denial to Payment',meaning:'Days between the first denial and qualifying first payment.',formula:'First Payment Date − First Denial Date, when first payment is later.'},
 {group:'Underpayments',term:'Total Paid per Charge',meaning:'Total payment dollars recorded against a charge.',formula:'SUM(Payment Amount) grouped by Charge ID.'},
 {group:'Underpayments',term:'Q2 Included Charge',meaning:'Insured charge with at least one recorded payment.',formula:'Primary Carrier != PATIENT AND payment record exists.'},
 {group:'Underpayments',term:'Underpayment Variance',meaning:'Expected amount less payments received.',formula:'Expected Amount − Total Paid.',note:'Positive variance is not proof of recoverable underpayment.'},
 {group:'Underpayments',term:'Procedure / Carrier Combination',meaning:'Charges sharing a procedure and primary carrier.',formula:'GROUP BY Procedure Code, Primary Insurance Carrier.'},
 {group:'Underpayments',term:'Collection Rate by Group',meaning:'Payments as a share of expected amount for included charges.',formula:'SUM(Total Paid) / SUM(Expected Amount) × 100.'},
 {group:'Underpayments',term:'Top Five Variances',meaning:'Five procedure/carrier groups with largest positive net gaps.',formula:'Rank group-level (Total Expected − Total Paid) descending; select first five.'},
 {group:'Payer timing',term:'First Response Date',meaning:'Earliest recorded payment or denial date.',formula:'MIN(First Payment Date, First Denial Date), ignoring blanks.',note:'Not necessarily payer acknowledgment or adjudication date.'},
 {group:'Payer timing',term:'Q3 Eligible Charge',meaning:'Charge with a filing date and a recorded response.',formula:'Initial File Date exists AND First Response Date exists.'},
 {group:'Payer timing',term:'Days Post to File',meaning:'Elapsed days between charge posting and initial filing.',formula:'Initial File Date − Charge Post Date.'},
 {group:'Payer timing',term:'Days File to Response',meaning:'Elapsed days between initial filing and first recorded response.',formula:'First Response Date − Initial File Date.'},
 {group:'Payer timing',term:'Average Days File to Response',meaning:'Mean filing-to-response interval for eligible charges by carrier.',formula:'AVERAGE(Days File to Response) grouped by primary carrier.'},
 {group:'Denial trends',term:'Denial Records',meaning:'Number of denial transaction rows; a charge can appear more than once.',formula:'COUNT rows in Denials.'},
 {group:'Denial trends',term:'Denial Count by Code',meaning:'Number of denial events carrying a code.',formula:'COUNT rows grouped by Denial Code.'},
 {group:'Denial trends',term:'Unique Charges by Code',meaning:'Distinct charges affected by a denial code.',formula:'COUNT DISTINCT Charge ID grouped by Denial Code.'},
 {group:'Denial trends',term:'Denial Code Share',meaning:'Share of all denial records assigned to a code.',formula:'Denial Count by Code / Total Denial Records × 100.'},
 {group:'Denial trends',term:'Top Three Code Concentration',meaning:'Share of denial records represented by three most frequent codes.',formula:'SUM(Top Three Denial Counts) / Total Denial Records × 100.'},
 {group:'Revenue KPIs',term:'Total Unique Charges',meaning:'Number of distinct charge identifiers.',formula:'COUNT DISTINCT Charge ID in Charges.'},
 {group:'Revenue KPIs',term:'Total Charge Amount',meaning:'Total billed charges.',formula:'SUM(Charge Amount).'},
 {group:'Revenue KPIs',term:'Adjusted Expected Amount',meaning:'Expected amount with the specified self-pay missing-value adjustment.',formula:'IF(Carrier = PATIENT AND Expected Amount is blank, Charge Amount, Expected Amount).'},
 {group:'Revenue KPIs',term:'Total Expected Amount',meaning:'Total expected reimbursement after adjustment.',formula:'SUM(Adjusted Expected Amount).'},
 {group:'Revenue KPIs',term:'Total Payments',meaning:'Total recorded payment dollars.',formula:'SUM(Payment Amount).'},
 {group:'Revenue KPIs',term:'Expected-to-Paid Variance',meaning:'Difference between expected amounts and recorded payments.',formula:'Total Expected Amount − Total Payments.',note:'Not necessarily lost or recoverable revenue.'},
 {group:'Revenue KPIs',term:'Overall Collection Rate',meaning:'Payments divided by expected reimbursement.',formula:'Total Payments / Total Expected Amount × 100.'},
 {group:'Revenue KPIs',term:'Charges with Payment %',meaning:'Share of unique charges with at least one payment.',formula:'Distinct Paid Charge IDs / Total Unique Charges × 100.'},
 {group:'Revenue KPIs',term:'Denial Rate',meaning:'Share of unique charges with at least one denial.',formula:'Distinct Denied Charge IDs / Total Unique Charges × 100.'},
 {group:'Revenue KPIs',term:'Repeat Denial Rate',meaning:'Share of denied charges with multiple denial records.',formula:'Count Charge IDs with >1 denial / Unique Denied Charges × 100.'},
 {group:'Validation',term:'Python Result',meaning:'Independent benchmark calculated from source data.',formula:'Compute metric in pandas using the documented rules.'},
 {group:'Validation',term:'Excel Result',meaning:'Corresponding formula-driven workbook result.',formula:'Reference the Executive Summary metric cell.'},
 {group:'Validation',term:'Difference',meaning:'Discrepancy between Python and Excel results.',formula:'Python Result − Excel Result.'},
 {group:'Validation',term:'Validation Status',meaning:'Whether a difference is within the configured tolerance.',formula:'IF(ABS(Difference) <= Tolerance, PASS, CHECK).'},
 {group:'Validation',term:'Overall Validation Status',meaning:'Aggregate status of all 16 validation checks.',formula:'PASS only if every individual check is PASS.'}
];

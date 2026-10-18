// The Weber County Hive — Audits Docket
// To add a new audit: copy an object below, fill in the fields, save.
// index.html reads this file and builds the docket, search, and tag
// filters automatically — you never need to touch index.html by hand.
// IMPORTANT: "link" must exactly match the real filename of the
// case-file page you upload to GitHub alongside this file.
//
// reportNumber:  the issuing office's own report number/ID, exactly as
//                they style it (e.g. "OLAG 2026-18", "State Auditor USU25SP",
//                or "Draft — G14" for a policy document with no report number).
// agency:        the office that issued it (e.g. "Office of the Legislative
//                Auditor General", "Office of the Utah State Auditor",
//                "Weber County Commission").
// reportedDate:  the date the audit/document was released or transmitted,
//                as stated on the document itself. Format "Mon D, YYYY".
// lastUpdated:   the date THIS case entry (or its linked page) was last
//                verified/edited by us — not the audit's own date.
// tags:          free-form topic tags, shown as chips and searchable.
// status:        "confirmed" | "draft" | "pending" | "unconfirmed"  — controls the
//                badge color. "confirmed" = a completed, released document
//                we've read directly. "draft" = explicitly marked draft by
//                its own issuer, status of adoption/finalization unknown.
//                "pending" = a proposed policy we've read directly, but
//                whether it was adopted is not confirmed.
//                "unconfirmed" = sourced only secondhand (e.g. a hearing
//                account), no primary document in hand yet.
// grade:         Overall letter grade (A-F) from the collective rubric, if
//                the linked case-file page has graded it. Must match the
//                page exactly. Omit if not yet graded.
const AUDITS = [
  {
    id: "olag-2026-18",
    reportNumber: "OLAG 2026-18",
    agency: "Office of the Legislative Auditor General",
    title: "A Systemic Performance Audit of the Governor's Office of Economic Development",
    subtitle: "A Review of Oversight and Outcomes",
    reportedDate: "Sep 15, 2026",
    lastUpdated: "Oct 17, 2026",
    tags: ["Economic Development", "Industrial Assistance Account", "Pass-Through Grants", "GOED"],
    status: "confirmed",
    grade: "D",
    keyFigure: "$249M in funds GOED couldn't consistently document (FY2023–25)",
    summary: "GOED could not consistently show how nearly $249 million in pass-through and Industrial Assistance Account funds was used between fiscal years 2023 and 2025. The audit ties the failure to past leadership and credits the office's current director with initial corrective steps already underway.",
    link: "weber-hive-goed-audit-2026-18.html"
  },
  {
    id: "weber-g14-2026",
    reportNumber: "G14 — 2026 Revision",
    agency: "Weber County Commission",
    title: "A Rewrite of Weber County's Audit Committee Rules",
    subtitle: "G14, Audit Committee Policy 2026 Revision V2",
    reportedDate: "May 12, 2026",
    lastUpdated: "Oct 17, 2026",
    tags: ["Weber County", "Audit Committee", "Internal Audit", "Public Records"],
    status: "pending",
    keyFigure: "New subpoena power, new recusal rule, wider confidentiality for draft audit work",
    summary: "A draft presented at the May 12, 2026 Weber County Commission meeting would give the Audit Committee subpoena power when a department limits an audit, require members to step out of reviews of departments they oversaw, and keep draft audit reports, special projects and advisory work out of public view. Listed for approval on the May 19, 2026 commission agenda; outcome not yet posted online.",
    link: "weber-hive-audit-committee-policy.html"
  },
  {
    id: "olag-2026-19",
    reportNumber: "OLAG 2026-19",
    agency: "Office of the Legislative Auditor General",
    title: "A Performance Audit of World Trade Center Utah",
    subtitle: "A Review of State Contract Fulfillment",
    reportedDate: "Sep 15, 2026",
    lastUpdated: "Oct 17, 2026",
    tags: ["Economic Development", "Pass-Through Grants", "GOED", "Nonprofits", "Trade Missions"],
    status: "confirmed",
    grade: "C",
    keyFigure: "$2.2M in state money in FY2025; main result number is self-reported and partly prospective",
    summary: "Legislative auditors found World Trade Center Utah appears to have met its two state contracts and charged trade mission fees within its contract, but its 'new trade opportunities' measure is self-reported and not consistently verified, three required reports fell short (including no State Auditor filing since 2024), and GOED's contract never required expense reporting. All five recommendations accepted.",
    link: "weber-hive-wtc-utah-audit-2026-19.html"
  },
  {
    id: "osa-usu25sp",
    reportNumber: "State Auditor USU25SP",
    agency: "Office of the Utah State Auditor",
    title: "Manufacturing Extension Partnership, Limited Review",
    subtitle: "iMpact Utah and the MEP program money, 2023–2024",
    reportedDate: "Jul 29, 2025",
    lastUpdated: "Oct 17, 2026",
    tags: ["Pass-Through Grants", "GOED", "Nonprofits", "Manufacturing", "Misuse of Public Funds"],
    status: "confirmed",
    grade: "F",
    keyFigure: "$1.8M to $2.8M in MEP program money used inappropriately",
    summary: "The State Auditor found iMpact Utah's president used MEP program money for a for-profit company he majority-owned, large bonuses, vacations and political donations, while GOEO and Utah State University did not oversee the spending and no required State Auditor filings were made. iMpact Utah said it would cease operations July 31, 2025.",
    link: "weber-hive-mep-impact-utah-usu25sp.html"
  }
];

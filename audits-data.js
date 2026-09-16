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
// status:        "confirmed" | "draft" | "unconfirmed"  — controls the
//                badge color. "confirmed" = a completed, released document
//                we've read directly. "draft" = explicitly marked draft by
//                its own issuer, status of adoption/finalization unknown.
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
    lastUpdated: "Sep 16, 2026",
    tags: ["Economic Development", "Industrial Assistance Account", "Pass-Through Grants", "GOED"],
    status: "confirmed",
    grade: "D",
    keyFigure: "$249M in funds GOED couldn't consistently document (FY2023–25)",
    summary: "GOED could not consistently show how nearly $249 million in pass-through and Industrial Assistance Account funds was used between fiscal years 2023 and 2025. The audit ties the failure to past leadership and credits the office's current director with initial corrective steps already underway.",
    link: "weber-hive-goed-audit-2026-18.html"
  }
];

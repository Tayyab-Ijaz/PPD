/*
 * ESCALATION CONTENT MODULE -- PPD-Adapt Phase 6
 *
 * Every value in this file that a licensed clinical supervisor has not
 * personally reviewed and signed off on is marked
 * status: "UNSIGNED - DO NOT DEPLOY". Nothing in this file was authored
 * by an engineering/build session as clinical content -- see
 * docs/escalation_content_REQUEST.md for exactly what is being asked of
 * the clinical supervisor for each of the three pathways below, and why
 * (Pakistan has limited formal crisis-line infrastructure, so a named
 * institutional contact is more likely to be the right answer than a
 * national hotline number).
 *
 * scripts/check_deploy_ready.mjs (webapp/parity/) fails the
 * build if ANY status field below still reads "UNSIGNED - DO NOT DEPLOY"
 * at deploy time. Do not remove or paper over that check by changing the
 * marker string without an actual signed replacement -- the check
 * matches this exact string on purpose.
 */
const ESCALATION_CONTENT = {
  // Domain 16 -- maternal self-harm / suicidal ideation. Fires when any
  // of EPDS_10 / PHQ9_9 / PROMIS_EDDEP39 gets a positive
  // response.
  maternal_self_harm: {
    status: "UNSIGNED - DO NOT DEPLOY",
    heading: null,
    body: null,
    contacts: [], // [{label, method, value}], e.g. a named institutional contact
    last_verified: null,
    verified_by: null,
  },

  // Domain 17 -- infant-directed harm IDEATION (PBQ_24, "I feel like
  // hurting my baby"). Distinct from the above: the person having the
  // thought is the mother, but the safety concern concerns the infant,
  // and routing/wording needs to differ accordingly (this is a symptom
  // report, not a disclosure of a completed act -- see pbq18_disclosure
  // below for that distinct case).
  infant_directed_harm: {
    status: "UNSIGNED - DO NOT DEPLOY",
    heading: null,
    body: null,
    contacts: [],
    last_verified: null,
    verified_by: null,
  },

  // PBQ_18 ("I have done harmful things to my baby") -- NOT a
  // screening/escalation-script case at all. A disclosure of a
  // completed past act is a mandatory-reporting trigger in most
  // jurisdictions. PBQ_18 is not in the item pool and is not asked by
  // this build (see docs/PBQ18_disclosure_pathway.md and
  // selection-engine/scripts/test_4_4_safety_regression.py,
  // which asserts it stays absent). This entry exists so that IF a
  // future version of the tool ever surfaces an unprompted disclosure of
  // this kind, there is a named, signed pathway ready rather than an
  // improvised one -- it is not wired to any current UI trigger.
  pbq18_disclosure: {
    status: "UNSIGNED - DO NOT DEPLOY",
    heading: null,
    body: null,
    contacts: [],
    mandatory_reporting_workflow: null, // this project does not decide what this is; the deploying institution does
    last_verified: null,
    verified_by: null,
  },
};

const ESCALATION_UNSIGNED_MARKER = "UNSIGNED - DO NOT DEPLOY";

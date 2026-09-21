/*
 * CORE SYMPTOM QUESTIONS (unscored) -- PPD-Adapt
 *
 * The adaptive engine can only ask items that have IRT parameters. One DSM-5 depressive symptom -- appetite / weight change --
 * has no calibrated item in the pool, so without this it was never asked (0% of sessions). It is asked here as ONE fixed,
 * unscored question after the adaptive phase, and shown on the results screen as a fact ("Appetite: several days"); it does not
 * enter any score, and no interpretation is authored by the app.
 *
 * Wording and response options are PHQ-9's own (item 5). The PHQ-9 is public domain -- "no permission is required to reproduce,
 * translate, display or distribute" (phqscreeners.com; verified 2026-09-17, data-foundation/docs/DATA_LICENSES.md), so this
 * carries no licence blocker. Whether to include it is a design choice a clinician should confirm.
 * (Crying and social withdrawal remain unasked: no openly licensed item exists for them -- the EPDS crying item is RCPsych-restricted.)
 *
 * The object below is plain JSON on purpose: selection-engine/scripts/postpartum_module.py (load_core) reads it from this file.
 */
const CORE_SYMPTOMS = {
 "note": "One unscored question so that every DSM-5 depressive symptom is asked in every session. Facts only; nothing is scored or interpreted.",
 "licence_status": "PUBLIC DOMAIN - PHQ-9 (verified 2026-09-17, data-foundation/docs/DATA_LICENSES.md)",
 "frame": "Over the last 2 weeks, how often have you been bothered by the following problem?",
 "labels": ["Not at all", "Several days", "More than half the days", "Nearly every day"],
 "items": [
  {"id": "PHQ9_5", "text": "Poor appetite or overeating", "criterion": "Appetite / weight change", "source": "PHQ-9 item 5"}
 ]
};

/*
 * TIMING / DURATION / IMPAIRMENT QUESTIONS (Block H, v16) -- PPD-Adapt, NEXT_STEPS_v14-v17.md Part B.4.
 *
 * What this is: three fixed questions asked ONLY when the adaptive engine found Depression or Anxiety
 * "Somewhat elevated" or higher (see TRIGGER_DOMAINS/TRIGGER_THETA_AT_LEAST below, evaluated in index.html /
 * engine_5domain.py against the SAME theta and levelLabel() thresholds already used on the results screen --
 * nothing new is invented here). They make the tool assisted-diagnosis-oriented, without claiming to diagnose,
 * by asking about three things DASS-42 does not cover: WHEN the feelings started (peripartum-onset specifier),
 * whether they meet DSM-5 Criterion A's DURATION requirement (DASS asks about "the past week"; this closes that
 * gap), and whether they meet Criterion B's IMPAIRMENT requirement. Feeds the "criteria coverage map" on the
 * results screen (CRITERIA_COVERAGE_MAP in index.html) -- never the Aggregate PPD Score.
 *
 * Runs after the postpartum module, before Block S (see index.html's beginTiming()/B.5 session order).
 *
 * Item schema: id, question, options (array of strings), criterion (the DSM-5 concept this item maps to, shown
 * on the criteria-coverage map), endorsed_options (option indices that count as "criterion met" -- absent for
 * H1, which is a specifier/timing fact, not a yes/no criterion), evidence (citation).
 *
 * Status: item wording is provisional per the roadmap's own draft language. A clinician must review and sign it
 * (set "status" to e.g. "SIGNED 2026-XX-XX by <name>"). The deploy gate blocks while the marker below is present.
 *
 * Plain JSON on purpose: selection-engine/scripts/timing_module.py reads it from this file by regex + json.loads,
 * the same single-source-of-truth pattern context_module.js/postpartum_module.js/severity_bands.js already use.
 */
const TIMING_MODULE = {
 "status": "UNSIGNED - DO NOT DEPLOY",
 "note": "Timing, duration and impairment questions (Block H, v16, NEXT_STEPS_v14-v17.md Part B.4). Asked only when Depression or Anxiety is 'Somewhat elevated' or higher. Facts only; feeds the criteria coverage map, never the Aggregate PPD Score.",
 "trigger_domains": ["Depression", "Anxiety"],
 "trigger_theta_at_least": 0.15,
 "items": [
  {"id": "H1", "question": "When did these feelings start?",
   "options": ["Before pregnancy", "During pregnancy", "First 4 weeks after birth", "1 to 12 months after birth", "Not sure"],
   "criterion": "Peripartum-onset specifier",
   "evidence": "DSM-5 peripartum onset <=4 weeks after delivery; ICD-11 <=6 weeks; clinical guidelines and research use <=12 months [Riseup-PPD 2024; ACOG CPG 4]"},
  {"id": "H2", "question": "Have you felt this way for most of the day, nearly every day, for 2 weeks or longer?",
   "options": ["Yes", "No", "Not sure"], "endorsed_options": [0],
   "criterion": "Criterion A: duration (most of the day, nearly every day, 2+ weeks)",
   "evidence": "DSM-5 criterion A duration requirement. Closes a real gap: the DASS-42 items this session's scores are based on ask about 'the past week', not duration/frequency within that week [Lovibond & Lovibond 1995]"},
  {"id": "H3", "question": "How difficult have these problems made it to look after yourself, your baby, your home, or get on with people?",
   "options": ["Not difficult", "A little difficult", "Moderately difficult", "Very difficult", "Extremely difficult"], "endorsed_options": [2, 3, 4],
   "criterion": "Criterion B: functional impairment",
   "evidence": "DSM-5 criterion B (clinically significant distress or impairment). Modelled on PHQ-9's own functional-impairment item [Kroenke 2001]"}
 ]
};

/*
 * SENSITIVE EXPERIENCES (Block S, v16) -- PPD-Adapt, NEXT_STEPS_v14-v17.md Part B.3/B.5.
 *
 * What this is: privacy-gated, OPTIONAL questions about intimate-partner violence and (optionally) childhood
 * adversity, placed at the very END of the session (after Block H), never upfront. Three reasons this order was
 * chosen (B.5): (1) question-order effects -- recalling abuse right before the symptom items can prime symptom
 * reports, contaminating the score; (2) drop-out -- sensitive questions early raise abandonment before the core
 * screen is done; (3) its output is a support pathway, which does not need to steer the engine (it deliberately
 * cannot trigger M2 -- the IPV pathway itself is the response, per B.5's own reasoning).
 *
 * KEPT OFF BY DEFAULT (BLOCK_S_ENABLED in index.html, enabled: false): per NEXT_STEPS_v14-v17.md Part G item 4,
 * this must not ship without a real, clinician-supplied referral route for S4's "afraid of anyone" pathway --
 * none exists yet (docs/escalation_content_REQUEST.md is the precedent this follows). The module is fully built
 * and tested so it is ready the moment a real referral route is supplied and BLOCK_S_ENABLED.enabled is flipped;
 * until then the whole block (including S0's privacy gate) is never shown to a respondent.
 *
 * Session-level behaviour: S0 is a hard gate. Any answer other than "Yes" ends the block immediately -- S1-S5
 * are never asked, and none of them ever silently defaults to "no risk" (a session that skips S0 provides NO
 * data for S1-S5, which is different from a session that answers "No" to them).
 *
 * Item schema: same shape as context_module.js (id, type, question, options, tier, role, risk_options,
 * protective_options, evidence) -- role "gate" is new here (S0 only): "in" lists the option string(s) that
 * CONTINUE the block; any other answer ends it.
 *
 * Status: item wording (especially S1-S4, safety-sensitive) is provisional per the roadmap's own draft language,
 * explicitly flagged there as "based on published short IPV screens, to be signed". A clinician must review and
 * sign it. S4's action slot additionally needs a REAL referral route (not authored here) before BLOCK_S_ENABLED
 * can ever be set to true -- this is a harder requirement than the usual UNSIGNED marker.
 *
 * Plain JSON on purpose: selection-engine/scripts/sensitive_module.py reads it from this file by regex + json.loads.
 */
const SENSITIVE_MODULE = {
 "status": "UNSIGNED - DO NOT DEPLOY",
 "note": "Privacy-gated, optional questions about safety at home (Block S, v16, NEXT_STEPS_v14-v17.md Part B.3/B.5). KEPT OFF BY DEFAULT (BLOCK_S_ENABLED.enabled = false in index.html) until a real, clinician-supplied support-pathway referral route exists for S4. Never added to the Aggregate PPD Score. Deliberately cannot trigger M2 (CONTEXT_RISK_STOPPING) -- the support pathway itself is the response to a positive S1-S4.",
 "items": [
  {"id": "S0", "type": "single", "role": "gate", "continue_options": [0],
   "question": "The next questions are about safety at home. Are you able to answer them privately right now?",
   "options": ["Yes", "No, skip these questions"],
   "evidence": "WHO (2013) guidance: clinical enquiry about violence requires privacy, confidentiality and a referral pathway before asking"},
  {"id": "S1", "type": "single", "tier": 1, "risk_options": [0],
   "question": "In the past year, has your partner or anyone at home hit, slapped, kicked or otherwise physically hurt you?",
   "options": ["Yes", "No", "Prefer not to say"],
   "evidence": "IPV OR 2.50 overall, 3.01 in low- and middle-income regions, 2.73 during pregnancy [Wei 2023]. Longitudinal OR 3.1 [Howard 2013]"},
  {"id": "S2", "type": "single", "tier": 1, "risk_options": [0],
   "question": "In the past year, has your partner or anyone at home repeatedly insulted, humiliated, threatened or controlled you (for example money, phone or visits)?",
   "options": ["Yes", "No", "Prefer not to say"],
   "evidence": "Psychological violence OR 1.93, \"convincing\", class I [Kim 2022]"},
  {"id": "S3", "type": "single", "tier": 1, "risk_options": [0],
   "question": "In the past year, has anyone forced you into sexual activity?",
   "options": ["Yes", "No", "Prefer not to say"],
   "evidence": "Sexual IPV OR 1.75 [Wei 2023]"},
  {"id": "S4", "type": "single", "role": "pathway", "risk_options": [0],
   "question": "Are you afraid of anyone you live with?",
   "options": ["Yes", "No", "Prefer not to say"],
   "evidence": "Routes to a separate support pathway. That pathway must be authored and signed by a named clinical supervisor, and BLOCK_S_ENABLED must stay false until it exists (Part G item 4) -- like escalation_content.js's precedent, not authored here"},
  {"id": "S5", "type": "single", "tier": 2, "risk_options": [0], "optional": true,
   "question": "(Optional) As a child, were you physically, emotionally or sexually abused, or did you grow up with serious violence at home?",
   "options": ["Yes", "No", "Prefer not to say"],
   "evidence": "ACEs OR 2.31 [Ayadiuno 2026]. Covered by ANRQ-R [Reilly 2021]"}
 ]
};

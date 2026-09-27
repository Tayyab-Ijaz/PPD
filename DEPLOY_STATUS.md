# Deploy status (2026-09-27, source commit 3f47780)

**Deploy gate: NOT READY - do not share the URL with participants or the public**

```
OK: BLOCK_S_ENABLED.enabled is false (Block S kept off until a real S4 referral route exists).

Manual step not automatable here: physical-device offline test (docs/pwa_physical_device_test_PROCEDURE.md).

NOT READY TO DEPLOY -- 13 blocking issue(s):
  1. escalation_content.js still has 6 UNSIGNED marker(s) -- clinical content must be supplied and signed by a named clinical supervisor, not authored here (docs/escalation_content_REQUEST.md).
  2. postpartum_module.js still has 8 UNSIGNED marker(s) -- the screener items, thresholds and rules need clinician review, and every feedback slot needs wording supplied and signed by a named clinical supervisor.
  3. postpartum_module.js: the PBQ licence is UNCONFIRMED (reported free to use from a secondary source only) -- confirm with the authors before any deployment.
  4. severity_bands.js: the four-band aggregate PPD score is unsigned (and its band edges are not yet checked against the DASS manual) -- a clinician must review the bands, labels and results wording and sign it before any deployment.
  5. context_module.js still has 1 UNSIGNED marker(s) -- the item wording and tier assignments need clinician review and sign-off before any deployment.
  6. context_module.js: the OSSS-3 items (C4-C6) have not had their wording independently checked against the published instrument (Kocalevent et al. 2018) -- confirm before any deployment.
  7. timing_module.js still has 1 UNSIGNED marker(s) -- the timing/duration/impairment item wording needs clinician review and sign-off before any deployment.
  8. sensitive_module.js still has 1 UNSIGNED marker(s) -- the IPV/sensitive-experience item wording needs clinician review and sign-off, and S4's action slot needs a REAL, clinician-supplied referral route, before any deployment.
  9. index.html: CRITERIA_COVERAGE_MAP.status still reads "UNSIGNED - DO NOT DEPLOY" -- the item/criterion mapping and endorsement threshold need clinician review and sign-off before any deployment.
  10. docs/gate1_artifact_decision.md has no completed Decision (date / decided-by / chosen option) -- nothing may be hosted or bannered until the project lead decides what this artifact is.
  11. Parity (Python reference engine vs the real page): parity_report.json was produced on a DIFFERENT index.html than the current one -- re-run it.
  12. Network capture + CSP: network_capture_report.json was produced on a DIFFERENT index.html than the current one -- re-run it.
  13. Offline (devtools-level): pwa_offline_devtools_report.json was produced on a DIFFERENT index.html than the current one -- re-run it.
```

The gate is the repo's own check (`webapp/parity/check_deploy_ready.mjs`). Items marked blocking are human decisions
(signed clinical content, licence confirmation, the project lead's decision on what this artifact is) - they cannot be closed by code.

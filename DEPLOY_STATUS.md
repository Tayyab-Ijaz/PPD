# Deploy status (2026-09-23, source commit 9bec474)

**Deploy gate: NOT READY - do not share the URL with participants or the public**

```
OK: Parity (Python reference engine vs the real page) passed on the current build.
OK: Network capture + CSP passed on the current build.
OK: Offline (devtools-level) passed on the current build.

Manual step not automatable here: physical-device offline test (docs/pwa_physical_device_test_PROCEDURE.md).

NOT READY TO DEPLOY -- 5 blocking issue(s):
  1. escalation_content.js still has 6 UNSIGNED marker(s) -- clinical content must be supplied and signed by a named clinical supervisor, not authored here (docs/escalation_content_REQUEST.md).
  2. postpartum_module.js still has 8 UNSIGNED marker(s) -- the screener items, thresholds and rules need clinician review, and every feedback slot needs wording supplied and signed by a named clinical supervisor.
  3. postpartum_module.js: the PBQ licence is UNCONFIRMED (reported free to use from a secondary source only) -- confirm with the authors before any deployment.
  4. severity_bands.js: the four-band aggregate PPD score is unsigned (and its band edges are not yet checked against the DASS manual) -- a clinician must review the bands, labels and results wording and sign it before any deployment.
  5. docs/gate1_artifact_decision.md has no completed Decision (date / decided-by / chosen option) -- nothing may be hosted or bannered until the project lead decides what this artifact is.
```

The gate is the repo's own check (`webapp/parity/check_deploy_ready.mjs`). Items marked blocking are human decisions
(signed clinical content, licence confirmation, the project lead's decision on what this artifact is) - they cannot be closed by code.

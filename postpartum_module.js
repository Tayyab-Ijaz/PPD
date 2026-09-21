/*
 * POSTPARTUM MODULE (rule-based, NOT calibrated) -- PPD-Adapt
 *
 * The postpartum-specific items (bonding, parenting, infant-focused anxiety) could not be IRT-calibrated (Phase 3 gate:
 * no postpartum item-level data exists), so they are NOT part of the adaptive engine. They run here as a fixed,
 * rule-based module with the published PBQ scoring key and published subscale cut-offs, coordinated with the adaptive
 * engine by explicit rules (which items to ask, and which feedback rule fires).
 *
 * Everything that is a design choice made without data -- the screener items, the positivity thresholds, the expansion
 * rule, the feedback rules -- is PROVISIONAL and marked UNSIGNED. Feedback WORDING is never authored by an engineering
 * session: each feedback slot is empty until a named clinical supervisor supplies and signs it. While a slot is
 * unsigned the app shows only factual lines (scores and the published cut-off) and says no clinician-approved
 * explanation has been added yet. webapp/parity/check_deploy_ready.mjs blocks deployment while any UNSIGNED marker
 * remains here, and while the PBQ licence is unconfirmed.
 *
 * Length: the screener is 3 items (one per scored subscale); an expanded subscale is asked only until the published cut-off
 * is decided (exact curtailment -- same high / not-high result as asking every item).
 *
 * The object below is plain JSON on purpose: selection-engine/scripts/postpartum_module.py (the Python reference)
 * reads it from this file, so the two implementations cannot drift apart.
 * Items and scoring key are checked against data-foundation/data/raw/bonding_instruments/PBQ_Brockington_items_scoring.md
 * by webapp/verification/test_postpartum_module_matches_source.py.
 */
const POSTPARTUM_MODULE = {
 "status": "UNSIGNED - DO NOT DEPLOY",
 "status_note": "Screener items, positivity thresholds, expansion rule and feedback rules below are PROVISIONAL design choices made without data (no postpartum calibration exists for these items). A clinician must review them; feedback wording must be supplied and signed by a named clinical supervisor.",
 "licence_status": "LICENCE UNCONFIRMED - PBQ reported free to use (secondary source only); confirm with the authors before any deployment",
 "instrument": "Postpartum Bonding Questionnaire (PBQ)",
 "source": "Brockington I, Fraser C, Wilson D (2006). The Postpartum Bonding Questionnaire: a validation. Arch Womens Ment Health 9:233-242",
 "labels": [
  "Never",
  "Rarely",
  "Sometimes",
  "Quite often",
  "Very often",
  "Always"
 ],
 "score_note": "Display order is Never..Always (index 0..5). For a negatively worded item the score equals the index (Always = 5); for a positively worded item the published key reverses it (score = 5 - index).",
 "items": [
  {
   "id": "PBQ_1",
   "n": 1,
   "text": "I feel close to my baby",
   "subscale": "general",
   "positive_wording": true
  },
  {
   "id": "PBQ_2",
   "n": 2,
   "text": "I wish the old days when I had no baby would come back",
   "subscale": "general",
   "positive_wording": false
  },
  {
   "id": "PBQ_3",
   "n": 3,
   "text": "I feel distant from my baby",
   "subscale": "rejection",
   "positive_wording": false
  },
  {
   "id": "PBQ_4",
   "n": 4,
   "text": "I love to cuddle my baby",
   "subscale": "rejection",
   "positive_wording": true
  },
  {
   "id": "PBQ_5",
   "n": 5,
   "text": "I regret having this baby",
   "subscale": "rejection",
   "positive_wording": false
  },
  {
   "id": "PBQ_6",
   "n": 6,
   "text": "The baby doesn't seem to be mine",
   "subscale": "general",
   "positive_wording": false
  },
  {
   "id": "PBQ_7",
   "n": 7,
   "text": "My baby winds me up",
   "subscale": "general",
   "positive_wording": false
  },
  {
   "id": "PBQ_8",
   "n": 8,
   "text": "I love my baby to bits",
   "subscale": "general",
   "positive_wording": true
  },
  {
   "id": "PBQ_9",
   "n": 9,
   "text": "I feel happy when my baby smiles or laughs",
   "subscale": "general",
   "positive_wording": true
  },
  {
   "id": "PBQ_10",
   "n": 10,
   "text": "My baby irritates me",
   "subscale": "general",
   "positive_wording": false
  },
  {
   "id": "PBQ_11",
   "n": 11,
   "text": "I enjoy playing with my baby",
   "subscale": "rejection",
   "positive_wording": true
  },
  {
   "id": "PBQ_12",
   "n": 12,
   "text": "My baby cries too much",
   "subscale": "general",
   "positive_wording": false
  },
  {
   "id": "PBQ_13",
   "n": 13,
   "text": "I feel trapped as a mother",
   "subscale": "general",
   "positive_wording": false
  },
  {
   "id": "PBQ_14",
   "n": 14,
   "text": "I feel angry with my baby",
   "subscale": "rejection",
   "positive_wording": false
  },
  {
   "id": "PBQ_15",
   "n": 15,
   "text": "I resent my baby",
   "subscale": "general",
   "positive_wording": false
  },
  {
   "id": "PBQ_16",
   "n": 16,
   "text": "My baby is the most beautiful baby in the world",
   "subscale": "general",
   "positive_wording": true
  },
  {
   "id": "PBQ_17",
   "n": 17,
   "text": "I wish my baby would somehow go away",
   "subscale": "general",
   "positive_wording": false
  },
  {
   "id": "PBQ_19",
   "n": 19,
   "text": "My baby makes me feel anxious",
   "subscale": "anxiety",
   "positive_wording": false
  },
  {
   "id": "PBQ_20",
   "n": 20,
   "text": "I am afraid of my baby",
   "subscale": "anxiety",
   "positive_wording": false
  },
  {
   "id": "PBQ_21",
   "n": 21,
   "text": "My baby annoys me",
   "subscale": "rejection",
   "positive_wording": false
  },
  {
   "id": "PBQ_22",
   "n": 22,
   "text": "I feel confident when caring for my baby",
   "subscale": "anxiety",
   "positive_wording": true
  },
  {
   "id": "PBQ_23",
   "n": 23,
   "text": "I feel the only solution is for someone else to look after my baby",
   "subscale": "rejection",
   "positive_wording": false
  },
  {
   "id": "PBQ_25",
   "n": 25,
   "text": "My baby is easily comforted",
   "subscale": "anxiety",
   "positive_wording": true
  }
 ],
 "excluded_items": {
  "PBQ_18": "harm DISCLOSURE, not a screening item - clinical pathway unsigned (docs/PBQ18_disclosure_pathway.md)",
  "PBQ_24": "infant-directed harm ideation - already asked in the unconditional safety block"
 },
 "subscales": {
  "general": {
   "name": "Difficulties in the mother-infant relationship (general)",
   "items": [
    1,
    2,
    6,
    7,
    8,
    9,
    10,
    12,
    13,
    15,
    16,
    17
   ],
   "range": [
    0,
    60
   ],
   "cutoff_high": 12
  },
  "rejection": {
   "name": "Rejection and pathological anger",
   "items": [
    3,
    4,
    5,
    11,
    14,
    21,
    23
   ],
   "range": [
    0,
    35
   ],
   "cutoff_high": 17
  },
  "anxiety": {
   "name": "Infant-focused anxiety",
   "items": [
    19,
    20,
    22,
    25
   ],
   "range": [
    0,
    20
   ],
   "cutoff_high": 10
  }
 },
 "not_scored": {
  "incipient_abuse": "published subscale of items 18 + 24; not scored because item 18 is excluded and item 24 is handled by the safety block"
 },
 "screener": {
  "items": [
   {
    "n": 1,
    "subscale": "general"
   },
   {
    "n": 14,
    "subscale": "rejection"
   },
   {
    "n": 22,
    "subscale": "anxiety"
   }
  ],
  "positive_score_at_least": 2,
  "positive_score_at_least_if_engine_elevated": 1,
  "engine_elevated_theta": 0.15,
  "engine_domains": [
   "Depression",
   "Anxiety"
  ]
 },
 "rules": [
  {
   "id": "pp_bonding_high_with_distress",
   "when": {
    "all": [
     {
      "flag": "general",
      "is": "high"
     },
     {
      "engine_elevated": true
     }
    ]
   },
   "content_key": "bonding_with_distress"
  },
  {
   "id": "pp_bonding_high",
   "when": {
    "all": [
     {
      "flag": "general",
      "is": "high"
     },
     {
      "engine_elevated": false
     }
    ]
   },
   "content_key": "bonding"
  },
  {
   "id": "pp_anger_high",
   "when": {
    "all": [
     {
      "flag": "rejection",
      "is": "high"
     }
    ]
   },
   "content_key": "anger"
  },
  {
   "id": "pp_infant_anxiety_high",
   "when": {
    "all": [
     {
      "flag": "anxiety",
      "is": "high"
     }
    ]
   },
   "content_key": "infant_anxiety"
  },
  {
   "id": "pp_distress_without_bonding_concern",
   "when": {
    "all": [
     {
      "engine_elevated": true
     },
     {
      "any_flag_high": false
     }
    ]
   },
   "content_key": "distress_only"
  },
  {
   "id": "pp_no_concern_on_this_screen",
   "when": {
    "all": [
     {
      "engine_elevated": false
     },
     {
      "any_flag_high": false
     }
    ]
   },
   "content_key": "no_concern"
  },
  {
   "id": "pp_infant_harm_flag_context",
   "when": {
    "all": [
     {
      "safety_category": "infant_directed_harm"
     }
    ]
   },
   "content_key": "infant_harm_context"
  }
 ],
 "feedback": {
  "bonding_with_distress": {
   "status": "UNSIGNED - DO NOT DEPLOY",
   "heading": null,
   "body": null
  },
  "bonding": {
   "status": "UNSIGNED - DO NOT DEPLOY",
   "heading": null,
   "body": null
  },
  "anger": {
   "status": "UNSIGNED - DO NOT DEPLOY",
   "heading": null,
   "body": null
  },
  "infant_anxiety": {
   "status": "UNSIGNED - DO NOT DEPLOY",
   "heading": null,
   "body": null
  },
  "distress_only": {
   "status": "UNSIGNED - DO NOT DEPLOY",
   "heading": null,
   "body": null
  },
  "no_concern": {
   "status": "UNSIGNED - DO NOT DEPLOY",
   "heading": null,
   "body": null
  },
  "infant_harm_context": {
   "status": "UNSIGNED - DO NOT DEPLOY",
   "heading": null,
   "body": null
  }
 },
 "curtailment": "Once a subscale is expanded its remaining items are asked in order and stopped as soon as the published cut-off is decided: as soon as the running total reaches the cut-off (high), or can no longer reach it even if every remaining item scored 5 (not high). The high / not-high result is identical to asking every item; the exact score is only reported when all items were asked."
};

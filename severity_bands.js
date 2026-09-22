/*
 * AGGREGATE PPD SCORE (Research): four bands, Low / Mild / Moderate / Severe -- PPD-Adapt
 *
 * What this is: after the adaptive questions, the app estimates which published DASS-42 Depression band the respondent would have
 * been in had she answered ALL 14 DASS-42 depression items (the full-scale sum, 0 to 42). Each band gets a probability from the
 * engine's own posterior, and the ordered bands' median (where the cumulative probability first reaches 0.5) is the shown level. The probabilities are shown too, so a
 * borderline result looks borderline.
 *
 * What this is NOT: validated for postpartum depression, and not a diagnosis. The bands are the DASS manual's general-population
 * severity ratings, which describe how a score compares with a general (non-postpartum) population; "mild" there does not mean a mild
 * disorder. No postpartum data links these bands to a clinician's diagnosis. Postpartum-specific facts (bonding and parenting flags,
 * the appetite answer, any safety message) are shown next to the level and are never merged into it. The safety block never depends on it.
 *
 * Status: the band edges are the published ones, but choosing to present them as four ranks, the labels, and the wording on the results
 * screen are provisional design choices. A clinician must review and sign them (set "status" to e.g. "SIGNED 2026-XX-XX by <name>").
 * The deploy gate blocks while the marker below is present.
 *
 * The object below is plain JSON on purpose: selection-engine/scripts/severity_band.py reads it from this file.
 */
const SEVERITY_BANDS = {
 "status": "UNSIGNED - DO NOT DEPLOY",
 "note": "Shown as 'Aggregate PPD Score (Research)': four bands from the published DASS-42 Depression severity ratings, with the other screening results listed beside them as supporting findings that do not change the score. Not validated for postpartum depression and not a diagnosis.",
 "naming_decision": "2026-09-21: the project lead chose the name 'PPD screening classification (research)' with a fixed limits line, and that the other results are listed as supporting findings without changing the level. The analyst's recommendation was to call it 'depressive symptom level' because no postpartum data supports the word PPD; the manuscript must describe it as a provisional composite that is not validated for postpartum depression. 2026-09-22: renamed again to 'Aggregate PPD Score (Research)' by the project lead, and the on-screen disclaimer text was moved into a footnote (marker after the heading) to declutter the card. The analyst noted that 'Score' can read as a number where the shown value is a category (Low/Mild/Moderate/Severe), and that 'Aggregate' should not be read as combining the supporting findings into the score -- it does not; the footnote wording makes that explicit. The manuscript must still describe it as a provisional composite that is not validated for postpartum depression.",
 "rank_rule": "median band of the posterior (the band where the cumulative probability first reaches 0.5); chosen over the most probable band because the bands are ordered and Mild is narrow: on 1,000 real DASS respondents the median rule agreed with the full-scale band 81.6% of the time (98.6% within one band) and shows Mild in about 10% of sessions, whereas the most-probable-band rule showed Mild in 0.1% (evaluation/outputs/7_8_severity_band_evaluation.json)",
 "borderline_below_probability": 0.6,
 "domain": "Depression",
 "scale": "DASS-42 Depression subscale: sum of its 14 items, each scored 0 to 3 (range 0 to 42)",
 "source": "Lovibond & Lovibond (1995), Manual for the Depression Anxiety Stress Scales, severity ratings; edges 0-9 / 10-13 / 14-20 / 21-27 / 28+ as reproduced by secondary sources (novopsych.com DASS-42 scoring page, checked 2026-09-21). NOT checked against the manual itself (paid); confirm before deployment.",
 "licence_status": "PUBLIC DOMAIN - the DASS questionnaire is in the public domain (www2.psy.unsw.edu.au/dass, checked 2026-09-21); the manual is a paid document, only the published band edges are used here",
 "bands": [
  {"key": "low", "label": "Low", "min": 0, "max": 9, "published_label": "Normal"},
  {"key": "mild", "label": "Mild", "min": 10, "max": 13, "published_label": "Mild"},
  {"key": "moderate", "label": "Moderate", "min": 14, "max": 20, "published_label": "Moderate"},
  {"key": "severe", "label": "Severe", "min": 21, "max": 42, "published_label": "Severe (21-27) and Extremely severe (28 and above), combined"}
 ]
};

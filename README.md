# PPD-Adapt - research prototype (static web app)

Client-side only: no server, no API, no analytics, no cookies. Answers stay in the browser tab and are never sent anywhere
(Content-Security-Policy `connect-src 'none'`). **Not a diagnostic tool and not a validated screening instrument.**

Read `DEPLOY_STATUS.md` before sharing the URL.

## Deploy on Vercel
1. Push this folder as its own repository (its root must contain `index.html` and `vercel.json`).
2. Vercel -> Add New Project -> import the repository. Framework preset: **Other**. Build command, install command: leave empty.
   Output directory: `.` (already set in `vercel.json`).
3. While `DEPLOY_STATUS.md` says NOT READY, restrict access (Vercel: Settings -> Deployment Protection, as far as your plan
   offers it) or keep the project private, and do not share the URL with participants.

## Update the app
Do not edit files here. In the source project run `bash scripts/run_all_checks.sh`, then `python scripts/build_deploy.py`,
review the diff, commit and push. (`service-worker.js` has a `CACHE_VERSION` that the source project bumps when files change.)

# Trinity Enterprises V10

## Production / deployment hardening
- Added Cloudflare Workers + OpenNext configuration.
- Added `preview`, `deploy`, and `cf-typegen` npm scripts.
- Added `.dev.vars.example` and `DEPLOYMENT.md`.
- Added basic production security headers and disabled `X-Powered-By`.
- Improved contact-form production error copy so preview configuration details are not exposed to visitors.
- Updated success/contact microcopy to reflect the real Trinity inbox flow.
- Preserved the existing V9 visual system, responsive behavior, product architecture, repeated reveal animations, and image placeholders.

## Not included yet
- Real machinery/product imagery.
- Final verified product specifications/copy.
- Resend API key or domain verification (secrets must be supplied by the owner).
- Cloudflare account/domain connection (done at deployment time).

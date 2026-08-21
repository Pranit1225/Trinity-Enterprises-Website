# V11 Change Log

## Deployment and CI/CD

- Added `.github/workflows/ci.yml` for push/PR lint and production-build checks.
- Added `.github/workflows/deploy.yml` for main-branch Cloudflare Workers deployment.
- Added `npm run preflight` sanity checks.
- Added Node.js engine declaration (`>=20.9.0`).
- Updated version to `0.11.0`.
- Expanded production deployment runbook for GitHub, Cloudflare, and Resend.

## Preserved

- V10 Cloudflare/OpenNext setup.
- Existing visual design and color system.
- Replaying reveal animations.
- Product architecture with McCloskey removed.
- Contact API and friendlier failure state.
- SEO, sitemap, robots, manifest, analytics hook.
- Mobile responsiveness.
- Placeholder image strategy.

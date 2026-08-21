# Trinity Enterprises Website — V11

V11 is the current master codebase for Trinity Enterprises. It keeps the V10 visual system and production setup, and adds the final CI/CD foundation for GitHub + Cloudflare Workers deployments.

## Run locally

```powershell
npm.cmd install
npm.cmd run preflight
npm.cmd run dev
```

For a production-like Cloudflare runtime preview:

```powershell
npm.cmd run preview
```

## What V11 adds

- GitHub Actions CI on pushes and pull requests.
- Automated lint + production build checks.
- Main-branch deployment workflow for Cloudflare Workers.
- Cloudflare credentials passed through GitHub Actions secrets only.
- Production configuration passed through GitHub Actions variables/secrets.
- `npm run preflight` for a quick local project/deployment sanity check.
- Node.js engine declaration for predictable CI/local environments.
- Existing V10 features remain: contact API, Resend support, SEO, sitemap, robots, analytics hook, product routes, mobile behavior, repeated reveal animations, Cloudflare/OpenNext configuration, and placeholder imagery.

Images remain intentionally as placeholders until the image/content pass.

## V11 user checklist

### You need to do locally

1. Run `npm.cmd install`.
2. Run `npm.cmd run preflight`.
3. Run `npm.cmd run lint`.
4. Run `npm.cmd run build`.
5. Run `npm.cmd run preview` and check the main page, products page, product routes, contact form, mobile layout, repeated animations, map, and 404.

### You will need to do on your accounts

1. Push this project to the GitHub repository.
2. Add the three GitHub repository secrets listed in `DEPLOYMENT.md`.
3. Add the five GitHub repository variables listed in `DEPLOYMENT.md`.
4. Configure the Resend sending domain and DNS records.
5. Connect the custom domain in Cloudflare.

Do not put any API keys or private credentials into the repository.

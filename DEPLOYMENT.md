# Trinity Enterprises — V11 Deployment Runbook

V11 prepares the project for a GitHub-driven production deployment to Cloudflare Workers using the OpenNext adapter.

Cloudflare's current Next.js guidance supports App Router and Route Handlers on Workers via OpenNext, and recommends previewing with the Cloudflare adapter because it runs in the Workers runtime rather than Node's local dev runtime. citeturn680886search0

## 1. Your first local test

```powershell
npm.cmd install
npm.cmd run preflight
npm.cmd run lint
npm.cmd run build
```

Then test the Cloudflare-style runtime:

```powershell
npm.cmd run preview
```

This is important because Cloudflare notes that `next dev` runs in Node.js while `preview` runs the application through the Workers runtime. citeturn680886search0

## 2. GitHub setup — YOUR ACTION

Create or open the GitHub repository for this project and push the full V11 codebase.

Recommended repository settings:

- Keep the repository private unless Dad specifically wants it public.
- Protect the `main` branch once the first CI run succeeds.
- Require the CI workflow to pass before merging.
- Do not commit `.env`, `.env.local`, `.dev.vars`, API keys, or other credentials.

The CI workflow is already in `.github/workflows/ci.yml`.

## 3. Cloudflare credentials — YOUR ACTION

The deployment workflow expects these GitHub repository secrets:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
RESEND_API_KEY
```

And these GitHub repository variables:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
CONTACT_TO_EMAIL
CONTACT_FROM_EMAIL
```

Never paste secrets into source files.

Cloudflare's current tooling supports Wrangler-based deployment and automatic framework configuration, while this project already contains explicit Wrangler/OpenNext configuration. citeturn680886search2turn680886search4

## 4. Resend setup — YOUR ACTION

In Resend, add and verify the sending domain you want to use for `CONTACT_FROM_EMAIL`. Resend's current flow uses DNS records for domain verification, including the records shown in its dashboard. citeturn680886search3turn680886search8

Suggested production values:

```text
CONTACT_TO_EMAIL=trinity1entp@gmail.com
CONTACT_FROM_EMAIL=Website Enquiries <website@trinityentp.com>
```

Only use the sender address after the domain is verified in Resend.

## 5. Cloudflare custom domain — YOUR ACTION

After the first Worker deployment, attach the production hostname(s) in Cloudflare and decide which hostname should be canonical.

Recommended:

```text
https://www.trinityentp.com
```

or

```text
https://trinityentp.com
```

Use the same value in `NEXT_PUBLIC_SITE_URL`.

## 6. First live deployment

After GitHub secrets/variables are configured, merge a tested change into `main`.

The deployment workflow will:

1. Install dependencies with `npm ci`.
2. Run lint.
3. Build the production application.
4. Run the Cloudflare deployment command.

Cloudflare's current documentation supports deployment from a CI/CD system, including Wrangler-based workflows. citeturn680886search0turn680886search5

## 7. Go-live test — YOUR ACTION

On the live domain, test:

- Home page.
- Navigation and mobile menu.
- Products page.
- Every product route.
- Repeated scroll reveal when moving both down and up.
- Contact form from desktop.
- Contact form from a phone.
- WhatsApp link.
- Phone link.
- Map and GPS directions.
- 404 page.
- Direct loading of a product URL.
- Refreshing a product URL.
- HTTPS certificate.
- Canonical URL and page metadata.
- Sitemap and robots endpoints.
- Google Search Console verification.
- Cloudflare Web Analytics.
- Actual email delivery to Gmail and Reply-To behavior.

## 8. What is still intentionally not done

- Final machinery imagery.
- Final verified product copy/specifications.
- Final approved brand/manufacturer imagery.
- Exact production email/domain credentials.

These belong to the content/image and go-live phases rather than being guessed during development.

# Trinity Enterprises — Production Deployment (V10)

This codebase is prepared for a full-stack Next.js deployment on Cloudflare Workers using the OpenNext adapter. Cloudflare currently recommends Workers for full-stack Next.js applications, including Route Handlers such as `/api/contact`.

## 1. Local development

```powershell
npm.cmd install
npm.cmd run dev
```

## 2. Production environment variables

Set these as Cloudflare Worker secrets/variables before deployment:

```text
NEXT_PUBLIC_SITE_URL=https://www.trinityentp.com
NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=<Cloudflare Web Analytics token>
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<Google Search Console verification token>
RESEND_API_KEY=<Resend API key>
CONTACT_TO_EMAIL=trinity1entp@gmail.com
CONTACT_FROM_EMAIL=Website Enquiries <website@trinityentp.com>
```

`CONTACT_FROM_EMAIL` must use a sender address/domain that has been verified with the email provider.

## 3. Cloudflare setup

Install dependencies:

```powershell
npm.cmd install
```

Authenticate Wrangler when prompted:

```powershell
npx wrangler login
```

Generate Cloudflare environment types:

```powershell
npm.cmd run cf-typegen
```

Preview the production worker locally:

```powershell
npm.cmd run preview
```

Deploy:

```powershell
npm.cmd run deploy
```

After the first deployment, connect `trinityentp.com` and `www.trinityentp.com` in the Cloudflare dashboard and set the desired canonical hostname in `NEXT_PUBLIC_SITE_URL`.

## 4. Email delivery

The contact endpoint sends authenticated transactional email through Resend and sets the visitor's email as `Reply-To`. The site itself never exposes the API key to the browser.

## 5. Pre-launch checks

- Verify the exact office location and GPS destination.
- Replace all image placeholders with approved Trinity imagery.
- Replace remaining placeholder product descriptions/specifications with verified source material.
- Verify all manufacturer/brand names and trademark language.
- Submit a real enquiry from desktop and mobile.
- Confirm the enquiry reaches `trinity1entp@gmail.com`.
- Verify the reply path goes back to the visitor's email.
- Verify Google Search Console.
- Verify Cloudflare Web Analytics.
- Test all product routes and the 404 page.

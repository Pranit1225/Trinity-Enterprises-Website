# Trinity Enterprises Website — V9

V9 is the current master codebase. Run with:

```powershell
npm.cmd install
npm.cmd run dev
```

V9 adds the production contact API, Resend email delivery support, honeypot + lightweight rate limiting, Cloudflare Web Analytics hook, SEO metadata, sitemap, robots, manifest, loading/404/error states, accessibility polish, WhatsApp/direct call actions, dynamic product metadata, and related product navigation.

Images remain intentionally as placeholders until the image/content pass.

## Contact form delivery
Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and a verified `CONTACT_FROM_EMAIL`. The destination may be Gmail. Visitor email is used as `reply_to`.

## Analytics
Set `NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` to enable Cloudflare Web Analytics.

## SEO
Set `NEXT_PUBLIC_SITE_URL` to the real production URL before deployment.

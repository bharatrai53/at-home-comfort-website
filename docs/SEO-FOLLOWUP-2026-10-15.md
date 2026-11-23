# Website SEO follow-up — October 15, 2026

This pass improves the website independently of Google Business Profile. Existing page copy and headings remain unchanged, and the homepage layout is preserved.

## Implemented

- Fixed the internal discovery gap: all 38 sitemap pages are now reachable from the homepage through real links. The existing footer has one native, collapsed “Browse all local guides” disclosure containing the 31 existing local pages. It is usable without JavaScript. No invisible keyword text or new city pages were added. Link prefetch is disabled in the expanded directory to avoid speculative downloads of every guide.
- Added linked WebPage, AboutPage, and ContactPage entities using canonical URLs. Each references the existing WebSite and real Manteca business IDs. This improves entity consistency; it does not guarantee a rich result or ranking gain.
- Added optional Google Search Console and Bing Webmaster verification metadata through build environment variables. Search Console is separate from Google Business Profile and can be set up before the profile is complete.
- Generated a 1200×630 sharing photo from the actual facility exterior. Default Open Graph/Twitter images use this static asset; Open Graph includes its true dimensions. This is a sharing-presentation improvement, not an organic-ranking promise.
- Strengthened export validation to fail on orphan pages, incorrect WebPage identities, and the wrong sharing-image dimensions.

## Verification setup

For Google's HTML-tag method, create a URL-prefix property for `https://athomecomfortliving.com/` in Search Console. Copy only the content value from its verification tag into Netlify's `GOOGLE_SITE_VERIFICATION` build environment variable. Set `BING_SITE_VERIFICATION` similarly if using Bing Webmaster Tools. Rebuild/deploy, then complete verification in the corresponding service. Empty values emit no verification tag.

`.env.example` documents the variables. These values are public verification tokens, not account credentials. Domain-property verification uses DNS instead and does not require the HTML-tag variable.

After verification, submit `https://athomecomfortliving.com/sitemap.xml`. Inspect the homepage and main Manteca/Stockton pages for indexed status, last crawl, and Google-selected canonical. Track non-branded impressions/clicks and actual tour enquiries. Source code cannot complete account verification or provide Search Console performance without access.

## Remaining owner inputs

The public business schema currently has Manteca, California, telephone, email, and license identifier. Complete the verified street address and ZIP code only after the owner supplies them and approves public display. No address, opening hours, reviews, prices, or business profiles were invented.

More metadata alone cannot establish local prominence. Genuine reviews, relevant listings/links, useful differentiated information, and the eventual Business Profile remain part of local SEO. Keep the single actual facility location clear; city landing pages do not represent additional branches.

## Validation

`npm run build`, `npm run seo:check`, and `git diff --check` pass. The export contains 38 indexable pages, with unique titles/descriptions, correct canonicals, valid JSON-LD, complete internal reachability, and preserved hero copy.

These changes are local. They have not been pushed or deployed as part of this follow-up.

References: [Google link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), [sitemap limitations](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview), [Next.js verification metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata).

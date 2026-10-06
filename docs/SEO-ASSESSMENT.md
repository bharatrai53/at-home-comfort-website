# SEO assessment — At Home Comfort Assisted Living

Assessed October 6, 2026. The local Next.js implementation now has a sound technical SEO foundation. The largest remaining opportunities are stronger local business evidence, distinct content for overlapping service/location pages, and measurement after deployment.

## Scope and evidence

Reviewed all 38 indexable routes: seven core pages and 31 local landing pages. Inspected source, production HTML, metadata, headings, JSON-LD, sitemap, robots, internal crawl graph, and image references. Opened the public homepage for context, but the deployed site is not proof that these local changes are live.

`npm run build` and `npm run seo:check` pass. The validator checks every sitemap URL, unique titles/descriptions, a single h1 per page, self-canonical URLs, social tags, valid JSON-LD, FAQ text, links/assets, crawl reachability, utility-page noindex, and hero loading priority.

No Search Console, Business Profile, analytics, crawl logs, backlink data, Lighthouse run, browser interaction audit, or real-user Core Web Vitals data was available. This is a source/export assessment, not a ranking score or confirmation of Google indexing.

## Findings and implemented changes

| Area | Finding | Result |
| --- | --- | --- |
| Rendering | Next.js already exported real HTML for all routes | Preserved static generation and existing public URLs |
| Metadata | Core metadata repeated across route files; homepage and Manteca titles matched | Centralized core configuration; made the Manteca title distinct; verified all titles/descriptions are unique |
| Canonicalization | Production canonicals and trailing-slash URLs already present | Preserved self-canonicals; validated against generated sitemap |
| Sitemap | Hand-maintained file could drift from routing; old dates had no tracked revision source | Next.js sitemap derives from core/local configuration; omitted unsupported modification dates |
| Robots | Static public file separate from Next.js | Next.js metadata route generates robots.txt and sitemap reference; allows asset crawling |
| Snippets | No explicit image/snippet preview policy | Added index/follow and Google preview directives through metadata |
| Structured data | Business schema lacked stable identity and image; repeated business definitions varied by page | One shared LocalBusiness definition per page with stable ID, image/logo, and a linked WebSite entity; retained breadcrumbs and accurate FAQ schemas |
| FAQ discoverability | Only one category rendered in HTML although schema described all categories | Every category and answer is in the exported HTML; native details accordions and anchor navigation work without JavaScript |
| Initial text visibility | Reveal wrappers began with opacity zero | Content remains visible; movement animation enhances it after hydration and honors reduced motion |
| Crawl discovery | Navigation favored city hubs over alternate service pages | Added same-area service links; verified all 38 pages are reachable from homepage anchors |
| Image delivery | JPEG/PNG originals, incomplete intrinsic dimensions, lazy homepage hero | Automatic build-time WebP variants, srcset/sizes, intrinsic dimensions; eager high-priority hero and lazy below-fold images |
| Third-party tour | Embedded tour loaded eagerly | Added lazy iframe loading |
| Utility URLs | Hidden form detection page could be indexed | Added meta noindex and Netlify X-Robots-Tag; excluded utility/404 URLs from sitemap |
| Regression prevention | No automated export SEO validation | Added `npm run seo:check` |

The homepage hero original is 240,533 bytes; its full-width 900px WebP is 82,568 bytes, about 66% smaller. Mobile has a 480px variant. These are file-size measurements, not measured LCP improvement. The pipeline prepares 24 original images and preserves the source files.

## Next.js architecture

The App Router generates page metadata and local landing routes at build time. Sitemap/robots metadata routes explicitly use static generation. Core metadata comes from `src/seo/site.js`; local metadata and content come from `src/data/localPages.js`.

Static export is appropriate for this informational website. Responsive images are generated with Sharp during prebuild/predev and rendered through SiteImage. The default Next.js image optimization server requires a server or another supported optimization strategy, so this implementation serves pre-generated image files. See [Next.js static export guidance](https://nextjs.org/docs/app/guides/static-exports).

SEO checks validate the exported artifact, not only component configuration. Run:

```bash
npm run build
npm run seo:check
```

## Remaining opportunities, in priority order

### 1. Confirm and publish complete local business details

Visible contact information and schema currently identify Manteca, CA, telephone, email, and license number, but no verified full street address/postcode or business profile link is supplied in the source. Confirm which address is appropriate to publish for this residential care home. Keep the published name/address/phone consistent with the actual Google Business Profile and other listings.

After verification, add the approved address to contact/footer content and business schema; add the real Business Profile/maps URL and legitimate official profiles. Use genuine operating/contact hours only. No street address, geographic coordinates, ratings, testimonials, capacity, prices, or hours were invented. Current schema parses correctly but is not a promise of LocalBusiness rich-result eligibility. See [Google's LocalBusiness requirements](https://developers.google.com/search/docs/appearance/structured-data/local-business).

### 2. Review overlapping local pages for distinct value

31 local pages describe one Manteca home. Several nearby cities have separate assisted-living, board-and-care, and senior-care pages. Their core message and conversion destination are similar. This creates potential query overlap and doorway-like patterns; it is an editorial assessment, not evidence of a Google penalty. Different titles and extra word count alone do not establish distinct usefulness.

Start with Stockton, Tracy, Lathrop, Ripon, Lodi, and Modesto page groups. Compare query/impression data and identify whether each page answers a separate family decision. Add verified, practical information such as visiting arrangements, actual service limitations, admission questions, and local resources. Clearly state that the facility is in Manteca, including when serving families from other cities.

If pages serve the same intent, consolidate into one useful city page and implement permanent redirects from retired URLs at the host. Do not arbitrarily point all city canonicals at the homepage. No indexed URLs were retired during this technical optimization. Google's [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) describe doorway abuse and scaled content concerns.

### 3. Strengthen care-related trust and decision support

The founder story, license reference, real facility imagery, and contact information are useful strengths. Extend them with verified staff roles, care qualifications, who reviews care information, a transparent distinction between residential daily support and skilled medical care, and practical admission/cost/payment information. Cite authoritative sources for factual regulatory or medical claims. Keep claims consistent with the actual licensed service.

The homepage h1 now leads with “Assisted Living in Manteca, CA.” Main area pages target assisted-living intent, and the homepage directly links all served areas. See [the local-search plan](LOCAL-SEARCH-PLAN.md) for the query-to-page mapping. Several local titles are around 65–75 characters; descriptions run up to 174. These may truncate depending on display width. Google has no fixed character-count guarantee; prioritize clear intent and recognizable branding over mechanically shortening every page.

### 4. Measure deployed experience and indexing

After deployment, verify HTTPS/domain variants converge on the canonical production host, actual HTTP 404 responses for unknown paths, trailing-slash handling, utility noindex headers, and delivered sitemap/robots content. Netlify has the custom 404 rule, but local static export validation cannot prove host response behavior.

Submit the sitemap in Search Console; inspect representative core/local URLs, Google-selected canonicals, duplicate exclusions, and index coverage. Monitor query overlap before consolidating pages. Confirm Netlify form delivery and track successful tour requests/calls with the site's chosen analytics setup.

Run mobile Lighthouse/PageSpeed and use Search Console/CrUX real-user data for LCP, CLS, and INP. Image changes improve delivery mechanics, but responsive intrinsic dimensions do not guarantee zero layout shift. Some image containers and third-party scripts can still affect the result. External Google Fonts remain; self-hosting approved font files with next/font/local is a further performance option. See [Google's Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals).

### 5. Improve social presentation

Each page has Open Graph and Twitter metadata and a descriptive image alt value. The default exterior photo is valid but not a custom 1200×630 branded sharing card. Add a designed social image if desired and test cropping on the target platforms. There is no fabricated search action, video duration, rating, or offer markup.

## FAQ and AI-search expectations

Retained FAQPage schema because it describes actual visible questions and answers. Google stopped displaying FAQ rich results on May 7, 2026 and removed the documentation in June. It should not be marketed as a Google rich-snippet capability. See the [official documentation updates](https://developers.google.com/search/updates).

Clear answers, accessible HTML, accurate business identity, and useful original information are worthwhile for search and other consumers. No schema, framework switch, FAQ markup, or llms.txt file guarantees AI citations or ranking improvements.

## Deployment boundary

All changes are local and reviewable; they have not been published. Build generates `out/`, including responsive assets. Netlify must deploy this output for the changes to affect the public site. Google still chooses whether to index pages, which canonical to use, and how to display titles/snippets.

## Owner-directed presentation correction

The original homepage headline/body copy and local headings, introductions, descriptions shown on the page, and FAQ titles have been restored. The new homepage location directory and added related-care section were removed. Assisted-living titles and search descriptions remain in metadata; separate seoDescription fields avoid changing visible subtitles. Original city-link text is preserved. No invisible keyword links were added. This supersedes earlier claims about direct homepage links to every served area and modified visible headings. Crawl validation now reports supporting pages that are in the sitemap but not reachable through existing page links.

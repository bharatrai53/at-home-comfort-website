# Lazy-loading and responsive-layout assessment

Assessed October 6, 2026 against the local Next.js production export. Page copy is unchanged.

## Outcome

All 38 indexable pages passed horizontal-overflow checks at 320, 375, 768, 1024, and 1440px widths: 190 page/viewport combinations. Navigation, gallery, FAQ, and form-layout interactions also passed at those five widths using a short 568px viewport. The production build, SEO checks, and whitespace checks pass.

Tests ran in headless desktop Chrome with viewport resizing, not physical phones or Safari. The comprehensive layout pass used a 900px viewport height. External fonts were allowed in the final pass; the external Matterport tour was blocked to isolate local page behavior. Form delivery was not tested and no request was submitted. This is not a Lighthouse, Core Web Vitals, accessibility certification, or visual comparison across browsers.

## Loading inventory

Rendered images at 375px before opening a photo modal:

| Page | Total | Eager | Lazy | Still deferred at initial inspection |
| --- | ---: | ---: | ---: | ---: |
| Home | 10 | 2 | 8 | 7 |
| About | 3 | 1 | 2 | 1 |
| Care & services | 4 | 2 | 2 | 2 |
| Virtual tour | 9 | 2 | 7 | 3 |
| Admissions | 2 | 1 | 1 | 1 |
| FAQs | 2 | 1 | 1 | 1 |
| Schedule a tour | 2 | 1 | 1 | 0 |
| Local landing page (shared template) | 3 | 2 | 1 | 1 |

Counts include navigation/footer logos. Local pages share the same eager hero and lazy footer behavior. All 31 local pages were included in the layout pass.

- Navigation logo: eager; it is immediately visible.
- Homepage and photographic page heroes: eager, high fetch priority, full-viewport image-size hint.
- Content photos, amenity thumbnails, and footer logo: native lazy loading with responsive WebP variants.
- Matterport iframe: native lazy loading; its internal rendering/network behavior remains outside this local test.
- Opened gallery image: now eager. The modal only renders after opening, so waiting for another lazy-loading threshold provides no benefit.
- FAQ accordions: native details/summary; do not require hydration to open.
- Other interactive components: normal Next.js client hydration. They are not all dynamically imported; this assessment does not claim zero initial JavaScript.

Native lazy loading may fetch photos before they become visible, according to browser thresholds. It also loads nearby footer images on shorter pages. Those observations are expected, rather than evidence that the lazy attribute failed. Initial homepage image-request counts varied from two at 320px to five at 1440px in the short-height interaction pass.

## Findings and fixes

| Finding | Change |
| --- | --- |
| Homepage overflow at 320px in the initial browser pass | Flex-column minimum widths now fit their available container; photo-grid columns use minmax(0, …) |
| Phone navigation had a large logo/text footprint | Compact logo/title sizing below 600px |
| Desktop navigation had limited room at tablet widths | Mobile navigation breakpoint moved from 860px to 1180px |
| Open menu used a fixed viewport without its own scroll behavior | Scrollable menu with header clearance and bottom safe-area padding; verified the bottom Call Us link is reachable |
| Page could scroll behind the mobile menu | Lock background scrolling while open; restore previous overflow when closed; Escape closes it |
| Menu toggle lacked expanded-state metadata | Added aria-expanded and aria-controls |
| Sticky mobile CTA could cover final page content | Reserved bottom space on mobile/tablet and allowed for device safe areas |
| Generic image sizes overestimated small amenity thumbnails | Added grid-specific responsive size hints |
| Full-width homepage photo used a column-size hint | Added full-viewport sizes hint |
| Opened modal image inherited lazy loading | Eager loading and modal-specific responsive sizes |
| Narrow-phone amenity grid squeezed cards into two columns | Single-column cards below 400px; more compact homepage photo-grid rows |
| 600px-high virtual-tour embed consumed too much phone space | Phone iframe height reduced to 400px |
| CSS ticker/modal transitions ignored reduced-motion preference | Added a shared reduced-motion rule |

The earlier shared-image height fix remains in place: intrinsic HTML dimensions reserve image space, while CSS controls its displayed height. Explicit hero/gallery fill heights are preserved.

## Image-crop verification

The “Your Family Is in Good Hands” photo now measures:

| Viewport | Image width × height |
| --- | --- |
| 320px | 224 × 280px |
| 375px | 279 × 348.75px |
| 768px | 672 × 840px |
| 1024px | 424 × 530px |
| 1440px | 476 × 595px |

Each is exactly the intended 4:5 ratio. At tablet width the stacked photo is naturally taller because it fills a wider column; it is not distorted.

## Browser interactions verified

- Mobile logo and toggle do not overlap at the tested widths.
- Menu opens, permits scrolling to its bottom links, locks background scrolling, and closes with Escape.
- Gallery opens, displays a decoded photo without horizontal overflow, and closes with Escape.
- Native FAQ accordion opens.
- Tour-name field accepts input; form page has no horizontal overflow.
- The corrected trust photo decodes and maintains its ratio at each width.

## Remaining checks and maintenance

1. Check iPhone Safari and Android Chrome on actual devices for dynamic browser toolbars, safe areas, keyboard/form behavior, and touch scrolling.
2. Test the real Matterport embed and form delivery on the deployed site.
3. Measure deployed LCP, CLS, and INP. Responsive layout and smaller images do not establish real-user performance scores.
4. Revisit tablet photo height only if a different composition is desired; that would change presentation beyond this sizing assessment.
5. If bundle measurement shows the virtual-tour page's initial JavaScript is significant, consider dynamically importing its photo modal. It currently mounts on demand, but its code is imported with the page.
6. Continue running `npm run build` and `npm run seo:check`. Browser measurements here used a temporary Playwright installation outside the project; no permanent browser-test dependency was added.

Changes are local and have not been deployed.

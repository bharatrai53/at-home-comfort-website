/**
 * Build-time pre-renderer (runs after `vite build`).
 *
 * 1. Builds an SSR bundle from src/entry-server.jsx via Vite's programmatic API.
 * 2. Imports the bundle's render() function.
 * 3. Renders every route to a string (body HTML + collected head data).
 * 4. Injects head data + body HTML into the dist/index.html template.
 * 5. Writes dist/[route]/index.html for every route.
 * 6. Deletes the temporary SSR bundle directory.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

// ─── Route list (single source of truth) ─────────────────────────────────────
const staticRoutes = [
  '/',
  '/about/',
  '/care-and-services/',
  '/virtual-tour/',
  '/admissions/',
  '/faqs/',
  '/schedule-a-tour/',
]

const { localPageConfigs } = await import(
  pathToFileURL(path.join(root, 'src/data/localPages.js')).href
)

const allRoutes = [...staticRoutes, ...localPageConfigs.map((c) => c.path), '/404']

// ─── Build SSR bundle ─────────────────────────────────────────────────────────
console.log(`\nBuilding SSR bundle for ${allRoutes.length} routes…`)
await build({
  root,
  configFile: path.join(root, 'vite.config.js'),
  logLevel: 'warn',
  build: {
    ssr: true,
    rollupOptions: {
      input: path.join(root, 'src/entry-server.jsx'),
      output: {
        format: 'es',
        entryFileNames: 'entry-server.js',
      },
    },
    outDir: ssrDir,
    emptyOutDir: true,
  },
})

// ─── Import render function from the built bundle ─────────────────────────────
const { render } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

// ─── HTML template (from the prior `vite build` step) ────────────────────────
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

// ─── Head injection helpers ───────────────────────────────────────────────────
function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function injectHead(html, { title = '', description = '', canonical = '', image = '' }) {
  const t = esc(title)
  const d = esc(description)
  const c = esc(canonical)
  const img = esc(image || 'https://athomecomfortliving.com/outside.jpg')

  // <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)

  // Primary description meta
  html = html.replace(
    /<meta[^>]+name="description"[^>]*>/,
    `<meta name="description" content="${d}" />`
  )

  // Canonical link (add after </title> if absent)
  if (/<link[^>]+rel="canonical"[^>]*>/.test(html)) {
    html = html.replace(
      /<link[^>]+rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${c}" />`
    )
  } else {
    html = html.replace('</title>', `</title>\n    <link rel="canonical" href="${c}" />`)
  }

  // OG tags
  html = html.replace(/<meta[^>]+property="og:url"[^>]*>/, `<meta property="og:url" content="${c}" />`)
  html = html.replace(/<meta[^>]+property="og:title"[^>]*>/, `<meta property="og:title" content="${t}" />`)
  html = html.replace(/<meta[^>]+property="og:description"[^>]*>/, `<meta property="og:description" content="${d}" />`)
  html = html.replace(/<meta[^>]+property="og:image"[^>]*>/, `<meta property="og:image" content="${img}" />`)

  // Twitter tags
  html = html.replace(/<meta[^>]+name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}" />`)
  html = html.replace(/<meta[^>]+name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}" />`)
  html = html.replace(/<meta[^>]+name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${img}" />`)

  return html
}

// ─── Render every route ───────────────────────────────────────────────────────
console.log(`\nPre-rendering ${allRoutes.length} routes…`)
let ok = 0
let fail = 0

for (const routePath of allRoutes) {
  try {
    const { html: appHtml, head } = render(routePath)

    let html = injectHead(template, head)

    // Inject rendered app HTML; add data-ssr marker for hydrateRoot in main.jsx
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root" data-ssr="true">${appHtml}</div>`
    )

    // '/'    → dist/index.html
    // '/404' → dist/404.html  (flat file Netlify serves for unmatched paths)
    // '/foo/' → dist/foo/index.html
    if (routePath === '/404') {
      fs.writeFileSync(path.join(distDir, '404.html'), html, 'utf-8')
    } else {
      const slug = routePath.replace(/^\//, '').replace(/\/$/, '')
      const outputDir = slug ? path.join(distDir, slug) : distDir
      fs.mkdirSync(outputDir, { recursive: true })
      fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf-8')
    }

    process.stdout.write(`  ✓ ${routePath}\n`)
    ok++
  } catch (err) {
    process.stderr.write(`  ✗ ${routePath}: ${err.message}\n`)
    fail++
  }
}

// ─── Clean up SSR bundle ──────────────────────────────────────────────────────
fs.rmSync(ssrDir, { recursive: true, force: true })

console.log(`\n${ok} pages generated${fail > 0 ? `, ${fail} failed` : ''}.`)
if (fail > 0) process.exit(1)

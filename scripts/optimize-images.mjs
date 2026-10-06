import { readdir, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const output = path.join(publicDir, 'optimized');
await mkdir(output, { recursive: true });
const manifest = {};
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { if (entry.name !== 'optimized') await walk(file); continue; }
    if (!/\.(jpe?g|png)$/i.test(entry.name)) continue;
    const source = '/' + path.relative(publicDir, file).split(path.sep).join('/');
    const metadata = await sharp(file).rotate().metadata();
    const swapped = [5, 6, 7, 8].includes(metadata.orientation);
    const width = swapped ? metadata.height : metadata.width;
    const height = swapped ? metadata.width : metadata.height;
    const variants = [];
    for (const size of [...new Set([480, 960, 1600, width].filter(w => w <= Math.min(width, 1600)))]) {
      const name = `${source.slice(1).replace(/[^a-zA-Z0-9_-]/g, '_')}-${size}.webp`;
      const destination = path.join(output, name);
      let fresh = false;
      try { fresh = (await stat(destination)).mtimeMs >= (await stat(file)).mtimeMs; } catch {}
      if (!fresh) await sharp(file).rotate().resize({ width: size, withoutEnlargement: true }).webp({ quality: 80 }).toFile(destination);
      variants.push({ width: size, src: `/optimized/${name}` });
    }
    manifest[source] = { width, height, variants: variants.sort((a, b) => a.width - b.width) };
  }
}
await walk(publicDir);
await writeFile('src/data/images.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared responsive WebP images for ${Object.keys(manifest).length} originals.`);

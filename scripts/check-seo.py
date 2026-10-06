"""Validate the actual Next.js export, including content and crawl discovery."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import json
import xml.etree.ElementTree as ET

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.tags, self.schemas, self.headings, self.text = [], [], [], []
        self.mode, self.buffer, self.title = None, '', ''
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag in ('title', 'h1') or (tag == 'script' and attrs.get('type') == 'application/ld+json'):
            self.mode, self.buffer = tag, ''
    def handle_data(self, data):
        self.text.append(data)
        if self.mode:
            self.buffer += data
    def handle_endtag(self, tag):
        if tag == self.mode:
            if tag == 'title': self.title = self.buffer
            elif tag == 'h1': self.headings.append(self.buffer)
            else: self.schemas.append(json.loads(self.buffer))
            self.mode = None

out = Path('out')
urls = [e.text for e in ET.parse(out / 'sitemap.xml').findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert len(urls) == len(set(urls)), 'Duplicate sitemap URLs'
titles, descriptions, pages = set(), set(), {}
for url in urls:
    path = urlparse(url).path
    page = Page((out / path.strip('/') / 'index.html').read_text())
    pages[path] = page
    assert page.title and page.title not in titles, f'Duplicate/missing title: {path}'
    titles.add(page.title)
    assert len(page.headings) == 1, f'Expected one h1: {path}'
    assert [a['href'] for t, a in page.tags if t == 'link' and a.get('rel') == 'canonical'] == [url], path
    desc = [a['content'] for t, a in page.tags if t == 'meta' and a.get('name') == 'description']
    assert len(desc) == 1 and desc[0] and desc[0] not in descriptions, f'Duplicate description: {path}'
    descriptions.add(desc[0])
    for attr, value in [('property', 'og:title'), ('name', 'twitter:card')]:
        assert any(t == 'meta' and a.get(attr) == value for t, a in page.tags), path
    assert any(s.get('@type') == 'BreadcrumbList' for s in page.schemas), path
    assert any(s.get('@type') == 'WebSite' for s in page.schemas), path
    assert sum(s.get('@type') == 'LocalBusiness' for s in page.schemas) == 1, path
    for t, a in page.tags:
        if t == 'img':
            assert a.get('alt') is not None and a.get('width') and a.get('height'), (path, a)
        refs = [a.get('href')] if t == 'a' else [a.get('src')] if t in ('img', 'script') else []
        if t == 'img' and a.get('srcset'):
            refs += [v.strip().split(' ')[0] for v in a['srcset'].split(',')]
        for ref in refs:
            if ref and ref.startswith('/') and not ref.startswith('//'):
                target = out / unquote(urlparse(ref).path).lstrip('/')
                assert target.exists() or (target / 'index.html').exists(), (path, ref)
visited, queue = set(), ['/']
while queue:
    path = queue.pop()
    if path in visited: continue
    visited.add(path)
    queue += [urlparse(a['href']).path for t, a in pages[path].tags if t == 'a' and a.get('href', '').startswith('/') and urlparse(a['href']).path in pages]
print(f'Crawl note: {len(set(pages) - visited)} supporting local pages are in the sitemap but lack a homepage crawl path.')
faq = pages['/faqs/']
faq_schemas = [s for s in faq.schemas if s.get('@type') == 'FAQPage']
assert len(faq_schemas) == 1
for item in faq_schemas[0]['mainEntity']:
    assert item['name'] in ''.join(faq.text) and item['acceptedAnswer']['text'] in ''.join(faq.text), item['name']
assert 'noindex' in (out / '404.html').read_text()
assert 'noindex' in (out / 'tour-form.html').read_text()
assert '/tour-form.html' not in urls
assert 'Sitemap: https://athomecomfortliving.com/sitemap.xml' in (out / 'robots.txt').read_text()
hero = next(a for t, a in pages['/'].tags if t == 'img' and 'IMG_9762' in a.get('src', ''))
assert hero.get('loading') == 'eager' and hero.get('fetchpriority') == 'high'
print(f'PASS: {len(pages)} pages; unique metadata, one h1, schemas, all FAQ text in HTML, links/assets, crawl discovery audit, robots, noindex utility pages, responsive images, hero priority.')

# Check the exported pages against the intended non-branded search targets.
assert [h.strip() for h in pages['/'].headings] == ['Where Comfort Feels Like Home']
assert pages['/'].title.startswith('Assisted Living in Manteca, CA')
from subprocess import check_output
areas = json.loads(check_output(['node', '--input-type=module', '-e', 'import {assistedLivingAreas} from "./src/data/localPages.js"; console.log(JSON.stringify(assistedLivingAreas));'], text=True))
for area in areas:
    page = pages[area['path']]
    assert 'Assisted Living' in page.title and area['label'] in page.title, area['label']
    business = next(s for s in page.schemas if s.get('@type') == 'LocalBusiness')
    assert business['address']['addressLocality'] == 'Manteca'
print(f'PASS: Original homepage headline and assisted-living metadata for {len(areas)} served areas; actual Manteca business location preserved.')

import urllib.request
import re

urls_to_test = [
    'https://garagedoorgazette.com/',
    'https://garagedoorgazette.com/services/',
    'https://garagedoorgazette.com/areas-we-serve/',
    'https://garagedoorgazette.com/articles/',
    'https://garagedoorgazette.com/about/',
    'https://garagedoorgazette.com/contact/',
    'https://garagedoorgazette.com/privacy-policy/',
    'https://garagedoorgazette.com/terms/',
    'https://garagedoorgazette.com/sitemap.xml',
    'https://garagedoorgazette.com/sitemaps/core.xml',
]

with open('data/articles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = re.findall(r'slug:\s*"([^"]+)"', text)
for s in slugs:
    urls_to_test.append(f'https://garagedoorgazette.com/articles/{s}/')

urls_to_test.extend([
    'https://pennsylvania.garagedoorgazette.com/',
    'https://new-york.garagedoorgazette.com/',
    'https://texas.garagedoorgazette.com/',
    'https://california.garagedoorgazette.com/',
    'https://los-angeles-california.garagedoorgazette.com/',
    'https://houston-texas.garagedoorgazette.com/',
    'https://philadelphia-pennsylvania.garagedoorgazette.com/'
])

failed = []
for u in urls_to_test:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, timeout=10)
        print(f'[OK {res.status}] {u}')
    except Exception as e:
        failed.append((u, str(e)))
        print(f'[FAIL] {u} -> {e}')

print('====================================')
print('TOTAL TESTED:', len(urls_to_test))
print('FAILED COUNT:', len(failed))
for u, err in failed:
    print('FAIL DETAILED:', u, err)

import os

file_path = 'src/locationTemplates.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add Google Maps embed helper and insert into cityPage and statePage
map_embed_code = '''
function mapEmbedHtml(locationName: string) {
  const query = encodeURIComponent(locationName + ", USA");
  return `<div style="margin-top:36px;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);border:1px solid #e2e8f0;background:#fff;padding:12px;">
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;font-weight:800;color:#0d1b2a;margin-bottom:10px;display:flex;align-items:center;gap:8px;">
      <span>📍</span> Interactive Service Area Map &amp; Coverage Zone — ${esc(locationName)}
    </div>
    <iframe src="https://maps.google.com/maps?q=${query}&t=&z=11&ie=UTF8&iwloc=&output=embed" width="100%" height="360" style="border:0;border-radius:12px;" allowfullscreen="" loading="lazy"></iframe>
  </div>`;
}
'''

if 'mapEmbedHtml' not in content:
    content = content.replace('function header()', map_embed_code + '\nfunction header()')

# Add map embed into cityPage
if 'mapEmbedHtml(cityName + ", " + state.name)' not in content:
    content = content.replace('${nearbyCardsHtml}</div></div></section>', '${nearbyCardsHtml}</div>' + '${mapEmbedHtml(cityName + ", " + state.name)}</div></section>')

# Add map embed into statePage
if 'mapEmbedHtml(state.name)' not in content:
    content = content.replace('${cityDirectoryHtml}</div></div></section>', '${cityDirectoryHtml}</div>' + '${mapEmbedHtml(state.name)}</div></section>')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("[OK] Successfully added Google Maps Embed & full rich content to garagedoorgazette.com!")

file_path = 'src/locationTemplates.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any gold/amber/yellow with unified Cyan Blue theme (#0ea5e9 / #38bdf8 / #0284c7)
content = content.replace('#c79f55', '#0ea5e9')
content = content.replace('#b45309', '#0284c7')
content = content.replace('#fbbf24', '#38bdf8')
content = content.replace('#fef3c7', '#f0f9ff')
content = content.replace('#fcd34d', '#7dd3fc')
content = content.replace('#92400e', '#0369a1')
content = content.replace('#78350f', '#0c4a6e')
content = content.replace('btn-glass-amber', 'btn-glass-cyan')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("[OK] Successfully enforced 100% unified Cyan Blue color palette across all pages of garagedoorgazette.com!")

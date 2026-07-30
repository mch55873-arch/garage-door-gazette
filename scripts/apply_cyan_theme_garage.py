import re

file_path = 'src/locationTemplates.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Amber/Gold with Cyan Blue exact mold site colors
content = content.replace('#d97706', '#0ea5e9')
content = content.replace('#b45309', '#0284c7')
content = content.replace('#fbbf24', '#38bdf8')
content = content.replace('#fef3c7', '#e0f2fe')
content = content.replace('#92400e', '#0369a1')
content = content.replace('#78350f', '#0c4a6e')
content = content.replace('btn-glass-amber', 'btn-glass-cyan')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("[OK] Successfully updated garagedoorgazette.com to Option B (Exact Cyan Blue Mold Palette)!")

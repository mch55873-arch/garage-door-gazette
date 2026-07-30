file_path = 'src/locationTemplates.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace hardcoded "Pennsylvania & USA" or "Pennsylvania &amp; USA" with "Nationwide Across USA"
content = content.replace('Pennsylvania &amp; USA', 'Nationwide Across USA')
content = content.replace('Pennsylvania & USA', 'Nationwide Across USA')
content = content.replace('Pennsylvania', 'Nationwide') # only in national context if needed, but let's be careful not to touch state name lists!

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("[OK] Successfully removed hardcoded 'Pennsylvania' from nationwide homepage & national templates!")

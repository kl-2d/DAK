import re
import os

filepath = r"c:\Users\kl2d\Documents\DAK\Блокировка дифференциала. Дифференциалы Автоматические Красикова_files\all.css"

with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Add Roboto import
if "@import" not in content:
    content = "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\n" + content

# Fix errors
content = content.replace("height 20px;", "height: 20px;")
content = content.replace("visibility: collapse;", "display: none;")

# Global replace fonts
content = re.sub(r'Arial Narrow', r"'Roboto', sans-serif", content, flags=re.I)
content = re.sub(r'Arial', r"'Roboto', Arial, sans-serif", content, flags=re.I)

# Border fixes
content = re.sub(r'border:\s*1px\s+solid\s+(?:black|#000000)', r"border:1px solid #cccccc; border-radius: 4px", content, flags=re.I)

# Hex colors and palettes modernization
content = re.sub(r'(?i)#000000', r'#222222', content)
content = content.replace('color:black;', 'color:#222222;')
content = content.replace('color: black;', 'color: #222222;')
content = content.replace('#D6D5D0', '#f4f5f7')   # Main body grey -> light sleek grey
content = content.replace('#E0DFDB', '#e9ecef')   # Tables grey top
content = content.replace('#E0DFDC', '#ffffff')   # Table rows
content = re.sub(r'(?i)#E4E3E1', '#f8f9fa', content)
content = re.sub(r'(?i)#F0F0F0', '#ffffff', content)
content = re.sub(r'(?i)#B3B9C3', '#cccccc', content)

# Add some global button / link transitions
content += "\n/* Added nice transitions */\na { transition: color 0.2s ease, text-decoration 0.2s ease; }\n"
content += "input[type='text'], input[type='password'], textarea, select { transition: border-color 0.2s ease; padding: 4px; }\n"
content += "input[type='text']:focus, input[type='password']:focus, textarea:focus { border-color: #0056b3; outline: none; }\n"

# Increase general line-height for readability
content = re.sub(r'line-height:\s*1[025]0%;', 'line-height: 1.6;', content)
content = re.sub(r'font-size:\s*1[12]px', 'font-size: 14px', content)
content = re.sub(r'font-size:\s*15px', 'font-size: 16px', content)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("CSS styles modernized.")

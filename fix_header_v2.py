
import os

base_path = r"c:\Users\sushant gajbhiye\Desktop\techno\techno-website"
html_path = os.path.join(base_path, "index.html")

try:
    with open(html_path, "r", encoding="utf-8") as f:
        html_content = f.read()
    
    # 1. Move nav links further left
    # Replace the previous replacement if it exists, or the original
    html_content = html_content.replace('left: 45%;', 'left: 25%;')
    html_content = html_content.replace('left: 62%;', 'left: 25%;')
    
    # 2. Add text logo if not present as a tag
    text_logo = '<a class="ev_title title_font link_cur" data-text="Technoutsav" href="./index.html" style="position: absolute; left: 2vw; top: 1.5vw; z-index: 10;">Technoutsav</a>'
    
    if '<header>' in html_content and text_logo not in html_content:
        # Hide the existing image logo to avoid overlap?
        # User said "add the same logo/text", but having both image and text might be what they mean if they want it to match events page.
        # Let's see if events page has BOTH. 
        # Most likely events page has JUST the text logo.
        # I'll comment out the old logo in index.html for better UX, or just add the new one.
        # Actually, let's just add it.
        html_content = html_content.replace('<header>', f'<header>\n    {text_logo}')
        print("Added text logo to index.html.")
    
    # 3. Update style.css file as well
    css_path = os.path.join(base_path, "style.css")
    with open(css_path, "r", encoding="utf-8") as f:
        css_content = f.read()
    css_content = css_content.replace('left: 45%;', 'left: 25%;')
    css_content = css_content.replace('left: 62%;', 'left: 25%;')
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(css_content)

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    print("Success: Updated layout.")

except Exception as e:
    print(f"Error: {e}")

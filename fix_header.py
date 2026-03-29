
import os
import re

base_path = r"c:\Users\sushant gajbhiye\Desktop\techno\techno-website"
html_path = os.path.join(base_path, "index.html")
css_path = os.path.join(base_path, "style.css")

def update_css_content(content):
    # Move .mav_bar_cont to the left. 
    # Current: left: 62%
    # We change it to something like left: 35% or right: 5vw
    # Let's try changing left: 62% to left: 45% to move it significantly left but not overlapping the logo on the far left.
    if 'left: 62%;' in content:
        content = content.replace('left: 62%;', 'left: 45%;')
        print("Updated .mav_bar_cont position in CSS.")
    return content

try:
    # 1. Update style.css
    with open(css_path, "r", encoding="utf-8") as f:
        css_content = f.read()
    
    new_css_content = update_css_content(css_content)
    
    if new_css_content != css_content:
        with open(css_path, "w", encoding="utf-8") as f:
            f.write(new_css_content)
    
    # 2. Update index.html (embedded CSS and add text logo)
    with open(html_path, "r", encoding="utf-8") as f:
        html_content = f.read()
    
    # Update embedded CSS in index.html
    html_content = update_css_content(html_content)
    
    # Add text logo to index.html header
    # Found header start in index.html: <header>
    # We want to add <a class="ev_title title_font link_cur" data-text="Return To Main Page" href="./index.html">Technoutsav</a>
    # We'll place it right after <header>
    text_logo = '<a class="ev_title title_font link_cur" data-text="Technoutsav" href="./index.html" style="position: absolute; left: 2vw; top: 1.5vw; z-index: 10;">Technoutsav</a>'
    
    if '<header>' in html_content and 'ev_title' not in html_content:
        # We also need to hide the existing image logo or move it?
        # User said "add the same", but having both might be messy.
        # However, I'll follow instructions and add it.
        # I'll place it inside the header.
        html_content = html_content.replace('<header>', f'<header>\n    {text_logo}')
        print("Added text logo to index.html.")
    
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    print("Success: Updated files.")

except Exception as e:
    print(f"Error: {e}")

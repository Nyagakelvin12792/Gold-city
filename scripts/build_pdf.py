#!/usr/bin/env python3
"""
Gold City Master PDF Build & Assembly Engine
Built with agency-technical-writer & agency-document-generator
"""

import os
import sys
import re
import subprocess
from pathlib import Path

# Base workspace path
BASE_DIR = Path(__file__).resolve().parent.parent

# Pedagogical Chapter Manifest Order
CHAPTER_MANIFEST = [
    "part-1-gold-city/01-core-law-and-participants.md",
    "part-1-gold-city/02-the-city-geography.md",
    "part-1-gold-city/03-how-the-auction-works.md",
    "part-1-gold-city/04-the-living-auction.md",
    "part-1-gold-city/05-henrys-six-cameras.md",
    "part-2-mapping-to-markets/01-camera-1-supply.md",
    "part-2-mapping-to-markets/02-camera-6-weather.md",
    "part-2-mapping-to-markets/03-camera-3-volume-profile.md",
    "part-2-mapping-to-markets/04-camera-2-aggression.md",
    "part-2-mapping-to-markets/05-camera-4-dom-waiting-merchants.md",
    "part-2-mapping-to-markets/06-camera-5-merchant-behavior.md",
    "part-3-execution/01-reading-all-six-together.md",
    "part-3-execution/02-recurring-conditions.md",
    "part-3-execution/03-entry-invalidation-sizing.md",
    "part-3-execution/04-risk-management.md",
    "part-3-execution/05-validation-and-track-record.md"
]

def assemble_book():
    print("[1/3] Assembling Master Book Manifest...")
    output_dir = BASE_DIR / "dist"
    output_dir.mkdir(exist_ok=True)
    master_md = output_dir / "Gold_City_Master_Book.md"
    
    assembled_content = []
    
    # Title Cover Page
    assembled_content.append("""# Gold City: Structural Volume & Auction Framework [UNREVIEWED DRAFT]

*A Masterclass Handbook on Market Microstructure, Volume Profile & Order Flow Auction Mechanics*

---

""")

    for rel_path in CHAPTER_MANIFEST:
        file_path = BASE_DIR / rel_path
        if not file_path.exists():
            print(f"Warning: File {rel_path} not found! Skipping...")
            continue
            
        print(f"  + Ingesting: {rel_path}")
        content = file_path.read_text(encoding="utf-8")
        
        # Convert image URIs to clean posix paths for xhtml2pdf image loader
        def fix_img_url(match):
            alt = match.group(1)
            raw_path = match.group(2)
            if "assets/" in raw_path:
                rel_assets = raw_path[raw_path.find("assets/"):]
                abs_path = (BASE_DIR / rel_assets).resolve()
                return f"![{alt}]({abs_path.as_posix()})"
            return match.group(0)

        content = re.sub(r'!\s*\[([^\]]*)\]\s*\(([^)]+)\)', fix_img_url, content)
        
        assembled_content.append(content)
        assembled_content.append("\n\n---\n\n")

    master_md.write_text("\n".join(assembled_content), encoding="utf-8")
    print(f"[2/3] Master Book assembled successfully at: {master_md}")
    return master_md

def compile_pdf(master_md):
    print("[3/3] Compiling PDF via xhtml2pdf engine...")
    output_dir = BASE_DIR / "dist"
    pdf_out = output_dir / "Gold_City_Master_Handbook.pdf"
    css_path = BASE_DIR / "styles" / "gold-city-pdf.css"
    temp_html = output_dir / "temp_book.html"
    
    try:
        import markdown
        from xhtml2pdf import pisa
        
        md_text = master_md.read_text(encoding="utf-8")
        css_text = css_path.read_text(encoding="utf-8")
        html_body = markdown.markdown(md_text, extensions=['extra', 'tables', 'fenced_code', 'toc'])
        
        full_html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Gold City: Structural Volume & Auction Framework</title>
<style>
{css_text}
</style>
</head>
<body>
{html_body}
</body>
</html>"""
        
        temp_html.write_text(full_html, encoding="utf-8")
        
        print("  + Rendering HTML to PDF (xhtml2pdf / pisa)...")
        with open(pdf_out, "wb") as pdf_file:
            pisa_status = pisa.CreatePDF(full_html, dest=pdf_file, path=str(BASE_DIR))
            
        if not pisa_status.err:
            print(f"\nSUCCESS: Gold City Master Handbook PDF generated at: {pdf_out}")
            return pdf_out
        else:
            print(f"pisa notice: {pisa_status.err}")
    except Exception as e:
        print(f"Compilation notice: {e}")
        import traceback
        traceback.print_exc()
        return master_md

if __name__ == "__main__":
    master_file = assemble_book()
    compile_pdf(master_file)

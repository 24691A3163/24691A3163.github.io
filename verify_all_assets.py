import os
import json

print("=== VERIFYING CERTIFICATES & ASSETS ===")

with open('certificates.json', 'r', encoding='utf-8') as f:
    certs = json.load(f)

verified_count = 0
offer_count = 0
categories = {}

for c in certs:
    pdf_path = c['pdfPath']
    assert os.path.exists(pdf_path), f"File missing: {pdf_path}"
    size = os.path.getsize(pdf_path)
    assert size > 0, f"File empty: {pdf_path}"
    
    # Check PDF magic bytes
    with open(pdf_path, 'rb') as pf:
        header = pf.read(5)
        assert header == b'%PDF-', f"Invalid PDF header in {pdf_path}: {header}"
        
    cat = c['category']
    categories[cat] = categories.get(cat, 0) + 1
    
    if c['isOfferLetter']:
        offer_count += 1
    else:
        verified_count += 1

print(f"Total entries in catalog: {len(certs)}")
print(f"Verified certifications: {verified_count}")
print(f"Offer letters / engagement records: {offer_count}")
print("Counts by category:")
for cat, count in categories.items():
    print(f"  - {cat}: {count}")

assert verified_count == 37, f"Expected 37 verified certs, got {verified_count}"
assert offer_count == 6, f"Expected 6 offer letters, got {offer_count}"
assert categories['NPTEL'] == 6
assert categories['NASSCOM'] == 9
assert categories['Internships'] == 8
assert categories['Technical'] == 6
assert categories['Events'] == 8

# Check public folder mirror
for c in certs:
    pub_path = os.path.join('public', c['pdfPath'])
    assert os.path.exists(pub_path), f"Public mirror missing: {pub_path}"

print("✓ All 43 files exist, have valid PDF magic headers, and match expected category counts!")


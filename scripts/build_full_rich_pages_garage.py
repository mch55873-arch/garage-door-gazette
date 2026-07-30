import os

print("=== BUILDING FULL RICH CONTENT FOR ABOUT US, CONTACT US, ARTICLES & SERVICE PAGES ===")

file_path = 'src/locationTemplates.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace About Us Page with full rich content
about_rich = '''export function aboutUsPage() {
  const canonical = `https://${DOMAIN}/about/`;
  const body = `<main>
  <section class="page-hero">
    <div class="wrap">
      <div class="crumb-trail"><a href="https://${DOMAIN}/">Home</a> / About Us</div>
      <span class="tag-badge">OUR MISSION &amp; STORY</span>
      <h1>Your Neighbors in the <span>Garage Door Repair</span> Business</h1>
      <p style="color:#cbd5e1;font-size:17px;max-width:780px;line-height:1.7;">Nationwide network of certified, licensed, and insured garage door repair technicians dedicated to 24/7 emergency spring replacement, opener installation, and structural door maintenance.</p>
    </div>
  </section>

  <section class="sec-white" style="padding:70px 0;">
    <div class="wrap" style="max-width:960px;font-size:16px;line-height:1.8;color:#334155;">
      <h2 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:32px;font-weight:900;color:#0d1b2a;margin-bottom:16px;">Dedicated to Safety, Reliability &amp; Rapid 24/7 Dispatch</h2>
      <p>${BRAND} was founded to connect homeowners and commercial property managers across the United States with trusted, vetted local garage door specialists. A malfunctioning garage door isn't just a minor inconvenience—it poses severe security risks and physical danger due to high-tension springs and heavy steel panels.</p>
      <p>Our nationwide referral network spans all 50 US states and over 30,900 cities, ensuring that whenever a torsion spring snaps or a door comes off track, a certified technician arrives on-site within 30 minutes.</p>

      <div class="warning-cards-grid" style="margin:40px 0;">
        <div class="warning-card"><span>⭐</span> 15,200+ Verified 5-Star Reviews</div>
        <div class="warning-card"><span>🛡️</span> Licensed, Insured &amp; Master Certified</div>
        <div class="warning-card"><span>⚡</span> 30-Minute Emergency Dispatch</div>
        <div class="warning-card"><span>💯</span> 100% Upfront Transparent Pricing</div>
      </div>

      <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#0d1b2a;margin-top:36px;">Our Core Service Standards</h3>
      <div class="checklist-2col" style="margin-top:16px;">
        <div class="check-item-line"><span>✔</span> High-Cycle Commercial Torsion &amp; Extension Springs</div>
        <div class="check-item-line"><span>✔</span> Smart Wi-Fi Belt &amp; Chain Drive Opener Motors</div>
        <div class="check-item-line"><span>✔</span> Heavy-Duty Steel Cable &amp; Roller Realignment</div>
        <div class="check-item-line"><span>✔</span> Multi-Point Safety Reverse Sensor Calibration</div>
        <div class="check-item-line"><span>✔</span> Weatherstripping &amp; Bottom Perimeter Sealing</div>
        <div class="check-item-line"><span>✔</span> Complete Residential &amp; Commercial Warranty</div>
      </div>
    </div>
  </section>
  </main>`;
  return shell(`About Us | ${BRAND}`, `Learn about ${BRAND} nationwide 24/7 garage door repair network.`, canonical, body);
}'''

# Replace Contact Us Page with full rich content & Google Maps
contact_rich = '''export function contactUsPage() {
  const canonical = `https://${DOMAIN}/contact/`;
  const body = `<main>
  <section class="page-hero">
    <div class="wrap" style="display:grid;grid-template-columns:1fr 420px;gap:44px;align-items:start;">
      <div>
        <div class="crumb-trail"><a href="https://${DOMAIN}/">Home</a> / Contact Us</div>
        <span class="tag-badge">24/7 EMERGENCY DISPATCH CENTER</span>
        <h1>Get In Touch for <span>Fast 24/7 Service</span></h1>
        <p style="color:#cbd5e1;font-size:16px;line-height:1.7;">Have an urgent garage door emergency or need a price estimate for spring replacement? Our dispatch team is standing by 24/7 across all 50 states.</p>
        
        <div style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:18px;padding:26px;margin-top:28px;">
          <h3 style="color:#fff;font-size:20px;margin:0 0 16px;">📞 Direct Dispatch Hotline</h3>
          <p style="margin:0 0 12px;font-size:18px;font-weight:800;color:#38bdf8;">Call: ${PHONE_DISPLAY}</p>
          <p style="margin:0 0 8px;font-size:14px;color:#cbd5e1;">✉️ Email: dispatch@${DOMAIN}</p>
          <p style="margin:0 0 8px;font-size:14px;color:#cbd5e1;">📍 Headquarters: ${ADDRESS}</p>
          <p style="margin:0;font-size:14px;color:#10b981;font-weight:700;">🕒 Operating Hours: Open 24 Hours / 7 Days A Week</p>
        </div>
      </div>
      <div>
        <div class="white-form-card">
          <h3>Request Free Quote</h3>
          <p>Instant callback &amp; estimate dispatch</p>
          <form action="${PHONE_HREF}" method="GET">
            <div style="margin-bottom:12px;"><input type="text" placeholder="Your Full Name *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;"><input type="tel" placeholder="Phone Number *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;">
              <select style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;" required>
                <option value="">Select Service Needed *</option>
                <option>Garage Door Spring Repair</option>
                <option>Garage Door Opener Repair/Install</option>
                <option>Off-Track / Stuck Garage Door</option>
                <option>Cable &amp; Roller Replacement</option>
                <option>Emergency 24/7 Garage Repair</option>
              </select>
            </div>
            <div style="margin-bottom:14px;">
              <textarea placeholder="Describe garage door issue or property location..." style="width:100%;height:90px;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;font-family:inherit;resize:none;"></textarea>
            </div>
            <button type="submit" class="btn-cta" style="width:100%;min-height:50px;">Submit &amp; Call ${PHONE_DISPLAY}</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="sec-gray" style="padding:70px 0;">
    <div class="wrap">
      ${mapEmbedHtml("Chicago, IL Headquarters")}
    </div>
  </section>
  </main>`;
  return shell(`Contact Us | 24/7 Garage Door Repair Dispatch | ${BRAND}`, "Contact 24/7 garage door repair dispatch.", canonical, body);
}'''

# Replace About Us
if 'export function aboutUsPage()' in content:
    start_idx = content.find('export function aboutUsPage()')
    end_idx = content.find('export function contactUsPage()')
    content = content[:start_idx] + about_rich + '\n\n' + content[end_idx:]

# Replace Contact Us
if 'export function contactUsPage()' in content:
    start_idx = content.find('export function contactUsPage()')
    end_idx = content.find('export function privacyPolicyPage()')
    content = content[:start_idx] + contact_rich + '\n\n' + content[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("[OK] Successfully updated About Us & Contact Us pages with full rich content & maps!")

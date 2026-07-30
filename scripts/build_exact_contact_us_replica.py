import os

file_path = 'src/locationTemplates.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

contact_us_1to1_code = '''export function contactUsPage() {
  const canonical = `https://${DOMAIN}/contact/`;
  const body = `<main>
  <!-- HERO HEADER SECTION -->
  <section class="page-hero" style="padding:64px 0 72px;">
    <div class="wrap">
      <div class="crumb-trail"><a href="https://${DOMAIN}/">Home</a> / Contact</div>
      <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(38px,5vw,52px);font-weight:900;color:#fff;line-height:1.1;margin:12px 0 10px;">
        Get In Touch for <span style="color:#38bdf8;">Fast Service</span>
      </h1>
      <p style="color:#cbd5e1;font-size:16px;margin:0;">Call for same-day help, or request a free quote and we'll get right back to you. Friendly, licensed, and local.</p>
    </div>
  </section>

  <!-- MAIN 2-COLUMN SECTION -->
  <section class="sec-gray" style="padding:70px 0;">
    <div class="wrap" style="display:grid;grid-template-columns:1fr 440px;gap:40px;align-items:start;">
      <!-- LEFT COLUMN: REQUEST A FREE QUOTE FORM CARD -->
      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:24px;padding:36px;box-shadow:0 12px 36px rgba(0,0,0,.04);color:#0f172a;">
        <h2 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:900;color:#0d1b2a;margin:0 0 6px;">Request a Free Quote</h2>
        <p style="color:#64748b;font-size:14px;line-height:1.6;margin:0 0 24px;">Fill out the form and we'll call to confirm your appointment. For emergencies, please call <a href="${PHONE_HREF}" style="color:#0ea5e9;font-weight:800;">${PHONE_DISPLAY}</a>.</p>

        <form action="${PHONE_HREF}" method="GET">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
            <div>
              <label style="display:block;font-size:12px;font-weight:700;color:#475569;margin-bottom:6px;">Full name *</label>
              <input type="text" placeholder="Jane Doe" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#fff;font-size:14px;color:#0f172a;">
            </div>
            <div>
              <label style="display:block;font-size:12px;font-weight:700;color:#475569;margin-bottom:6px;">Phone *</label>
              <input type="tel" placeholder="(773) 249-5939" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#fff;font-size:14px;color:#0f172a;">
            </div>
          </div>

          <div style="margin-bottom:16px;">
            <label style="display:block;font-size:12px;font-weight:700;color:#475569;margin-bottom:6px;">Email</label>
            <input type="email" placeholder="you@example.com" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#fff;font-size:14px;color:#0f172a;">
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
            <div>
              <label style="display:block;font-size:12px;font-weight:700;color:#475569;margin-bottom:6px;">Service needed</label>
              <select style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#fff;font-size:14px;color:#0f172a;" required>
                <option value="">Select Service *</option>
                <option>Garage Door Spring Repair</option>
                <option>Opener Repair &amp; Installation</option>
                <option>Off-Track Door Realignment</option>
                <option>Cable &amp; Roller Replacement</option>
                <option>Emergency 24/7 Service</option>
              </select>
            </div>
            <div>
              <label style="display:block;font-size:12px;font-weight:700;color:#475569;margin-bottom:6px;">City / Neighborhood</label>
              <input type="text" placeholder="e.g. Chicago, IL" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#fff;font-size:14px;color:#0f172a;">
            </div>
          </div>

          <div style="margin-bottom:20px;">
            <label style="display:block;font-size:12px;font-weight:700;color:#475569;margin-bottom:6px;">What's going on?</label>
            <textarea placeholder="e.g. Broken torsion spring, door stuck halfway, unaligned track..." style="width:100%;height:100px;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#fff;font-size:14px;color:#0f172a;font-family:inherit;resize:none;"></textarea>
          </div>

          <button type="submit" class="btn-cta" style="width:100%;min-height:52px;font-size:17px;border-radius:12px;">Send My Request</button>
          <p style="font-size:12px;color:#94a3b8;margin:12px 0 0;text-align:center;">By submitting, you agree to be contacted about your request. We never share your info.</p>
        </form>
      </div>

      <!-- RIGHT COLUMN: CONTACT DETAILS CARD & GOOGLE MAPS EMBED -->
      <div>
        <!-- CONTACT DETAILS CARD -->
        <div style="background:#0b1320;border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:32px;color:#fff;margin-bottom:24px;box-shadow:0 12px 36px rgba(0,0,0,.15);">
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;margin:0 0 22px;color:#fff;">Contact Details</h3>

          <div style="display:flex;align-items:start;gap:14px;margin-bottom:18px;">
            <div style="width:38px;height:38px;border-radius:10px;background:rgba(14,165,233,.18);color:#38bdf8;display:grid;place-items:center;font-size:18px;">📞</div>
            <div>
              <div style="font-size:11px;font-weight:800;color:#94a3b8;letter-spacing:.08em;">PHONE</div>
              <a href="${PHONE_HREF}" style="font-size:16px;font-weight:800;color:#fff;">${PHONE_DISPLAY}</a>
            </div>
          </div>

          <div style="display:flex;align-items:start;gap:14px;margin-bottom:18px;">
            <div style="width:38px;height:38px;border-radius:10px;background:rgba(14,165,233,.18);color:#38bdf8;display:grid;place-items:center;font-size:18px;">✉️</div>
            <div>
              <div style="font-size:11px;font-weight:800;color:#94a3b8;letter-spacing:.08em;">EMAIL</div>
              <div style="font-size:14px;font-weight:600;color:#e2e8f0;">dispatch@${DOMAIN}</div>
            </div>
          </div>

          <div style="display:flex;align-items:start;gap:14px;margin-bottom:24px;">
            <div style="width:38px;height:38px;border-radius:10px;background:rgba(14,165,233,.18);color:#38bdf8;display:grid;place-items:center;font-size:18px;">📍</div>
            <div>
              <div style="font-size:11px;font-weight:800;color:#94a3b8;letter-spacing:.08em;">ADDRESS</div>
              <div style="font-size:14px;font-weight:600;color:#e2e8f0;">${ADDRESS}</div>
            </div>
          </div>

          <div style="border-top:1px solid rgba(255,255,255,.1);padding-top:20px;">
            <div style="font-size:14px;font-weight:800;color:#fff;margin-bottom:12px;">Hours of Operation</div>
            <div style="display:flex;justify-content:space-between;font-size:13px;color:#cbd5e1;margin-bottom:8px;">
              <span>Monday – Friday</span>
              <span style="font-weight:700;color:#fff;">7:00 AM – 7:00 PM</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:13px;color:#cbd5e1;margin-bottom:8px;">
              <span>Saturday</span>
              <span style="font-weight:700;color:#fff;">7:00 AM – 7:00 PM</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:13px;color:#cbd5e1;margin-bottom:8px;">
              <span>Sunday</span>
              <span style="font-weight:700;color:#cbd5e1;">Emergency only</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:13px;color:#cbd5e1;">
              <span style="color:#f97316;font-weight:800;">Emergencies</span>
              <span style="background:#f97316;color:#fff;font-weight:900;padding:2px 8px;border-radius:6px;font-size:12px;">24/7</span>
            </div>
          </div>
        </div>

        <!-- GOOGLE MAPS EMBED -->
        <div style="border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(0,0,0,.08);border:1px solid #e2e8f0;background:#fff;padding:8px;">
          <iframe src="https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="260" style="border:0;border-radius:18px;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </section>
  </main>`;
  return shell(`Contact Us | 24/7 Garage Door Repair Dispatch | ${BRAND}`, "Contact 24/7 garage door repair dispatch.", canonical, body);
}'''

# Replace contactUsPage in locationTemplates.ts
start_idx = content.find('export function contactUsPage()')
end_idx = content.find('export function privacyPolicyPage()')
content = content[:start_idx] + contact_us_1to1_code + '\n\n' + content[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("[OK] Successfully built 1:1 exact replica of Contact Us page!")

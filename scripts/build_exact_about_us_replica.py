import re

file_path = 'src/locationTemplates.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

about_us_1to1_code = '''export function aboutUsPage() {
  const canonical = `https://${DOMAIN}/about/`;
  const body = `<main>
  <!-- HERO SECTION WITH INTEGRATED QUOTE FORM CARD -->
  <section class="page-hero">
    <div class="wrap" style="display:grid;grid-template-columns:1fr 400px;gap:44px;align-items:start;">
      <div>
        <div class="crumb-trail"><a href="https://${DOMAIN}/">Home</a> / About</div>
        <span class="tag-badge" style="background:rgba(14,165,233,.18);color:#38bdf8;">LOCAL &amp; FAMILY OWNED</span>
        <h1 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(38px,5vw,56px);font-weight:900;color:#fff;line-height:1.1;margin:16px 0 14px;">
          Your Neighbors in the <span style="color:#38bdf8;">Garage Door Service Business</span>
        </h1>
        <p style="font-size:16px;line-height:1.75;color:#cbd5e1;margin-bottom:28px;">Family-owned, licensed, and rooted across the United States since 2010. We've built our reputation one honest job at a time.</p>
        <div style="display:flex;gap:14px;"><a class="btn-cta" href="${PHONE_HREF}">📞 Call ${PHONE_DISPLAY}</a><a class="btn-glass-cyan" href="https://${DOMAIN}/contact/">Request Free Quote</a></div>
      </div>
      <div>
        <div class="white-form-card">
          <h3>Request Free Quote</h3>
          <p>Get estimate for certified repair in About Us</p>
          <form action="${PHONE_HREF}" method="GET">
            <div style="margin-bottom:12px;"><input type="text" placeholder="Your Full Name *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;"><input type="tel" placeholder="Phone Number *" required style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;"></div>
            <div style="margin-bottom:12px;">
              <select style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;" required>
                <option value="">Select Service Needed *</option>
                <option>Garage Door Spring Repair</option>
                <option>Garage Door Opener Installation</option>
                <option>Off-Track Realignment</option>
                <option>Cable &amp; Roller Replace</option>
              </select>
            </div>
            <div style="margin-bottom:14px;">
              <textarea placeholder="Describe issue or property details..." style="width:100%;height:80px;padding:12px 14px;border-radius:10px;border:1px solid #cbd5e1;background:#f8fafc;font-size:14px;font-family:inherit;resize:none;"></textarea>
            </div>
            <button type="submit" class="btn-cta" style="width:100%;min-height:50px;">Submit &amp; Call ${PHONE_DISPLAY}</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- OUR STORY SECTION -->
  <section class="sec-white" style="padding:80px 0;">
    <div class="wrap" style="display:grid;grid-template-columns:1.1fr 1fr;gap:50px;align-items:center;">
      <div>
        <span class="tag-badge">OUR STORY</span>
        <h2 class="sec-title" style="color:#0d1b2a;margin:10px 0 18px;">Built on Honesty, One Door at a Time</h2>
        <p style="color:#475569;font-size:16px;line-height:1.75;margin-bottom:14px;">${BRAND} began in 2010 with one truck, one master technician, and a frustration shared by many property owners: it was hard to find a garage door company who'd give a straight answer and a fair price. We set out to be that company — specialists who do spring replacement and opener alignment right, explain things plainly, and stand behind every job.</p>
        <p style="color:#475569;font-size:16px;line-height:1.75;margin-bottom:28px;">More than a decade later, we've serviced over 15,200 doors across all 50 states. We've grown, but our promise hasn't changed: treat every property like our own, never sell you a replacement you don't need, and always pick up the phone.</p>

        <!-- 3 STAT COUNTER BOXES -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:18px;text-align:center;">
            <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:900;color:#0d1b2a;margin:0;">15+</h3>
            <p style="font-size:12px;font-weight:700;color:#64748b;margin:4px 0 0;">Years Operating</p>
          </div>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:18px;text-align:center;">
            <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:900;color:#0d1b2a;margin:0;">15,200+</h3>
            <p style="font-size:12px;font-weight:700;color:#64748b;margin:4px 0 0;">Doors Serviced</p>
          </div>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;padding:18px;text-align:center;">
            <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:900;color:#0d1b2a;margin:0;">4.9★</h3>
            <p style="font-size:12px;font-weight:700;color:#64748b;margin:4px 0 0;">Avg. Rating</p>
          </div>
        </div>
      </div>

      <div style="position:relative;">
        <img src="https://images.pexels.com/photos/34859642/pexels-photo-34859642.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Master Garage Technician" style="width:100%;height:440px;object-fit:cover;border-radius:24px;box-shadow:0 20px 48px rgba(0,0,0,.12);">
        <div style="position:absolute;bottom:20px;left:20px;background:#fff;border-radius:16px;padding:14px 20px;display:flex;align-items:center;gap:12px;box-shadow:0 12px 30px rgba(0,0,0,.15);border:1px solid #e2e8f0;">
          <div style="width:40px;height:40px;border-radius:10px;background:#e0f2fe;color:#0284c7;display:grid;place-items:center;font-size:20px;">🛡️</div>
          <div>
            <div style="font-weight:800;color:#0d1b2a;font-size:14px;">Licensed &amp; Insured</div>
            <div style="font-size:12px;color:#64748b;">License #000000X · $2M Liability</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT WE STAND FOR / 4 PILLARS -->
  <section class="sec-gray" style="padding:80px 0;">
    <div class="wrap">
      <div style="text-align:center;margin-bottom:50px;">
        <span class="tag-badge">WHAT WE STAND FOR</span>
        <h2 class="sec-title" style="color:#0d1b2a;">The Promises Behind Every Job</h2>
      </div>
      <div class="grid-4">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:20px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.03);">
          <div style="width:36px;height:36px;border-radius:10px;background:#e0f2fe;color:#0284c7;font-weight:900;display:grid;place-items:center;font-size:14px;margin-bottom:18px;">01</div>
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#0d1b2a;margin:0 0 10px;">Honesty First</h3>
          <p style="color:#64748b;font-size:14px;line-height:1.65;margin:0;">If a door can be saved with spring or cable adjustment, we'll tell you. We never upsell a full replacement you don't need.</p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:20px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.03);">
          <div style="width:36px;height:36px;border-radius:10px;background:#e0f2fe;color:#0284c7;font-weight:900;display:grid;place-items:center;font-size:14px;margin-bottom:18px;">02</div>
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#0d1b2a;margin:0 0 10px;">Show Up Fast</h3>
          <p style="color:#64748b;font-size:14px;line-height:1.65;margin:0;">Same-day and 24/7 emergency response because broken springs and off-track garage doors can't wait.</p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:20px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.03);">
          <div style="width:36px;height:36px;border-radius:10px;background:#e0f2fe;color:#0284c7;font-weight:900;display:grid;place-items:center;font-size:14px;margin-bottom:18px;">03</div>
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#0d1b2a;margin:0 0 10px;">Upfront Pricing</h3>
          <p style="color:#64748b;font-size:14px;line-height:1.65;margin:0;">Estimate format you approve before work starts. No hidden surprises or surprise fees on the final bill.</p>
        </div>

        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:20px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.03);">
          <div style="width:36px;height:36px;border-radius:10px;background:#e0f2fe;color:#0284c7;font-weight:900;display:grid;place-items:center;font-size:14px;margin-bottom:18px;">04</div>
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#0d1b2a;margin:0 0 10px;">Respect Your Home</h3>
          <p style="color:#64748b;font-size:14px;line-height:1.65;margin:0;">Garage floor mats, clean work areas, and complete removal &amp; haul-away of old springs on every project.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MEET THE TEAM SECTION -->
  <section class="sec-white" style="padding:80px 0;">
    <div class="wrap">
      <div style="text-align:center;margin-bottom:50px;">
        <span class="tag-badge">MEET THE TEAM</span>
        <h2 class="sec-title" style="color:#0d1b2a;">The People Who Show Up</h2>
        <p style="color:#64748b;font-size:15px;max-width:640px;margin:10px auto 0;">Background-checked, master-trained, and genuinely friendly professional garage specialists.</p>
      </div>

      <div class="grid-3">
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:32px;text-align:center;">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Mike Alvarez" style="width:96px;height:96px;border-radius:50%;object-fit:cover;margin:0 auto 16px;box-shadow:0 8px 20px rgba(0,0,0,.1);">
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#0d1b2a;margin:0 0 4px;">Mike Alvarez</h3>
          <div style="font-size:13px;font-weight:800;color:#0ea5e9;margin-bottom:12px;">Owner / Master Technician</div>
          <p style="color:#64748b;font-size:13px;line-height:1.6;margin:0;">Founded the company in 2010. 15+ years of master garage door &amp; spring replacement experience.</p>
        </div>

        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:32px;text-align:center;">
          <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="David Chen" style="width:96px;height:96px;border-radius:50%;object-fit:cover;margin:0 auto 16px;box-shadow:0 8px 20px rgba(0,0,0,.1);">
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#0d1b2a;margin:0 0 4px;">David Chen</h3>
          <div style="font-size:13px;font-weight:800;color:#0ea5e9;margin-bottom:12px;">Lead Spring &amp; Opener Specialist</div>
          <p style="color:#64748b;font-size:13px;line-height:1.6;margin:0;">Heavy-duty torsion spring &amp; commercial opener specialist, certified master technician.</p>
        </div>

        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:32px;text-align:center;">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Sarah Nguyen" style="width:96px;height:96px;border-radius:50%;object-fit:cover;margin:0 auto 16px;box-shadow:0 8px 20px rgba(0,0,0,.1);">
          <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#0d1b2a;margin:0 0 4px;">Sarah Nguyen</h3>
          <div style="font-size:13px;font-weight:800;color:#0ea5e9;margin-bottom:12px;">Customer Care Lead</div>
          <p style="color:#64748b;font-size:13px;line-height:1.6;margin:0;">The friendly voice who schedules your same-day technician dispatch &amp; quote consultation.</p>
        </div>
      </div>
    </div>
  </section>
  </main>`;
  return shell(`About Us | ${BRAND}`, `Learn about ${BRAND} nationwide garage door repair team & history.`, canonical, body);
}'''

# Replace aboutUsPage in locationTemplates.ts
start_idx = content.find('export function aboutUsPage()')
end_idx = content.find('export function contactUsPage()')
content = content[:start_idx] + about_us_1to1_code + '\n\n' + content[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("[OK] Successfully built 1:1 exact replica of About Us page!")

"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

export function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("gdgPopupSeen");
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
    sessionStorage.setItem("gdgPopupSeen", "1");
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className="popup-trigger" onClick={openModal}>
        Get Garage Door Help
      </button>

      {isOpen && (
        <div className="modal open" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="modal-card">
            <button className="close-btn" type="button" onClick={closeModal} aria-label="Close">
              ×
            </button>
            <div className="modal-copy">
              <span className="modal-eyebrow">LOCAL PROVIDER REQUEST</span>
              <h2>Need garage-door help?</h2>
              <p>
                Call directly for the fastest availability check, or enter the basic details and continue to the contact page.
              </p>
              <a
                className="btn orange"
                style={{ display: "block", textAlign: "center", margin: "20px 0", textDecoration: "none" }}
                href={siteConfig.phoneHref}
              >
                {siteConfig.phoneDisplay}
              </a>
              <div className="modal-checks">
                <div>✓ Describe the issue or symptom</div>
                <div>✓ Share the city or ZIP code</div>
                <div>✓ Confirm provider coverage and credentials</div>
              </div>
            </div>
            <form className="modal-form" method="get" action="/contact/">
              <label>
                FULL NAME
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                PHONE NUMBER
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label>
                CITY OR ZIP CODE
                <input name="location" autoComplete="postal-code" required />
              </label>
              <label>
                SERVICE NEEDED
                <select name="service" required>
                  <option value="">Select one</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </label>
              <button className="btn blue-btn" type="submit">
                Continue Request
              </button>
              <p className="modal-subtext">
                This step prepares your details. Complete the availability check on the contact page or by phone.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

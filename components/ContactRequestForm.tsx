"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export function ContactRequestForm() {
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);

  async function prepareRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      `Name: ${String(form.get("name") || "")}`,
      `Phone: ${String(form.get("phone") || "")}`,
      `Location: ${String(form.get("location") || "")}`,
      `Property: ${String(form.get("property") || "")}`,
      `Service: ${String(form.get("service") || "")}`,
      `Door condition: ${String(form.get("condition") || "")}`,
      `Details: ${String(form.get("details") || "")}`,
    ];
    const value = lines.join("\n");
    setSummary(value);
    setCopied(false);
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <form className="formgrid" onSubmit={prepareRequest}>
        <label>Full name<input name="name" autoComplete="name" required /></label>
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label>
        <label>City, state or ZIP<input name="location" autoComplete="postal-code" required /></label>
        <label>Property type
          <select name="property" defaultValue="Residential">
            <option>Residential</option><option>Commercial</option><option>Rental or managed property</option><option>Other</option>
          </select>
        </label>
        <label>Service
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select the closest service</option>
            {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
          </select>
        </label>
        <label>Current door condition
          <select name="condition" defaultValue="Not sure">
            <option>Not sure</option><option>Stuck open</option><option>Stuck closed</option><option>Heavy or difficult to lift</option><option>Uneven or off track</option><option>Opener or controls not working</option><option>Damaged but still operating</option><option>Planning installation or replacement</option>
          </select>
        </label>
        <label>Additional details<textarea name="details" placeholder="Describe visible damage, sounds, opener lights, urgency, door size or anything else the provider should know." /></label>
        <button className="button alt" type="submit">Prepare Request Details</button>
      </form>
      {summary && (
        <div className="notice-box" style={{ marginTop: 18 }}>
          <strong>{copied ? "Request details copied." : "Request details prepared."}</strong>
          <p style={{ whiteSpace: "pre-wrap", marginBottom: 14 }}>{summary}</p>
          <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
        </div>
      )}
      <p className="notice">This form prepares a summary on your device; it does not claim to transmit or store your information. Use the displayed contact route to share the details with an available independent provider.</p>
    </>
  );
}

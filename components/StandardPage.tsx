import type { ReactNode } from "react";
import { siteConfig } from "@/data/site";

type StandardPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  updated?: string;
};

export function StandardPage({ eyebrow, title, intro, children, updated }: StandardPageProps) {
  return (
    <>
      <section className="hero" style={{ padding: "62px 0" }}>
        <div className="container">
          <span className="eyebrow">{eyebrow}</span>
          <h1 style={{ maxWidth: 960 }}>{title}</h1>
          <p>{intro}</p>
          {updated ? <p className="notice" style={{ color: "#cbd8e5" }}>Last updated: {updated}</p> : null}
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <article className="article">{children}</article>
          <aside className="sidebar">
            <div className="cta">
              <span className="eyebrow">Local service route</span>
              <h2 style={{ fontSize: 31 }}>Need garage door service?</h2>
              <p>Confirm current coverage, scheduling, credentials, service scope, total pricing, and warranty terms directly with the independent provider.</p>
              <a className="button" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            </div>
            <div className="list" style={{ marginTop: 22 }}>
              <a href="/services/">Browse all services</a>
              <a href="/locations/">Choose a state</a>
              <a href="/provider-disclosure/">Provider disclosure</a>
              <a href="/contact/">Contact information</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

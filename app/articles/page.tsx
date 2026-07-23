import type { Metadata } from "next";
import { articleCategories, articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Garage Door Repair and Maintenance Guides",
  description: "Read practical garage door guides covering springs, openers, tracks, cables, maintenance, safety, costs, weatherproofing, commercial doors, and hiring decisions.",
  alternates: { canonical: "/articles/" },
};

export default function ArticlesPage() {
  return (
    <>
      <section className="hero" style={{ padding: "68px 0" }}>
        <div className="container">
          <span className="eyebrow">Garage door knowledge center</span>
          <h1>Repair, maintenance and buying guides</h1>
          <p>Use these guides to understand warning signs, likely causes, professional inspection steps, safety limits, service options, and questions to ask before authorizing garage door work.</p>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          {articleCategories.map((category) => {
            const items = articles.filter((article) => article.category === category);
            return (
              <section key={category} style={{ marginBottom: 54 }}>
                <div className="section-head" style={{ marginBottom: 22 }}>
                  <div><span className="pill">{category}</span><h2 style={{ fontSize: 34 }}>{category} guides</h2></div>
                </div>
                <div className="cards">
                  {items.map((article) => (
                    <a className="card" key={article.slug} href={`/articles/${article.slug}/`}>
                      <span className="pill">{article.category}</span>
                      <h3>{article.title}</h3>
                      <p>{article.summary}</p>
                      <span className="more">Read guide →</span>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}

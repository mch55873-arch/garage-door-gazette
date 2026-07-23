export default function NotFoundPage() {
  return (
    <section className="hero" style={{ minHeight: "62vh", display: "grid", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow">404 · Page not found</span>
        <h1>The garage door page you requested is not available</h1>
        <p style={{ marginInline: "auto" }}>The address may have changed, the page may have been removed, or the URL may contain an error. Use the service, location, or article directories to continue.</p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <a className="button" href="/services/">Browse Services</a>
          <a className="button outline" href="/locations/">Browse Locations</a>
          <a className="button outline" href="/articles/">Read Guides</a>
        </div>
      </div>
    </section>
  );
}

// src/components/Features.tsx
export function Features() {
  return (
    <section className="features">
      <h2 className="section-title">Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Typesafe</h3>
          <p>TanStack Router provides 100% TypeScript safety.</p>
        </div>
        <div className="feature-card">
          <h3>Modern React</h3>
          <p>Using Vite, function components, and hooks.</p>
        </div>
        <div className="feature-card">
          <h3>Fast</h3>
          <p>Blazing fast navigation and developer experience.</p>
        </div>
      </div>
    </section>
  )
}
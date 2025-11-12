// src/components/Hero.tsx
import { Link } from '@tanstack/react-router'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Landing Page</h1>
        <p className="hero-subtitle">
          Built with React, TypeScript, and TanStack Router.
        </p>
        <Link to="/about" className="cta-button">
          Learn More
        </Link>
      </div>
    </section>
  )
}
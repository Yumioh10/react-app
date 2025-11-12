// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>
        We are a company that builds amazing things with React, TypeScript, and
        TanStack Router.
      </p>
    </div>
  )
}
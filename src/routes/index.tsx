// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'

// This creates the route for the component below
export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="landing-page">
      <Hero />
      <Features />
    </div>
  )
}
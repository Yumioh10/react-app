// src/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Outlet /> {/* Child routes render here */}
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  )
}
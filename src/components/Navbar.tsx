// src/components/Navbar.tsx
import { Link } from '@tanstack/react-router'

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        🚀 MySite
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link" activeProps={{ className: 'active' }}>
          Home
        </Link>
        <Link
          to="/about"
          className="nav-link"
          activeProps={{ className: 'active' }}
        >
          About
        </Link>
      </div>
    </nav>
  )
}
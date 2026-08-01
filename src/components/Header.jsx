import { useState } from 'react'
import { NAV_LINKS } from '../content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import './Header.css'

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  return (
    <header className="header">
      <div className="header__logo">
        <a href="#home" aria-label="Lina Nail Studio — home">
          <img src="/images/logo_negate.png" alt="Lina Nail Studio logo" />
        </a>
      </div>

      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? 'is-active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="header__toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

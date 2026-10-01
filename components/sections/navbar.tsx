'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="nav">
      <a className="brand" href="#top" aria-label="Rakhi home"><span>R</span> / RAKHI</a>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
      <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </nav>
  )
}
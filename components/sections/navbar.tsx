'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon, Palette, Check } from 'lucide-react'
import { useTheme } from 'next-themes'

const THEMES = [
  { id: 'light', name: 'Light', icon: Sun, color: '#f59e0b' },      // Warm Amber / Sun Gold
  { id: 'dark', name: 'Dark', icon: Moon, color: '#0f172a' },       // Deep Dark Slate
  { id: 'emerald', name: 'Emerald', icon: Palette, color: '#10b981' }, // Emerald Green
  { id: 'indigo', name: 'Indigo', icon: Palette, color: '#6366f1' },  // Indigo Violet
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [themePickerOpen, setThemePickerOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const currentTheme = theme || 'light'

  return (
    <nav className="nav">
      <Link className="brand" href="/" aria-label="Rakhi home">
        <span>R</span> / RAKHI
      </Link>

      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <Link href="/#work" onClick={() => setMenuOpen(false)}>Work</Link>
        <Link href="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link>
        {/* Navigates directly to the new dedicated Contact page */}
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
        {/* Theme Picker Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            className="theme-toggle"
            aria-label="Select theme"
            onClick={() => setThemePickerOpen(!themePickerOpen)}
          >
            {mounted ? <Palette size={16} /> : null}
          </button>

          {mounted && themePickerOpen && (
            <div
              style={{
                position: 'absolute',
                top: '48px',
                right: '0',
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '8px',
                boxShadow: 'var(--shadow-hover)',
                zIndex: 50,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                minWidth: '150px',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--muted)',
                  padding: '6px 10px 4px',
                  textTransform: 'uppercase',
                }}
              >
                Select Theme
              </div>
              {THEMES.map((t) => {
                const isActive = currentTheme === t.id
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id)
                      setThemePickerOpen(false)
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      border: 'none',
                      background: isActive ? 'var(--band)' : 'transparent',
                      color: isActive ? 'var(--cyan)' : 'var(--ink)',
                      fontSize: '12px',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: t.color,
                        }}
                      />
                      <span>{t.name}</span>
                    </div>
                    {isActive && <Check size={14} color="var(--cyan)" />}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Quick Light/Dark Toggle Button */}
        {/* <button
          className="theme-toggle"
          aria-label="Toggle light or dark theme"
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted ? (
            currentTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />
          ) : null}
        </button> */}

        {/* Mobile Hamburger Button */}
        <button
          className="menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  )
}
import { useState, useEffect } from 'react'
import './Nav.css'

const links = [
  { label: 'Problem',      href: '#problem' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'Concept',      href: '#system-concept' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Software',     href: '#software' },
  { label: 'Hardware',     href: '#hardware' },
  { label: 'Media',        href: '#media' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#hero" className="nav__logo" onClick={close}>
          Ctrl<span>+</span>Sea
        </a>

        <nav className={`nav__links${open ? ' nav__links--open' : ''}`} aria-label="Main navigation">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav__link" onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={`nav__burger${open ? ' nav__burger--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

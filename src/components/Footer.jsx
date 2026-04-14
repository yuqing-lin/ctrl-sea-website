import { site } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Ctrl<span>+</span>Sea</span>
          <span className="footer__sub">Autonomous water-quality ASV</span>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {[
            ['Problem',      '#problem'],
            ['Concept',      '#system-concept'],
            ['Architecture', '#architecture'],
            ['Software',     '#software'],
            ['Hardware',     '#hardware'],
            ['Media',        '#media'],
            ['Team',         '#team'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="footer__link">{label}</a>
          ))}
        </nav>

        <p className="footer__copy">
          {site.course} · Carnegie Mellon University
        </p>
      </div>
    </footer>
  )
}

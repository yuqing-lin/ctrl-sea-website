import { site, team } from '../data/content'
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
            ['Media',        '#media'],
            ['Problem',      '#problem'],
            ['Concept',      '#system-concept'],
            ['Architecture', '#architecture'],
            ['Software',     '#software'],
            ['Hardware',     '#hardware'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="footer__link">{label}</a>
          ))}
        </nav>

        <p className="footer__copy">
          {site.course} · Carnegie Mellon University
        </p>
        <p className="footer__names">
          {team.map(m => m.name).join(' · ')}
        </p>
      </div>
    </footer>
  )
}

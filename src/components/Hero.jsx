import { site } from '../data/content'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow">{site.course}</p>

        <h1 className="hero__title">
          Ctrl<span className="hero__plus">+</span>Sea
        </h1>

        <p className="hero__tagline">{site.tagline}</p>

        <p className="hero__description">{site.description}</p>


      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

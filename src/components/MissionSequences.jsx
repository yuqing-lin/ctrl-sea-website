import { sequences } from '../data/content'
import './MissionSequences.css'

const BASE = import.meta.env.BASE_URL

export default function MissionSequences() {
  return (
    <section id="mission-sequences" className="section section--alt">
      <div className="container">
        <p className="section-label">Mission Sequences</p>
        <h2 className="section-title">Key behavioral flows</h2>
        <p className="section-sub">
          Sequence and flow diagrams illustrating how the system handles normal operations
          and off-nominal scenarios such as boundary breaches and leak detection.
        </p>

        <div className="seq__grid">
          {sequences.map(s => (
            <div key={s.title} className="card seq__card">
              <figure className="seq__fig">
                <img
                  src={`${BASE}media/diagrams/${s.file}`}
                  alt={`${s.title} sequence diagram`}
                  className="diagram-img"
                />
              </figure>
              <div className="seq__text">
                <h3 className="seq__title">{s.title}</h3>
                <p className="seq__desc">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

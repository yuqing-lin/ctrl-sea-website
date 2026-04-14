import { subsystems } from '../data/content'
import './SystemArchitecture.css'

const BASE = import.meta.env.BASE_URL

export default function SystemArchitecture() {
  return (
    <section id="architecture" className="section section--alt">
      <div className="container">
        <p className="section-label">System Architecture</p>
        <h2 className="section-title">Subsystems & interfaces</h2>
        <p className="section-sub">
          Six major subsystems work together across the ASV and the shore-side Control Station.
          All onboard compute runs ROS 2 on a Raspberry Pi 5.
        </p>

        <div className="arch__subsystem-grid">
          {subsystems.map(s => (
            <div key={s.id} className="card card--hover arch__card">
              <div className="arch__card-header">
                <span className="arch__icon" aria-hidden="true">{s.icon}</span>
                <span className="arch__id badge badge-teal">{s.id}</span>
              </div>
              <h3 className="arch__card-title">{s.name}</h3>
              <p className="arch__card-desc">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="arch__diagrams">
          <figure className="arch__fig arch__fig--wide">
            <img
              src={`${BASE}media/diagrams/electronics_system_architecture_diagram.png`}
              alt="Electronics system architecture diagram showing all major subsystem connections"
              className="diagram-img arch__elec-img"
            />
            <figcaption>Electronics system architecture - subsystem interconnects and interfaces</figcaption>
          </figure>

          <div className="arch__fig-row">
            <figure className="arch__fig">
              <img
                src={`${BASE}media/diagrams/asv_electronics.png`}
                alt="ASV electronics block diagram"
                className="diagram-img"
              />
              <figcaption>Onboard electronics overview</figcaption>
            </figure>
            <figure className="arch__fig">
              <img
                src={`${BASE}media/diagrams/asv_power.png`}
                alt="ASV power architecture diagram"
                className="diagram-img"
              />
              <figcaption>Power distribution architecture</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

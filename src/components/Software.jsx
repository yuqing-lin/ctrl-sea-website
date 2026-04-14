import { softwareLayers, missionModes } from '../data/content'
import './Software.css'

const BASE = import.meta.env.BASE_URL

export default function Software() {
  return (
    <section id="software" className="section">
      <div className="container">
        <p className="section-label">Software & Autonomy</p>
        <h2 className="section-title">Five-layer software architecture</h2>

        {/* Software layer stack */}
        <div className="sw-layers">
          {softwareLayers.map((layer, i) => (
            <div key={layer.name} className="sw-layer" style={{ '--layer-color': layer.color }}>
              <div className="sw-layer__left">
                <span className="sw-layer__num">L{softwareLayers.length - i}</span>
                <div>
                  <h3 className="sw-layer__name">{layer.name}</h3>
                  <p className="sw-layer__desc">{layer.description}</p>
                </div>
              </div>
              <div className="sw-layer__nodes">
                {layer.nodes.map(n => (
                  <span key={n} className="sw-layer__node">{n}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Software architecture diagrams */}
        <div className="sw-diagrams">
          <figure>
            <img
              src={`${BASE}media/diagrams/software_arch.png`}
              alt="Software architecture diagram showing ROS 2 nodes and data flows"
              className="diagram-img"
            />
            <figcaption>ROS 2 node graph - data flows and interfaces</figcaption>
          </figure>
          <figure>
            <img
              src={`${BASE}media/diagrams/sw_architecture.png`}
              alt="Software architecture overview"
              className="diagram-img sw-arch-img"
            />
            <figcaption>Software architecture overview</figcaption>
          </figure>
        </div>

        {/* Mission state machine */}
        <div className="sw-fsm-section">
          <h3 className="sw-sub-heading">Mission state machine</h3>
          <p className="sw-fsm-note">
            The ASV uses an explicit finite-state model. <span className="badge badge-red">SAFE</span> preempts
            all other modes. <span className="badge badge-yellow">RTH</span> overrides survey, hold, and sample.
          </p>

          <div className="sw-modes">
            {missionModes.map(m => (
              <div key={m.id} className={`sw-mode sw-mode--${m.color}`}>
                <span className="sw-mode__id">{m.id}</span>
                <span className="sw-mode__desc">{m.description}</span>
              </div>
            ))}
          </div>

          <figure className="sw-fsm-fig">
            <img
              src={`${BASE}media/diagrams/modes_fsm.png`}
              alt="Mission mode finite state machine diagram"
              className="diagram-img sw-fsm-fig__img"
            />
            <figcaption>Mode finite state machine - transitions and safety overrides</figcaption>
          </figure>
        </div>

      </div>
    </section>
  )
}

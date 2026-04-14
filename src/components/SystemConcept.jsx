import './SystemConcept.css'

const BASE = import.meta.env.BASE_URL

const missionSteps = [
  {
    step: '01',
    title: 'Plan',
    body: 'Operator defines the study area and generates a coverage waypoint plan. The system validates feasibility against battery endurance.',
  },
  {
    step: '02',
    title: 'Deploy',
    body: 'Mission plan is uploaded to the ASV, which completes boot checks and sensor validation before acknowledging readiness.',
  },
  {
    step: '03',
    title: 'Survey',
    body: 'ASV follows planned waypoints autonomously, streaming geo-timestamped water-quality metrics to shore. LiDAR provides real-time obstacle detection and avoidance.',
  },
  {
    step: '04',
    title: 'Sample',
    body: 'At designated waypoints, the vehicle station-keeps within a 2 m radius and fills a labeled sample bottle. A WQ snapshot is logged at the moment of collection.',
  },
  {
    step: '05',
    title: 'Return',
    body: 'On mission completion, low battery, or operator command, the ASV returns to the recovery point for retrieval.',
  },
  {
    step: '06',
    title: 'Export',
    body: 'Control Station exports a CSV of geo-tagged readings and generates spatial heatmaps. Discrete samples go to a lab for analysis.',
  },
]

export default function SystemConcept() {
  return (
    <section id="system-concept" className="section">
      <div className="container">
        <p className="section-label">System Concept</p>
        <h2 className="section-title">What is Ctrl + Sea?</h2>
        <p className="section-sub">
          Ctrl + Sea is a small, battery-powered autonomous surface vehicle designed for calm inland waters - lakes, ponds, and slow rivers.
          It executes coverage surveys, measures water quality in situ, and collects discrete samples for lab analysis, all without constant operator control.
        </p>


        {/* Key specs strip */}
        <div className="concept__specs">
          {[
            { label: 'Propulsion',      value: '2× T200 Thrusters' },
            { label: 'Compute',         value: 'Raspberry Pi 5 + ROS 2' },
            { label: 'Max speed',       value: '≥ 3 knots' },
            { label: 'Sample capacity', value: '1 × 250 mL bottle' },
            { label: 'Battery',         value: '12 V / 50 Ah LiFePO4' },
            { label: 'Operating env',   value: 'Calm inland water' },
          ].map(s => (
            <div key={s.label} className="concept__spec">
              <span className="concept__spec-label">{s.label}</span>
              <span className="concept__spec-value">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Use-case diagram */}
        <div className="concept__usecase">
          <figure>
            <img
              src={`${BASE}media/diagrams/simple_use_case_diagram.png`}
              alt="Use-case diagram showing operator and ASV interactions"
              className="diagram-img concept__usecase-img"
            />
            <figcaption>Use-case overview - operator and ASV interactions</figcaption>
          </figure>
        </div>

        {/* Mission steps */}
        <h3 className="concept__steps-heading">A typical mission</h3>
        <div className="concept__steps">
          {missionSteps.map(s => (
            <div key={s.step} className="concept__step">
              <span className="concept__step-num">{s.step}</span>
              <div>
                <h4 className="concept__step-title">{s.title}</h4>
                <p className="concept__step-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

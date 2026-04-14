import './Problem.css'

const points = [
  {
    icon: '🧑‍🔬',
    heading: 'Manual sampling is expensive and sparse',
    body: 'Traditional monitoring relies on hand-collected grab samples - a snapshot in time and space. Broad spatial coverage requires a large crew and many hours in the field.',
  },
  {
    icon: '📍',
    heading: 'Limited spatial resolution',
    body: 'Parameters like turbidity and pH can vary significantly across a small lake. Manual methods rarely capture enough points to reveal spatial gradients or localized pollution sources.',
  },
  {
    icon: '⏱️',
    heading: 'Slow feedback loop',
    body: 'Lab-analyzed samples can take days to process while conditions change. Real-time in-situ sensing enables faster decisions and event detection.',
  },
  {
    icon: '🤖',
    heading: 'Ctrl + Sea fills the gap',
    body: 'An ASV can survey a coverage area autonomously, stream water-quality metrics continuously, and collect discrete samples for lab analysis - without constant operator supervision.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section">
      <div className="container">
        <p className="section-label">Problem Definition</p>
        <h2 className="section-title">Why automate water-quality monitoring?</h2>
        <p className="section-sub">
          Freshwater ecosystems face growing pressure from agricultural runoff, industrial discharge, and climate-driven changes.
          Effective monitoring requires more coverage, higher frequency, and lower cost than manual methods can provide.
        </p>

        <div className="problem__grid">
          {points.map(p => (
            <div key={p.heading} className="card card--hover problem__card">
              <span className="problem__icon" aria-hidden="true">{p.icon}</span>
              <h3 className="problem__heading">{p.heading}</h3>
              <p className="problem__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

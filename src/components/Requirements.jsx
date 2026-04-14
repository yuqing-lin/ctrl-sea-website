import { functionalReqs, nonFunctionalReqs } from '../data/content'
import './Requirements.css'

export default function Requirements() {
  return (
    <section id="requirements" className="section section--alt">
      <div className="container">
        <p className="section-label">Requirements</p>
        <h2 className="section-title">What the system must do</h2>
        <p className="section-sub">
          Key functional and non-functional requirements derived from the project design specification.
        </p>

        <h3 className="reqs__sub-heading">Functional Requirements</h3>
        <div className="reqs__grid">
          {functionalReqs.map(r => (
            <div key={r.id} className="card card--hover reqs__card">
              <span className="reqs__id">{r.id}</span>
              <h4 className="reqs__title">{r.title}</h4>
              <p className="reqs__desc">{r.description}</p>
            </div>
          ))}
        </div>

        <h3 className="reqs__sub-heading reqs__sub-heading--mt">Non-Functional Requirements</h3>
        <div className="reqs__nf-grid">
          {nonFunctionalReqs.map(r => (
            <div key={r.label} className="reqs__nf-row">
              <span className="reqs__nf-label">{r.label}</span>
              <span className="reqs__nf-value">{r.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

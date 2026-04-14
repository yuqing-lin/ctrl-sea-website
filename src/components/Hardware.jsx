import './Hardware.css'

const BASE = import.meta.env.BASE_URL

export default function Hardware() {
  return (
    <section id="hardware" className="section">
      <div className="container">
        <p className="section-label">Hardware & Build</p>
        <h2 className="section-title">Physical system & components</h2>
        <p className="section-sub">
          The ASV is built around a monohull with stern-mounted differential-drive thrusters.
          Full system assembly and testing are currently in progress.
        </p>


        <div className="hw__photo-grid">
          <figure className="hw__photo-fig">
            <img
              src={`${BASE}media/photos/stern_thrusters.jpg`}
              alt="T200 thrusters mounted to the stern of the ASV"
              className="hw__photo"
            />
            <figcaption>T200 thrusters mounted at the stern</figcaption>
          </figure>

          <figure className="hw__photo-fig">
            <img
              src={`${BASE}media/photos/front_side_view.jpeg`}
              alt="Front and side view of the ASV hull"
              className="hw__photo"
            />
            <figcaption>Front/side view of the hull</figcaption>
          </figure>
        </div>


      </div>
    </section>
  )
}

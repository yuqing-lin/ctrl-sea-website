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

          <div className="hw__photo-fig">
            <div className="placeholder-box hw__photo-placeholder">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <circle cx="12" cy="12" r="3.5" />
                <path d="M3 8h1M20 8h1" />
              </svg>
              <span>Top/front view coming soon</span>
            </div>
            <figcaption>Hull overview - photo coming soon</figcaption>
          </div>
        </div>


      </div>
    </section>
  )
}

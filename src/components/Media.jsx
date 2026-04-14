import { videos } from '../data/content'
import './Media.css'

export default function Media() {
  return (
    <section id="media" className="section section--alt">
      <div className="container">
        <p className="section-label">Media & Videos</p>
        <h2 className="section-title">See it in action</h2>
        <p className="section-sub">
          Videos of the control station, assembly, and in-water testing will appear here as they become available.
        </p>

        <div className="media__grid">
          {videos.map(v => (
            <div key={v.title} className="card media__card">
              {v.src ? (
                <div className="media__embed-wrap">
                  <iframe
                    src={v.src}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="media__iframe"
                  />
                </div>
              ) : (
                <div className="media__placeholder placeholder-box">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>{v.placeholder}</span>
                </div>
              )}
              <div className="media__meta">
                <h3 className="media__title">{v.title}</h3>
                <p className="media__caption">{v.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

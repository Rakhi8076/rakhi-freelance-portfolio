const steps = [
  'Share Your Idea',
  'Understand',
  'Plan & Design',
  'Build',
  'Refine',
  'Launch',
]

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">

        <div className="section-kicker">
          05 / HOW IT WORKS
        </div>

        <div className="process-heading">
          <h2>
            From your idea
            <br />
            <em>to a live product.</em>
          </h2>

          <p>
            A simple, transparent process designed to turn your idea
            into a product that actually works.
          </p>
        </div>

        <div className="timeline">
          {steps.map((step, i) => (
            <div className="timeline-step" key={step}>

              <span className="timeline-number">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="timeline-dot" />

              <h3>{step}</h3>

              {i < steps.length - 1 && (
                <div className="timeline-line" />
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
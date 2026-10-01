const steps = [
  ['01', 'Understand', 'Your idea, audience and goals come first.', ['Goal and requirement mapping', 'Choosing the right scope', 'Clear plan before code']],
  ['02', 'Build', 'The right technology, thoughtfully applied.', ['Clean, responsive interfaces', 'Reliable APIs and backends', 'AI features where they help']],
  ['03', 'Deliver', 'A refined product ready to make an impact.', ['Testing and polishing', 'Deployment and setup', 'Support after launch']],
]

const stats = [
  ['3+', 'Projects built'],
  ['10+', 'Technologies'],
  ['AI + Web', 'Focus areas'],
  ['IGDTUW', 'CSE-AI, Delhi'],
]

export default function Approach() {
  return (
    <section className="section container client-section" id="about">
      <div className="section-kicker">01 / THE APPROACH</div>
      <div className="split-heading"><h2>More than just code.<br /><em>I build solutions.</em></h2></div>
      <div className="approach-grid">
        {steps.map(([num, title, text, points]) => (
          <div className="approach-card" key={num as string}>
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <ul className="approach-points">{(points as string[]).map(p => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="stats-row">
        {stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>
  )
}
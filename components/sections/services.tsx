import { ArrowUpRight } from 'lucide-react'

const services = [
  ['01', 'Website Development', 'Fast, responsive websites that make your business look as good as it works.', 'React · Next.js · Tailwind CSS'],
  ['02', 'Full-Stack Development', 'End-to-end web apps with clean APIs, solid databases and polished frontends.', 'Node.js · Express · FastAPI · MongoDB · MySQL'],
  ['03', 'AI-Powered Applications', 'Chatbots, RAG tools and smart features that make complex workflows feel simple.', 'Python · Generative AI · RAG'],
  ['04', 'Fixes & Improvements', 'Bug fixes, UI polish and performance tuning for websites that already exist.', 'Debugging · Responsive fixes · Optimization'],
  ['05', 'Deployment & Setup', 'From local project to live website, with hosting and environment setup handled.', 'Vercel · Render · Git & GitHub'],
]

export default function Services() {
  return (
    <section className="section container" id="services">
      <div className="section-kicker">02 / WHAT I DO</div>
      <div className="section-heading-row">
        <h2>Skills that move<br /><em>ideas forward.</em></h2>
      </div>
      <div className="services-list">
        {services.map(([num, title, text, stack]) => (
          <a className="service-row" href="#contact" key={num}>
            <span className="service-num">{num}</span>
            <h3>{title}</h3>
            <p>{text}<small className="service-stack">{stack}</small></p>
            <ArrowUpRight size={18} />
          </a>
        ))}
      </div>
    </section>
  )
}
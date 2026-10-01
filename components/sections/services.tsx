'use client'

import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Website Development',
    description: 'Fast, responsive websites that make your business look as good as it works.',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    num: '02',
    title: 'Full-Stack Development',
    description: 'End-to-end web apps with clean APIs, solid databases, and polished frontends.',
    stack: ['Node.js', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL'],
  },
  {
    num: '03',
    title: 'AI-Powered Applications',
    description: 'Chatbots, RAG tools, and smart features that make complex workflows feel simple.',
    stack: ['Python', 'Generative AI', 'Groq API', 'RAG'],
  },
  {
    num: '04',
    title: 'Fixes & Improvements',
    description: 'Bug fixes, UI polish, and performance tuning for websites that already exist.',
    stack: ['Debugging', 'Responsive Fixes', 'Performance Tuning'],
  },
  {
    num: '05',
    title: 'Deployment & Setup',
    description: 'From local project to live website, with hosting and environment setup handled.',
    stack: ['Vercel', 'Render', 'Git & GitHub', 'CI/CD'],
  },
]

export default function Services() {
  return (
    <section className="section container" id="services" style={{ padding: '80px 20px' }}>
      <div className="section-kicker" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', opacity: 0.8, marginBottom: '16px' }}>
        02 / WHAT I DO
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 }}>
          Skills that move<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>ideas forward.</em>
        </h2>
        <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: 1.6, alignSelf: 'center' }}>
          Tailored web, full-stack, and AI solutions crafted with focus on performance, design precision, and scalable code.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {services.map(({ num, title, description, stack }) => (
          <div
            className="service-card"
            key={num}
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: '24px',
              alignItems: 'center',
              padding: '28px 32px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.4)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              color: 'inherit',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span style={{ fontSize: '1rem', fontWeight: 700, opacity: 0.6, alignSelf: 'start', paddingTop: '4px' }}>
              {num}
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0 }}>{title}</h3>
              <p style={{ margin: 0, opacity: 0.85, fontSize: '0.95rem', lineHeight: 1.5 }}>{description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                {stack.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.03em',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      background: 'rgba(0, 0, 0, 0.06)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  )
}
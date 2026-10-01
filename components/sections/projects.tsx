'use client'

import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'EduVision AI',
    category: 'AI / EdTech',
    description:
      'A full-stack AI learning platform that provides personalized learning support, career recommendations, and AI-powered study assistance.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Groq API', 'JWT', 'SendGrid', 'Python'],
    accent: 'violet',
    image: '/Edu.png',
    url: 'https://edu-vision-ai-ruby.vercel.app/',
  },
  {
    number: '02',
    name: 'DSA Manual',
    category: 'Web Application',
    description:
      'A unified DSA preparation platform integrating Striver, Love Babbar, and Apna College sheets with 1,000+ curated problems and AI guidance.',
    tags: [
      'React',
      'TypeScript',
      'FastAPI',
      'MongoDB',
      'JWT Auth',
      'Groq API',
      'Tailwind CSS',
    ],
    accent: 'cyan',
    image: '/DSA.png',
    url: 'https://the-dsa-manual.vercel.app/',
  },
  {
    number: '03',
    name: 'AyurSutra',
    category: 'Health / Culture',
    description:
      'A React-based wellness platform promoting holistic wellness through Ayurveda, Panchakarma, Yoga, and meditation, with therapy info and tracking.',
    tags: ['React', 'Tailwind CSS', 'React Router', 'Fetch / Axios'],
    accent: 'blue',
    image: '/Ayur (1).png',
    url: 'https://rakhi8076.github.io/AyurSutra/',
  },
]

export default function Projects() {
  return (
    <section className="section container projects-section" id="work">
      <div className="section-kicker">04 / SELECTED WORK</div>

      <div className="section-heading-row">
        <h2>
          A few things
          <br />
          <em>I&apos;ve built.</em>
        </h2>
        <p>
          Featured web apps and AI systems built for real-world impact, high responsiveness, and scalable user experience.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <a
            className={`project-card ${project.accent}`}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            key={project.name}
          >
            {/* Project Image Container */}
            <div className="project-art">
              <div className="art-grid" />
              <img
                src={project.image}
                alt={`${project.name} project preview`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  transition: 'transform 0.4s ease',
                }}
              />
              <ExternalLink size={18} />
            </div>

            <div className="project-meta">
              <span>{project.number} — {project.category}</span>
            </div>

            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-link">
              <span>Explore Live Project</span>
              <ArrowUpRight size={15} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
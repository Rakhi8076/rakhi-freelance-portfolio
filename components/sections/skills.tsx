const skills = ['Java', 'Python', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'FastAPI', 'Flask', 'MongoDB', 'MySQL', 'Machine Learning', 'Generative AI', 'RAG', 'Git', 'GitHub', 'Vercel', 'Render']

export default function Skills() {
  return (
    <section className="skills-band"><div className="container skills-inner"><div><div className="section-kicker">03 / TOOLKIT</div><h2>Curious by nature.<br /><em>Always learning.</em></h2></div><div className="skill-cloud">{skills.map((skill, i) => <span className={i % 4 === 0 ? 'skill highlighted' : 'skill'} key={skill}>{skill}</span>)}</div></div></section>
  )
}
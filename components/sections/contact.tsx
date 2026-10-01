import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function Contact() {
  return (
    <section className="cta-section container" id="contact"><div className="cta-orb" /><Sparkles className="cta-spark" size={22} /><div className="section-kicker">06 / START SOMETHING</div><h2>Have an idea you&apos;re<br /><em>ready to build?</em></h2><p>Let&apos;s turn your idea into a modern, functional digital product.</p><form className="contact-form" action="mailto:hello@rakhi.dev" method="post" encType="text/plain"><div className="form-row"><label>Name<input name="name" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@company.com" required /></label></div><div className="form-row"><label>Project type<input name="project" placeholder="Website, app, AI product..." /></label><label>Budget<input name="budget" placeholder="Your range" /></label></div><label>Message<textarea name="message" placeholder="Tell me a little about your idea..." rows={4} required /></label><button className="button button-primary" type="submit">Start a conversation <ArrowUpRight size={17} /></button></form></section>
  )
}
'use client'

import { ArrowDownRight, ArrowUpRight, Mail, Sparkles, Link } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-copy">
        <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span className="pulse-dot" />
          <span>Available for select freelance projects</span>
        </div>

        <h1>
          Turning ideas into <em>digital</em> experiences.
        </h1>

        <p className="hero-intro">
          I&apos;m Rakhi, a software developer and CSE-AI student crafting modern websites, 
          full-stack applications, and AI-powered solutions built for performance and scale.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            View my work <ArrowDownRight size={17} />
          </a>
          <Link className="button button-ghost" href="/contact">
  Let&apos;s work together <ArrowUpRight size={17} />
</Link>
        </div>

        <div className="social-row">
          <a href="mailto:rakhipratapsingh75505@gmail.com">
            <Mail size={16} /> Email
          </a>
          <a href="https://www.linkedin.com/in/rakhi-41a351283/" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
            </svg>
            LinkedIn
          </a>
          <a href="https://www.instagram.com/tho_ughtspace/" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
            Instagram
          </a>
          <span className="social-divider" />
          <span>IGDTUW · DELHI</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Rakhi profile portrait">
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />
        <div className="wire-sphere">
          <div />
          <div />
          <div />
        </div>

        <div className="portrait-frame">
          <div className="frame-corner corner-tl" />
          <div className="frame-corner corner-br" />
          <img src="/rakhi-closeup.jpg" alt="Portrait of Rakhi" />
          <div className="portrait-label">
            <span>Rakhi</span>
            <span>AI & Web Developer</span>
          </div>
        </div>

        <div className="code-chip chip-one" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Sparkles size={12} />
          <span>&lt;build /&gt;</span>
        </div>
        <div className="code-chip chip-two">AI + FULLSTACK</div>
      </div>
    </section>
  )
}
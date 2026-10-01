'use client'

import { useState } from 'react'
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const project = formData.get('project')
    const budget = formData.get('budget')
    const message = formData.get('message')

    const subject = encodeURIComponent(`Project Inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${project}\nBudget: ${budget}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:rakhipratapsingh75505@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section 
      id="contact"
      style={{
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '16px' }}>
        Have an idea you&apos;re<br />
        <em style={{ fontStyle: 'italic', fontWeight: 400 }}>ready to build?</em>
      </h1>

      <p style={{ maxWidth: '520px', fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.8, marginBottom: '32px' }}>
        Let&apos;s turn your idea into a modern, functional digital product. 
        Fill out the form below or email me directly at{' '}
        <a 
          href="mailto:rakhipratapsingh75505@gmail.com" 
          style={{ color: 'var(--cyan)', textDecoration: 'underline', fontWeight: 600 }}
        >
          rakhipratapsingh75505@gmail.com
        </a>.
      </p>

      {submitted ? (
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '16px 24px',
            borderRadius: '12px',
            background: 'var(--band)',
            border: '1px solid var(--line)',
            color: 'var(--cyan)',
            width: '100%'
          }}
        >
          <CheckCircle2 size={18} />
          <span style={{ fontSize: '14px', fontWeight: 500 }}>Opening email client... Thanks for getting in touch!</span>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <label style={labelStyle}>
              <span>Name</span>
              <input name="name" placeholder="Your name" required style={inputStyle} />
            </label>
            <label style={labelStyle}>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@company.com" required style={inputStyle} />
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <label style={labelStyle}>
              <span>Project type</span>
              <input name="project" placeholder="Website, app, AI product..." style={inputStyle} />
            </label>
            <label style={labelStyle}>
              <span>Budget</span>
              <input name="budget" placeholder="Your target range" style={inputStyle} />
            </label>
          </div>

          <label style={labelStyle}>
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Tell me a little about your idea, timeline, or requirements..."
              rows={4}
              required
              style={{ ...inputStyle, height: 'auto', resize: 'vertical', paddingTop: '10px' }}
            />
          </label>

          <button 
            className="button button-primary" 
            type="submit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '14px 28px',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '8px',
              width: '100%'
            }}
          >
            Start a conversation <ArrowUpRight size={16} />
          </button>
        </form>
      )}
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  opacity: 0.85
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '8px',
  border: '1px solid var(--line, rgba(0, 0, 0, 0.12))',
  background: 'var(--card, rgba(255, 255, 255, 0.7))',
  color: 'inherit',
  fontSize: '14px',
  outline: 'none',
  boxSizing: 'border-box'
}
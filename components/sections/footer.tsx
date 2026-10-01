'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer container">
      <div className="footer-left">
        <a className="brand" href="#top" aria-label="Rakhi home">
          <span>R</span> / RAKHI
        </a>
        <p className="footer-bio">
          Software Developer · Freelancer · AI Enthusiast
        </p>
      </div>

      <div className="footer-right">
        <span>© {currentYear} Rakhi. All rights reserved.</span>
      </div>
    </footer>
  )
}
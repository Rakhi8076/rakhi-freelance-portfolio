import Contact from '@/components/sections/contact'
import Navbar from '@/components/sections/navbar'
import Footer from '@/components/sections/footer'

export const metadata = {
  title: 'Contact | Rakhi - Software Developer',
  description: 'Get in touch with Rakhi for web development, full-stack, or AI projects.',
}

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px 60px' }}>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
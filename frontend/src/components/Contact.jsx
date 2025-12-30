import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, FileDown } from 'lucide-react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.send(
        'service_sobuiv7',      // Your Service ID
        'template_gdyirj4',     // Correct Template ID
        {
          from_name: formData.name,     // Must match your template variables
          from_email: formData.email,
          message: formData.message,
        },
        'BqM3z6Y9IPmV_jwrG'     // Public Key
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 4000)
    }
  }

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'tiwarisaish381@gmail.com', href: 'mailto:tiwarisaish381@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+977-9861938401', href: 'tel:+9779861938401' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Kathmandu, Nepal', href: null },
  ]

  return (
    <div id="contact" className="min-h-screen py-20 px-4">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-lg">
            Whether you have a project, idea, or just want to say hi, I’ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card bg-background/50 border-border focus:border-primary focus:outline-none transition-colors rounded-lg"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card bg-background/50 border-border focus:border-primary focus:outline-none transition-colors rounded-lg"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 glass-card bg-background/50 border-border focus:border-primary focus:outline-none transition-colors rounded-lg resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : <>
                  <Send size={20} /> Send Message
                </>}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center mt-2">Oops! Something went wrong.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">{info.icon}</div>
                  {info.href ? (
                    <a href={info.href} className="text-lg font-medium hover:text-primary transition-colors">{info.value}</a>
                  ) : (
                    <p className="text-lg font-medium">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4 mb-6">
                <a href="https://github.com/SaishTiwari" target="_blank" rel="noopener noreferrer"
                  className="p-3 glass-card-hover rounded-lg flex-1 flex items-center justify-center gap-2">
                  <Github size={20} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/saish-tiwari-ba119a150/" target="_blank" rel="noopener noreferrer"
                  className="p-3 glass-card-hover rounded-lg flex-1 flex items-center justify-center gap-2">
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>

              <a href="/path-to-resume.pdf" className="w-full px-6 py-3 glass-card-hover text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2">
                <FileDown size={20} /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
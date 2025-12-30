import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, FileDown, Instagram, Twitter } from 'lucide-react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.send(
        'service_sobuiv7',
        'template_gdyirj4',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'BqM3z6Y9IPmV_jwrG'
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      // Error logging removed for production
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'tiwarisaish381@gmail.com', href: 'mailto:tiwarisaish381@gmail.com' },
    { icon: Phone, label: 'Inquiries', value: '+977-9861938401', href: 'tel:+9779861938401' },
    { icon: MapPin, label: 'Location', value: 'Kathmandu, Nepal', subtext: 'Available for Remote/Global Collaboration' },
  ]

  return (
    <div id="contact" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Call to Action & Contact Details */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Let&apos;s Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500">
                  Exceptional
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Currently open to opportunities in{' '}
                <span className="text-white font-medium">iOS Development</span>,{' '}
                <span className="text-white font-medium">Backend Architecture</span>, and{' '}
                <span className="text-white font-medium">Cloud Systems</span>. Whether you have a specific project in mind or just want to talk tech, my inbox is always open.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      <IconComponent size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-base font-medium text-white hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div>
                          <p className="text-base font-medium text-white">{info.value}</p>
                          {info.subtext && (
                            <p className="text-xs text-gray-400 mt-0.5">{info.subtext}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Connect Bar */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-3">Connect</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://github.com/SaishTiwari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 group"
                >
                  <Github size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/saish-tiwari-ba119a150/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 group"
                >
                  <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a 
                  href="https://x.com/TiwariSaish" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 group"
                >
                  <Twitter size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">X</span>
                </a>
                <a 
                  href="https://www.instagram.com/iamsaish_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 group"
                >
                  <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a 
                  href="/resume.pdf" 
                  className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 hover:from-primary/30 hover:via-blue-500/30 hover:to-purple-500/30 border border-primary/30 hover:border-primary/50 rounded-lg transition-all duration-300 group overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <FileDown size={16} className="relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10 text-sm font-medium">Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Contact Form */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8 space-y-3"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white">Message Sent!</h4>
                  <p className="text-sm text-gray-400">I&apos;ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent border-0 border-b-2 border-white/20 focus:border-primary pb-2 text-base outline-none transition-all duration-300 placeholder:text-gray-600"
                      placeholder="John Doe"
                      style={{
                        borderBottomColor: focusedField === 'name' ? 'rgba(99, 102, 241, 0.8)' : '',
                        boxShadow: focusedField === 'name' ? '0 2px 8px rgba(99, 102, 241, 0.2)' : '',
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent border-0 border-b-2 border-white/20 focus:border-primary pb-2 text-base outline-none transition-all duration-300 placeholder:text-gray-600"
                      placeholder="john@example.com"
                      style={{
                        borderBottomColor: focusedField === 'email' ? 'rgba(99, 102, 241, 0.8)' : '',
                        boxShadow: focusedField === 'email' ? '0 2px 8px rgba(99, 102, 241, 0.2)' : '',
                      }}
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-xs text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="3"
                      className="w-full bg-transparent border-0 border-b-2 border-white/20 focus:border-primary pb-2 text-base outline-none transition-all duration-300 resize-none placeholder:text-gray-600"
                      placeholder="Tell me about your project..."
                      style={{
                        borderBottomColor: focusedField === 'message' ? 'rgba(99, 102, 241, 0.8)' : '',
                        boxShadow: focusedField === 'message' ? '0 2px 8px rgba(99, 102, 241, 0.2)' : '',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-white text-black rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-center text-sm"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

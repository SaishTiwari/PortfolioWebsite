import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : ''
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-white">Saish Tiwari</span>
            <span className="text-primary"></span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:block px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar

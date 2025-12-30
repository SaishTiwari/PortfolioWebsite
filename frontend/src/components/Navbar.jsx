import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isIdle, setIsIdle] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredItem, setHoveredItem] = useState(null)
  const idleTimer = useRef(null)
  const { scrollY } = useScroll()

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      resetIdleTimer()
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Idle detection
  const resetIdleTimer = () => {
    setIsIdle(false)
    clearTimeout(idleTimer.current)
    idleTimer.current = setTimeout(() => {
      setIsIdle(true)
    }, 2000)
  }

  useEffect(() => {
    const handleMouseMove = () => {
      resetIdleTimer()
    }

    window.addEventListener('mousemove', handleMouseMove)
    resetIdleTimer()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(idleTimer.current)
    }
  }, [])

  // Section tracking with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id || 'home'
          setActiveSection(id)
        }
      })
    }

    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll('section[id], div[id="home"]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      style={{ opacity: isIdle ? 0.1 : 1 }}
      animate={{
        height: isScrolled ? '3.5rem' : '6rem',
        backgroundColor: isScrolled
          ? 'rgba(0, 0, 0, 0.4)'
          : 'rgba(0, 0, 0, 0)',
        borderBottomColor: isScrolled
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(255, 255, 255, 0)',
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-0 left-0 right-0 z-[9999] border-b backdrop-blur-2xl"
    >
      <div className="container mx-auto px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Brand */}
          <motion.a
            href="#home"
            className="text-white font-bold tracking-tight text-base sm:text-lg md:text-xl lg:text-2xl"
            animate={{
              fontSize: isScrolled ? ['1.25rem', '1rem'] : ['1.75rem', '1.25rem'],
            }}
            transition={{ duration: 0.3 }}
          >
            SAISH TIWARI
          </motion.a>

          {/* Nav Items - Hidden on small screens, show from md */}
          <div className="hidden md:flex items-center gap-3 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative overflow-hidden"
              >
                <div className="relative h-6">
                  {/* Original Text - Slides Up */}
                  <motion.span
                    animate={{
                      y: hoveredItem === item.id ? -24 : 0,
                      opacity: hoveredItem === item.id ? 0 : 1,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 text-sm font-semibold tracking-tighter uppercase text-white"
                  >
                    {item.name}
                  </motion.span>

                  {/* Colored Text - Slides Up from Bottom */}
                  <motion.span
                    animate={{
                      y: hoveredItem === item.id ? 0 : 24,
                      opacity: hoveredItem === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 text-sm font-semibold tracking-tighter uppercase text-blue-500"
                  >
                    {item.name}
                  </motion.span>
                </div>

                {/* Glowing Dot Indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
                    style={{
                      boxShadow: '0 0 8px rgba(59, 130, 246, 0.8), 0 0 16px rgba(59, 130, 246, 0.4)',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            ))}

            {/* Ghost Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-2.5 text-sm font-semibold tracking-tighter uppercase text-white border border-white/20 rounded-lg overflow-hidden transition-all duration-300 bg-white/5 hover:bg-transparent"
            >
              {/* Fill on Hover */}
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative z-10 mix-blend-difference transition-colors duration-300">
                Get In Touch
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

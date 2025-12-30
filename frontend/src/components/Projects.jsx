import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const personalProjects = [
    {
      title: 'Event Ticketing API',
      description: 'High-concurrency backend with pessimistic seat-locking and JWT microservices',
      tags: ['Spring Boot', 'JWT', 'PostgreSQL'],
      github: 'https://github.com/SaishTiwari/event-ticketing-api',
      glowColor: '#22c55e',
    },
    {
      title: 'Karya',
      description: 'Modern task-orchestration engine built with SwiftUI and MVVM pattern',
      tags: ['SwiftUI', 'MVVM', 'iOS'],
      github: 'https://github.com/SaishTiwari/karya',
      glowColor: '#3b82f6',
    },
    {
      title: 'Product Management System',
      description: 'Robust CRUD ecosystem with enterprise-grade JPA and REST standards',
      tags: ['Spring Boot', 'JPA', 'MySQL'],
      github: 'https://github.com/SaishTiwari/product-management',
      glowColor: '#22c55e',
    },
    {
      title: 'DSA Logic Lab',
      description: 'Optimized algorithmic solutions focusing on time-complexity',
      tags: ['Algorithms', 'Java'],
      github: 'https://github.com/SaishTiwari/dsa-logic-lab',
      glowColor: '#a855f7',
    },
  ]

  const academicProjects = [
    {
      title: 'Bojh (On-Demand Logistics)',
      description: 'Cross-platform fleet management with real-time vehicle booking',
      tags: ['Flutter', 'Node.js', 'MongoDB'],
      github: 'https://github.com/SaishTiwari/bojh',
      glowColor: '#06b6d4',
    },
    {
      title: 'E-Pustakalaya',
      description: 'Library governance system with role-based access control',
      tags: ['JSP', 'Servlets', 'MySQL'],
      github: 'https://github.com/SaishTiwari/e-pustakalaya',
      glowColor: '#f97316',
    },
    {
      title: 'Fixmandu',
      description: 'Home-service marketplace with JavaFX desktop-native performance',
      tags: ['JavaFX', 'MySQL'],
      github: 'https://github.com/SaishTiwari/fixmandu',
      glowColor: '#ef4444',
    },
    {
      title: 'Taxi Booking System',
      description: 'Event-driven Python/Tkinter driver-rider dispatch logic',
      tags: ['Python', 'Tkinter'],
      github: 'https://github.com/SaishTiwari/taxi-booking',
      glowColor: '#eab308',
    },
  ]

  return (
    <div ref={ref} id="projects" className="min-h-screen py-20 px-4 bg-gray-900 flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-500 font-mono text-sm tracking-wider">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">Featured Projects</h2>
        
        </motion.div>

        {/* Central Axis Layout */}
        <div className="relative max-h-none md:max-h-[85vh] flex items-center">
          {/* Central Vertical Line - Hidden on mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent origin-top"
          />

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
            {/* Left Column - Personal Projects */}
            <div className="space-y-4">
              {personalProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  side="left"
                  isInView={isInView}
                  isHovered={hoveredIndex === `personal-${index}`}
                  onHover={() => setHoveredIndex(`personal-${index}`)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>

            {/* Right Column - Academic Projects */}
            <div className="space-y-4">
              {academicProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  side="right"
                  isInView={isInView}
                  isHovered={hoveredIndex === `academic-${index}`}
                  onHover={() => setHoveredIndex(`academic-${index}`)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ project, index, side, isInView, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative group"
    >
      {/* Horizontal Connector Line - Hidden on mobile */}
      <motion.div
        animate={{
          backgroundColor: isHovered ? project.glowColor : 'rgba(255, 255, 255, 0.1)',
          boxShadow: isHovered ? `0 0 8px ${project.glowColor}, 0 0 16px ${project.glowColor}` : 'none',
        }}
        transition={{ duration: 0.3 }}
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-[2px] ${
          side === 'left' ? '-right-4' : '-left-4'
        }`}
      />

      {/* Project Card */}
      <div className="relative bg-[#1c1c1e]/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 p-4 transition-all duration-300 overflow-hidden">
        {/* Compact Horizontal Layout */}
        <div className="flex items-start gap-4">
          {/* Tech Icon (First tag as visual) */}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="text-xs font-bold text-white">
              {project.tags[0].substring(0, 2).toUpperCase()}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-base font-bold text-white truncate">
                {project.title}
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={16} />
              </a>
            </div>

            <motion.p
              animate={{
                height: isHovered ? 'auto' : '1.25rem',
              }}
              transition={{ duration: 0.3 }}
              className="text-xs text-gray-400 leading-relaxed overflow-hidden mb-3"
            >
              {project.description}
            </motion.p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[10px] font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Glow overlay on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: project.glowColor }}
        />
      </div>
    </motion.div>
  )
}

export default Projects

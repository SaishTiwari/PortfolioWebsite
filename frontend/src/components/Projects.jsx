import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { Github, ChevronDown } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const personalProjects = [
  {
    "title": "Phoenix — Self-Healing Framework",
    "description": "A Java framework exploring fault recovery in distributed applications.",
    "details": [
      "Service registration, discovery, heartbeat telemetry, and active health checks.",
      "Configuration-driven recovery policies for retries, exponential backoff, and circuit breakers.",
      "Structured event timelines and failure-injection scenarios with JUnit."
    ],
    "tags": [
      "Java",
      "Spring Boot",
      "JUnit",
      "Docker"
    ],
    "status": "Resume project · Source private",
    "glowColor": "#3b82f6"
  },
  {
    "title": "Event Ticketing API",
    "description": "A booking backend focused on preventing competing requests from reserving the same seat.",
    "details": [
      "Pessimistic locking and temporary seat reservations protect booking consistency.",
      "JWT authentication, role-based access, and a simulated payment flow."
    ],
    "tags": [
      "Spring Boot",
      "PostgreSQL",
      "JPA",
      "JWT"
    ],
    "github": "https://github.com/SaishTiwari/Event-Ticketing-",
    "status": "Backend project",
    "glowColor": "#22c55e"
  }
]

  const academicProjects = [
  {
    "title": "Cloud Dine",
    "description": "A food-ordering backend split into independently running authentication, menu, and order services.",
    "details": [
      "Spring Cloud Gateway routes requests to services with separate PostgreSQL databases.",
      "Docker and local Kubernetes deployment with Secrets, ConfigMaps, and service discovery.",
      "Ongoing work: observability, ingress, and deployment hardening."
    ],
    "tags": [
      "Java 21",
      "Spring Boot",
      "Docker",
      "Kubernetes"
    ],
    "github": "https://github.com/SaishTiwari/cloud-dine",
    "status": "Microservices · In progress",
    "glowColor": "#a855f7"
  },
  {
    "title": "Regional Socioeconomic Data Pipeline",
    "description": "An ongoing ETL and analytics project bringing public regional datasets into a consistent relational model.",
    "details": [
      "Python ingestion, cleaning, and validation with a normalized PostgreSQL schema.",
      "Data dictionaries, source-to-target mappings, and SQL checks for missing values and anomalies.",
      "R and Power BI reports for regional comparisons and metric trends."
    ],
    "tags": [
      "Python",
      "PostgreSQL",
      "SQL",
      "R",
      "Power BI"
    ],
    "status": "Resume project · In progress",
    "glowColor": "#06b6d4"
  }
]

  return (
    <div ref={ref} id="projects" className="relative min-h-screen py-20 px-4 bg-gray-900 flex flex-col justify-center overflow-hidden">
      {/* Spider-web style particles background */}
      <Particles
        id="projects-particles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              repulse: { distance: 200, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: '#3b82f6' },
            links: { enable: true, distance: 150, color: '#3b82f6', opacity: 0.15, width: 1 },
            move: { enable: true, speed: 0.8, outModes: { default: 'bounce' } },
            number: { value: 35, density: { enable: true, area: 800 } },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
            shape: { type: 'circle' },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-500 font-mono text-sm tracking-wider">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Service reliability, transactional APIs, and cloud-native delivery — with the implementation details behind each project.</p>
        
        </motion.div>

        {/* Central Axis Layout */}
        <div className="relative flex items-center">
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => {
          const contactSection = document.querySelector('#contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={28} className="text-blue-500" />
        </motion.div>
      </motion.div>
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
              <h3 className="text-lg font-bold text-white leading-snug">
                {project.title}
              </h3>
              {project.github && <a
                aria-label={`View ${project.title} on GitHub`}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={16} />
              </a>}
            </div>

            <p className="text-xs text-blue-400 mb-3">{project.status}</p>
            <motion.p className="text-sm text-gray-300 leading-relaxed mb-3">
              {project.description}
            </motion.p>

            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-400 mb-5">{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
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

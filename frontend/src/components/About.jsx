import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { ChevronDown } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const [activeArea, setActiveArea] = useState('mobile')

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const focusAreas = [
    {
      id: 'mobile',
      number: '01',
      label: 'Native iOS Applications',
      description: 'Building low-latency iOS experiences with a focus on gesture-driven UI and native performance.',
      techStack: 'Swift • SwiftUI • Combine • UIKit • MVVM',
    },
    {
      id: 'backend',
      number: '02',
      label: 'Backend Systems',
      description: 'Architecting type-safe microservices with Spring Boot, ensuring data integrity through strict concurrency control.',
      techStack: 'Java • Spring Boot • JPA • PostgreSQL • REST',
    },
    {
      id: 'cloud',
      number: '03',
      label: 'Cloud Architecture',
      description: 'Designing AWS ecosystems that prioritize high availability, security-first IAM, and cost-efficiency.',
      techStack: 'AWS • Lambda • RDS • S3 • CloudWatch • Serverless',
    },
    {
      id: 'philosophy',
      number: '04',
      label: 'Engineering Philosophy',
      description: 'Engineering with the belief that code should be as readable as prose and as efficient as hardware.',
      techStack: 'Clean Code • SOLID • Design Patterns • Agile • CI/CD',
    },
  ]

  const activeContent = focusAreas.find((area) => area.id === activeArea)

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 px-4 bg-gray-900 text-white min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Spider-web style particles background */}
      <Particles
        id="tsparticles-about"
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

      {/* Subtle Background Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Vertical Progress Indicator - Hidden on mobile */}
      <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
        {focusAreas.map((area) => (
          <motion.div
            key={area.id}
            animate={{
              height: activeArea === area.id ? '32px' : '8px',
              backgroundColor: activeArea === area.id ? '#3b82f6' : '#ffffff20',
            }}
            transition={{ duration: 0.3 }}
            className="w-1 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-20"
        >
          <span className="text-white/40 font-mono text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase">
            ENGINEERING FOCUS
          </span>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Navigation (40%) */}
          <div className="lg:col-span-2 space-y-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.id}
                onHoverStart={() => setActiveArea(area.id)}
                onClick={() => setActiveArea(area.id)}
                className="group cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 md:gap-6">
                  {/* Horizontal Dash */}
                  <motion.div
                    animate={{
                      width: activeArea === area.id ? '48px' : '24px',
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[2px] bg-white/20 group-hover:bg-white"
                  />

                  {/* Number and Label */}
                  <div>
                    <motion.div
                      animate={{
                        color: activeArea === area.id ? '#ffffff' : '#ffffff33',
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none"
                    >
                      {area.number}
                    </motion.div>
                    <motion.div
                      animate={{
                        color: activeArea === area.id ? '#ffffff' : '#ffffff33',
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-1 md:mt-2 tracking-tight"
                    >
                      {area.label}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Detail Area (60%) */}
          <div className="lg:col-span-3 flex items-center">
            <div className="w-full min-h-[200px] md:min-h-[300px] lg:min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArea}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 md:space-y-8 lg:space-y-12"
                >
                  {/* Description */}
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/90 font-light">
                    {activeContent?.description}
                  </p>

                  {/* Tech Stack Strip */}
                  <div className="border-t border-white/10 pt-8">
                    <div className="text-white/40 font-mono text-xs tracking-wider uppercase mb-4">
                      TECH STACK
                    </div>
                    <div className="font-mono text-sm md:text-base text-white/60 tracking-wide">
                      {activeContent?.techStack}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
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
          const skillsSection = document.querySelector('#skills');
          if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={28} className="text-blue-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
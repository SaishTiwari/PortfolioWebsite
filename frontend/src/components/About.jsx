import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Server, Cloud, Database, Zap } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    { icon: <Smartphone size={24} />, name: 'Swift / SwiftUI' },
    { icon: <Server size={24} />, name: 'Java / Spring Boot' },
    { icon: <Database size={24} />, name: 'MySQL / Databases' },
    { icon: <Cloud size={24} />, name: 'AWS Cloud' },
    { icon: <Zap size={24} />, name: 'Clean & Efficient Code' },
  ]

  return (
    <div id="about" className="min-h-screen py-20 px-4">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Topic with accent line */}
          <div className="flex flex-col items-center mb-8">
            <span className="text-primary text-lg font-mono tracking-wider mb-2 relative before:content-[''] before:block before:w-16 before:h-[2px] before:bg-blue-500 before:rounded-full before:mb-2">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Crafting Elegant Apps and Scalable Systems
          </h2>

          <div className="space-y-4 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>iOS Developer delivering intuitive and high-performance apps with Swift & SwiftUI.</p>
            <p>Backend Engineer building robust APIs and scalable systems using Java, Spring Boot, and MySQL.</p>
            <p>AWS Certified Solutions Architect designing resilient and secure cloud infrastructures.</p>
            <p>Passionate about clean code, elegant solutions, and impactful software that users love.</p>
          </div>

          {/* Download Resume Button */}
          <div className="flex justify-center mt-10">
            <a
              href="/src/assets/CV.pdf"
              download="Saish_Tiwari_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 transition-colors text-lg border border-primary/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              Download Resume
            </a>
          </div>

          {/* Skills Strip */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-gray-300 hover:text-blue-500 transition-all cursor-default"
              >
                {skill.icon}
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
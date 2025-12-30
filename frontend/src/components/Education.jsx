import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, School } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = [
    {
      degree: 'BSc. Software Engineering',
      institution: 'University of Bedfordshire',
      period: 'January 2024 - Present',
      description: 'Focusing on the architectural principles of scalable system design, distributed cloud environments, and advanced computational logic.',
      inProgress: true,
      icon: <GraduationCap size={32} />
    },
    {
      degree: 'Nepal Education Board & Secondary Education Examination',
      institution: 'Budhanilkantha School',
      location: 'Kathmandu, Nepal',
      period: 'April 2014 - July 2022',
      description: 'Foundational studies in higher secondary education with a focus on science, technology and mathematics.',
      inProgress: false,
      icon: <School size={32} />
    },
  ]

  return (
    <section ref={ref} id="education" className="min-h-screen py-20 px-4 bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-500 font-mono text-sm tracking-wider flex items-center justify-center gap-2">
            <GraduationCap size={16} />
            EDUCATION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">Academic Foundation</h2>
          <p className="text-gray-400 text-lg mt-4">
            Building expertise through rigorous theoretical knowledge and practical application
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative h-full bg-[#1c1c1e]/50 backdrop-blur-xl rounded-3xl border border-white/5 p-8 overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:bg-[#1c1c1e]/70">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {edu.icon}
                    </div>
                    
                    {/* In Progress Badge */}
                    {edu.inProgress && (
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-green-400 text-xs font-medium">In Progress</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-blue-400 text-lg font-medium mb-1">
                    {edu.institution}
                  </p>

                  {/* Location (if applicable) */}
                  {edu.location && (
                    <p className="text-white/50 text-sm mb-3">
                      {edu.location}
                    </p>
                  )}

                  {/* Period */}
                  <p className="text-white/40 text-sm font-mono mb-6">
                    {edu.period}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

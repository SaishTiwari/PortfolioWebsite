import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = [
    {
      degree: 'BSc. Software Engineering',
      institution: 'University of Bedfordshire',
      period: 'January 2024 - Present',
      description: 'Pursuing advanced software engineering studies with focus on scalable system design, cloud architecture, and modern development practices.',
    },
    {
      degree: 'Nepal Education Board',
      institution: 'Budhanilkantha School',
      period: 'June 2020 - July 2022',
      description: 'Completed higher secondary education with excellence in science and mathematics.',
    },
  ]

  return (
    <section id="education" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">EDUCATION</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Academic Background</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card-hover p-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <span className="text-sm text-gray-400 font-mono">{edu.period}</span>
                  </div>
                  <p className="text-primary mb-4">{edu.institution}</p>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

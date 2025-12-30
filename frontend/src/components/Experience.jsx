import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Junior iOS Developer',
      company: 'Coredreams Innovation',
      period: 'November 2024 – April 2025',
      description: [
        'Built a Ride Booking System with SwiftUI, focusing on a seamless user experience',
        'Integrated Firebase Authentication and Firestore for secure login and real-time data',
        'Used Combine for efficient API calls and reactive data handling',
        'Added Google Maps for location tracking, route optimization, and background services',
      ],
    },
    {
      title: 'Cloud Apprenticeship',
      company: 'Adex International',
      period: 'April 2025 – June 2025',
      description: [
        'Gained hands-on experience with core AWS services, including EC2, S3, Lambda, and RDS',
        'Learned to design, deploy, and monitor scalable cloud solutions using best practices',
        'Focused on cloud infrastructure setup, management, security, and cost optimization',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-card-bg/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">MY JOURNEY</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Experience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card-hover p-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <span className="text-sm text-gray-400 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-primary mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

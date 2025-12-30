import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Event Ticketing API',
      description: 'Built a backend API with seat locking and concurrency control to prevent double booking, including JWT authentication and payment simulation.',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/SaishTiwari/event-ticketing-api',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'E-Pustakalaya',
      description: 'Library Management System with role-based features for admins and users. Enables book tracking, borrowing, returns, and user management.',
      tags: ['JSP', 'Servlets', 'Apache Tomcat', 'MySQL'],
      github: 'https://github.com/SaishTiwari/e-pustakalaya',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Product Management System',
      description: 'Developed the backend for managing products, including creation, retrieval, updating, and deletion functionalities with RESTful API design.',
      tags: ['Java', 'Spring', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/SaishTiwari/product-management',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Karya',
      description: 'Built a task management app with MVVM architecture and responsive design. Features include task creation, completion tracking, and intuitive UI.',
      tags: ['SwiftUI', 'MVVM', 'iOS'],
      github: 'https://github.com/SaishTiwari/karya',
      gradient: 'from-pink-500 to-rose-600',
    },
  ]

  return (
    <div id="projects" className="py-20 px-4">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Featured Projects</h2>
          <p className="text-gray-400 text-lg">
            A collection of my best work designed to showcase design patterns, 
            scalable architecture, and clean code practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="glass-card-hover group overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

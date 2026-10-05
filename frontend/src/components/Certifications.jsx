import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { Award, CheckCircle2, ExternalLink, ChevronDown } from 'lucide-react'

const AWSLogo = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.226.726-1.644.487-.417 1.133-.627 1.955-.627.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.215 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.31-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.151-.32l-1.237-5.148-1.229 5.14c-.04.16-.087.264-.151.32-.064.056-.168.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.08-.216-.168-.256-.247a.592.592 0 01-.064-.247v-.423c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.375-1.181c0-.343.072-.646.215-.918.144-.272.336-.51.575-.702.24-.2.526-.343.863-.447.336-.104.702-.16 1.102-.16.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.183.256-.064 0-.168-.024-.304-.08-.455-.208-.966-.312-1.532-.312-.454 0-.806.072-1.045.224-.24.151-.359.383-.359.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .351-.072.67-.207.958a2.1 2.1 0 01-.583.734 2.555 2.555 0 01-.918.479 3.866 3.866 0 01-1.189.168z" fill="#FF9900"/>
  </svg>
)

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      date: 'June 13, 2025',
      expirationDate: 'June 13, 2028',
      validationNumber: '92619079705b4638a8b249ed527750b2',
      verifyUrl: 'https://aws.amazon.com/verification',
      logo: 'aws-custom',
      gradient: 'from-orange-500/20 via-yellow-500/10 to-transparent'
    },
    {
      title: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      date: 'October 06, 2024',
      logo: 'https://cdn.simpleicons.org/cisco/049CA1',
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent'
    },
    { title: 'JPMorgan Chase Software Engineering Job Simulation', issuer: 'Forage', date: 'Completed', gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent', simulation: true },
  ]

  return (
    <section ref={ref} id="certifications" className="relative py-20 px-4 bg-gray-900 text-white overflow-hidden">
      {/* Spider-web style particles background */}
      <Particles
        id="certifications-particles"
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-500 font-mono text-sm tracking-wider flex items-center justify-center gap-2">
            <Award size={16} />
            CERTIFICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">Certifications & Training</h2>
          <p className="text-gray-400 text-lg">
            Validated expertise in cloud architecture and network engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={cert.title}
              cert={cert}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => {
          const experienceSection = document.querySelector('#experience');
          if (experienceSection) {
            experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

const CertificationCard = ({ cert, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className="relative group"
    >
      <div className="relative h-full bg-[#1c1c1e] backdrop-blur-xl rounded-3xl border border-white/10 p-8 overflow-hidden transition-all duration-300 hover:border-blue-500/50">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Spotlight Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header with Logo */}
          <div className="flex items-start justify-between mb-4">
            {cert.logo === 'aws-custom' ? (
              <AWSLogo className="w-14 h-14 text-[#FF9900]" />
            ) : cert.logo ? (
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="w-14 h-14 object-contain"
              />
            ) : <Award className="w-14 h-14 text-blue-400" />}
            {/* Verified Badge */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5"
            >
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">{cert.simulation ? 'Job simulation' : 'Certification'}</span>
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
            {cert.title}
          </h3>

          {/* Issuer */}
          <p className="text-white/70 text-base font-medium mb-2">
            {cert.issuer}
          </p>

          {/* Date */}
          <p className="text-white/50 text-sm mb-4">
            {cert.simulation ? 'Status: ' : 'Issued: '}{cert.date}
            {cert.expirationDate && <span className="block mt-1">Valid until: {cert.expirationDate}</span>}
          </p>

          {/* Validation Number */}
          {cert.validationNumber && (
            <div className="bg-black/30 rounded-xl border border-white/5 p-4 mb-4">
              <p className="text-white/40 text-xs font-medium mb-2 tracking-wider">VALIDATION NUMBER</p>
              <p className="text-white/90 text-sm font-mono break-all leading-relaxed">
                {cert.validationNumber}
              </p>
            </div>
          )}

          {/* Verify Button */}
          {cert.verifyUrl && (
            <motion.a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white text-xs font-medium transition-all hover:bg-white hover:text-black group/btn"
            >
              <CheckCircle2 size={14} className="group-hover/btn:scale-110 transition-transform" />
              Verify Certificate
              <ExternalLink size={11} className="opacity-50" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Certifications

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin, ChevronDown, Smartphone, Server, Cloud } from 'lucide-react';
import HeroImage from "../assets/Ai_SaishProfile.jpg";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const highlights = [
    { icon: <Smartphone size={24} />, title: 'iOS Development', description: 'Crafting premium mobile experiences with Swift & SwiftUI' },
    { icon: <Server size={24} />, title: 'Backend Architecture', description: 'Scalable systems using Java, Spring Boot & MySQL' },
    { icon: <Cloud size={24} />, title: 'Cloud Engineering', description: 'AWS Certified Solutions Architect – Cloud Infrastructure' },
  ];

  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      {/* Spider-web style particles background */}
      <Particles
        id="tsparticles"
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
            links: { enable: true, distance: 150, color: '#3b82f6', opacity: 0.3, width: 1 },
            move: { enable: true, speed: 0.8, outModes: { default: 'bounce' } },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            shape: { type: 'circle' },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          
          {/* Left Column: Content */}
          <div className="flex-[1.6] text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            >
              <MapPin size={16} className="text-blue-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400">Kathmandu, Nepal</span>
            </motion.div>

           <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-snug text-white"
>
  Hi, Welcome! <br />I'm <span className="text-blue-500">Saish Tiwari</span>
</motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-400 mb-12 font-light max-w-2xl"
            >
              Software Engineer
            </motion.p>

            {/* Glassmorphic Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-500 group"
                >
                  <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6"
            >
              <a href="mailto:tiwarisaish381@gmail.com" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-blue-500/20 active:scale-95">
                Let's Collaborate
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/SaishTiwari" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:text-blue-500 hover:border-blue-500/30 transition-all"><Github size={24}/></a>
                <a href="https://www.linkedin.com/in/saish-tiwari-ba119a150/" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:text-blue-500 hover:border-blue-500/30 transition-all"><Linkedin size={24}/></a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
            
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-[2.5rem] border-2 border-white/10 shadow-2xl">
              <img 
                src={HeroImage} 
                alt="Saish Tiwari" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={28} className="text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
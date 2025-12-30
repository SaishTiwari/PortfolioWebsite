import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Sparkles } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    // Languages
    {
      name: 'Java',
      category: 'Language',
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218" fill="#5382A1"/>
          <path d="M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573" fill="#E76F00"/>
          <path d="M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118" fill="#5382A1"/>
        </svg>
      ),
    },
    {
      name: 'Swift',
      category: 'Language',
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.423.99-.531 1.49-.063.294-.097.591-.115.89-.01.167-.011.335-.015.503v.93c-.002.31-.002.62 0 .93.004.168.005.336.015.504.018.298.052.595.115.889.108.5.286 1.01.531 1.49a5.04 5.04 0 0 0 2.205 2.203c.48.245.99.423 1.49.531.294.063.591.097.89.115.167.01.335.011.503.015.31.002.62.002.93 0 .168-.004.336-.005.504-.015.298-.018.595-.052.889-.115a5.492 5.492 0 0 0 1.49-.531 5.04 5.04 0 0 0 2.203-2.205c.245-.48.423-.99.531-1.49.063-.294.097-.591.115-.89.01-.167.011-.335.015-.503.002-.31.002-.62 0-.93-.004-.168-.005-.336-.015-.504a9.154 9.154 0 0 0-.115-.89 5.492 5.492 0 0 0-.531-1.49 5.04 5.04 0 0 0-2.203-2.203 5.492 5.492 0 0 0-1.49-.531A9.154 9.154 0 0 0 7.508 0z" fill="#F05138"/>
          <path d="M10.355 11.815c.215-.192.407-.407.572-.643a6.825 6.825 0 0 0 1.006-2.406c-.114.024-.227.05-.34.08a6.409 6.409 0 0 1-3.857-.147 6.17 6.17 0 0 1-1.164-.51 6.786 6.786 0 0 0 3.783 3.626z" fill="#fff"/>
        </svg>
      ),
    },
    {
      name: 'Python',
      category: 'Language',
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.32-.33.24-.35.2-.35.14-.33.1-.3.06-.26.04-.21.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="#FFD43B"/>
        </svg>
      ),
    },
    // Frontend
    {
      name: 'SwiftUI',
      category: 'Frontend',
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M6.803 9.318c1.306-1.634 3.214-2.743 5.348-3.114 2.134-.37 4.333.076 6.17 1.253a1.048 1.048 0 0 1 .36 1.411c-.257.447-.813.622-1.274.402a7.197 7.197 0 0 0-5.084-1.039 7.197 7.197 0 0 0-4.426 2.585c-.342.43-.98.537-1.461.244a1.048 1.048 0 0 1-.365-1.436l.732-.306z" fill="#007AFF"/>
          <path d="M9.318 17.197c1.634 1.306 2.743 3.214 3.114 5.348.37 2.134-.076 4.333-1.253 6.17a1.048 1.048 0 0 1-1.411.36c-.447-.257-.622-.813-.402-1.274a7.197 7.197 0 0 0 1.039-5.084 7.197 7.197 0 0 0-2.585-4.426c-.43-.342-.537-.98-.244-1.461a1.048 1.048 0 0 1 1.436-.365l.306.732z" fill="#007AFF"/>
        </svg>
      ),
    },
    // Backend
    {
      name: 'Spring Boot',
      category: 'Backend',
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.492 1.424l-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 11.985a9.983 9.983 0 0 0 3.205 7.334l.22.194a.856.856 0 1 1 .001.001l.149.132A9.96 9.96 0 0 0 12.015 22c5.278 0 9.613-4.108 9.984-9.292.274-2.539-.476-5.763-1.752-9.596" fill="#6DB33F"/>
        </svg>
      ),
    },
    {
      name: 'SQL',
      category: 'Backend',
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <ellipse cx="12" cy="5" rx="9" ry="3" fill="#00758F" />
          <rect x="3" y="5" width="18" height="14" rx="3" fill="#00758F" />
        </svg>
      ),
    },
    {
      name: 'PostgreSQL',
      category: 'Backend',
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.128 0c-.316.02-.616.058-.9.132-2.8.64-2.483 2.974-2.483 2.974l.01 1.088h2.518v.36H10.67s-3.4-.387-3.4 3.887c0 4.274 2.96 4.12 2.96 4.12h1.77V10.79s-.096-2.96 2.914-2.96h2.497s2.825.046 2.825-2.732V2.228S20.53-.47 17.128 0zm-1.38 1.49a.805.805 0 01.802.81.805.805 0 01-.802.806.805.805 0 01-.802-.807.805.805 0 01.802-.809z" fill="#336791"/>
          <path d="M6.872 24c.316-.02.616-.058.9-.132 2.8-.64 2.483-2.974 2.483-2.974l-.01-1.088H7.727v-.36h5.603s3.4.387 3.4-3.887c0-4.274-2.96-4.12-2.96-4.12h-1.77v1.772s.096 2.96-2.914 2.96H6.59s-2.825-.046-2.825 2.732v2.87S3.47 24.47 6.872 24zm1.38-1.49a.805.805 0 01-.802-.81.805.805 0 01.802-.806.805.805 0 01.802.807.805.805 0 01-.802.809z" fill="#336791"/>
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      category: 'Backend',
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2C7.03 2 2.5 4.24 2.5 7.5v9c0 3.26 4.53 5.5 9.5 5.5s9.5-2.24 9.5-5.5v-9C21.5 4.24 16.97 2 12 2zm0 2c4.14 0 7.5 1.64 7.5 3.5S16.14 11 12 11 4.5 9.36 4.5 7.5 7.86 4 12 4zm7.5 5.5v7c0 1.86-3.36 3.5-7.5 3.5s-7.5-1.64-7.5-3.5v-7c1.36 1.13 4.36 2 7.5 2s6.14-.87 7.5-2z" fill="#47A248"/>
        </svg>
      ),
    },
    // Tools
    {
      name: 'Firebase',
      category: 'Tools',
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14.109a.542.542 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" fill="#FFA000"/>
        </svg>
      ),
      details: 'Firestore, Realtime Database, Authentication, Crashlytics',
    },
    {
      name: 'Docker',
      category: 'Tools',
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <rect x="2" y="10" width="20" height="6" rx="2" fill="#2496ED" />
          <rect x="6" y="6" width="4" height="4" rx="1" fill="#2496ED" />
          <rect x="12" y="6" width="4" height="4" rx="1" fill="#2496ED" />
        </svg>
      ),
    },
    {
      name: 'GitHub Actions',
      category: 'Tools',
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" fill="#24292F" />
          <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'CI/CD',
      category: 'Tools',
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" fill="#00BFAE" />
          <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'AWS',
      category: 'Tools',
      level: 90,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.226.726-1.644.487-.417 1.133-.627 1.955-.627.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.215 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.31-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.151-.32l-1.237-5.148-1.229 5.14c-.04.16-.087.264-.151.32-.064.056-.168.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.08-.216-.168-.256-.247a.592.592 0 01-.064-.247v-.423c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.375-1.181c0-.343.072-.646.215-.918.144-.272.336-.51.575-.702.24-.2.526-.343.863-.447.336-.104.702-.16 1.102-.16.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.183.256-.064 0-.168-.024-.304-.08-.455-.208-.966-.312-1.532-.312-.454 0-.806.072-1.045.224-.24.151-.359.383-.359.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .351-.072.67-.207.958a2.1 2.1 0 01-.583.734 2.555 2.555 0 01-.918.479 3.866 3.866 0 01-1.189.168z" fill="#FF9900"/>
        </svg>
      ),
      details: 'EC2, S3, Lambda, etc.',
    },
    {
      name: 'Kubernetes',
      category: 'Tools',
      level: 85,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" fill="#326CE5" />
          <path d="M12 7v5l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ]

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      issueDate: 'June 13, 2025',
      expirationDate: 'June 13, 2028',
      validationNumber: '92619079705b4638a8b249ed527750b2',
      verifyUrl: 'https://aws.amazon.com/verification',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
          <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.226.726-1.644.487-.417 1.133-.627 1.955-.627.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.215 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.31-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.151-.32l-1.237-5.148-1.229 5.14c-.04.16-.087.264-.151.32-.064.056-.168.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.08-.216-.168-.256-.247a.592.592 0 01-.064-.247v-.423c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.375-1.181c0-.343.072-.646.215-.918.144-.272.336-.51.575-.702.24-.2.526-.343.863-.447.336-.104.702-.16 1.102-.16.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.183.256-.064 0-.168-.024-.304-.08-.455-.208-.966-.312-1.532-.312-.454 0-.806.072-1.045.224-.24.151-.359.383-.359.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .351-.072.67-.207.958a2.1 2.1 0 01-.583.734 2.555 2.555 0 01-.918.479 3.866 3.866 0 01-1.189.168z" fill="#FF9900"/>
        </svg>
      ),
    },
    {
      title: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      issueDate: 'October 06, 2024',
      recipientName: 'Saish Tiwari',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.018 14.803c-1.39 1.459-3.414 2.136-5.018 2.136-1.604 0-3.628-.677-5.018-2.136-.217-.228-.217-.598 0-.826.217-.228.569-.228.786 0 1.218 1.278 2.995 1.896 4.232 1.896s3.014-.618 4.232-1.896c.217-.228.569-.228.786 0 .217.228.217.598 0 .826zM8.25 9.75c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75zm6 0c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75z" fill="#049fd9"/>
        </svg>
      ),
    },
  ]

  // Group skills by category
  const categories = ['Language', 'Frontend', 'Backend', 'Tools']

  return (
    <section ref={ref} id="skills" className="min-h-screen py-20 px-4 bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card-bg/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider flex items-center justify-center gap-2">
            <Sparkles size={16} />
            TECH STACK
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-4">Tools & Technologies</h2>
          <p className="text-gray-400 text-lg">
            My arsenal of languages, frameworks, and tools that I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        {categories.map((category, categoryIndex) => {
          const categorySkills = skills.filter(skill => skill.category === category)
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
              className="mb-12 last:mb-16"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary font-mono">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + categoryIndex * 0.1 + index * 0.05,
                      type: 'spring',
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="glass-card-hover p-8 flex flex-col items-center gap-3 group relative overflow-hidden"
                  >
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500" />
                    
                    {/* Icon */}
                    <div className="relative z-10 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                      {skill.icon}
                    </div>
                    
                    {/* Name */}
                    <div className="text-center relative z-10">
                      <h4 className="font-semibold text-base group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}

        {/* Certifications */}
        <div className="h-12 md:h-20" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Award className="text-primary" size={40} />
              Professional Certifications
            </h3>
            <p className="text-gray-400 text-lg">
              Industry-recognized certifications validating expertise in cloud and networking
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card-hover p-10 relative group overflow-hidden border-2 border-primary/20"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                
                {/* AWS Certified Badge */}
                {cert.validationNumber && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-primary/10 border border-primary/30 rounded-full px-3 py-1 text-xs font-mono text-primary">
                      AWS CERTIFIED
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-gray-300 text-lg font-medium mb-2">{cert.issuer}</p>
                      {cert.recipientName && (
                        <p className="text-primary text-base font-medium mb-1">Awarded to: {cert.recipientName}</p>
                      )}
                      <p className="text-gray-500 text-sm font-mono">{cert.issueDate}</p>
                      {cert.expirationDate && (
                        <p className="text-gray-500 text-sm font-mono">Valid until {cert.expirationDate}</p>
                      )}
                    </div>
                  </div>

                  {/* Verification Details */}
                  {cert.validationNumber && (
                    <div className="space-y-3 pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-2 text-primary text-sm font-mono">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Verified Credential
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg border border-gray-700">
                        <p className="text-xs text-gray-400 mb-1 font-mono">VALIDATION NUMBER:</p>
                        <p className="text-xs text-gray-300 font-mono break-all">{cert.validationNumber}</p>
                      </div>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Verify Certificate
                        </a>
                      )}
                    </div>
                  )}

                  {/* Simple verified badge for CCNA */}
                  {!cert.validationNumber && (
                    <div className="flex items-center gap-2 text-primary text-sm font-mono pt-4 border-t border-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Verified Credential
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

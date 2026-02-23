
export const profileData = {
  meta: {
    siteTitleVariants: [
      "Anweshan Roy Chowdhury | Engineering Leader Building Scalable AI Products",
      "Anweshan Roy Chowdhury | Solution Architect & AI-Driven Innovator",
      "Anweshan Roy Chowdhury | Award-Winning Full-Stack Engineering Leader",
      "Anweshan Roy Chowdhury | Building High-Performance Cloud & Mobile Platforms"
    ],
    defaultTitle: "Anweshan Roy Chowdhury | Engineering Leader & Solution Architect",
    description:
      "Engineering Team Lead & Solution Architect specializing in AI-driven systems, scalable cloud platforms, and high-performance mobile applications.",
    keywords: [
      "Engineering Leader",
      "Solution Architect",
      "AI Development",
      "React Native",
      "Full Stack",
      "Cloud Architecture"
    ],
    themeColor: "#4afa0e" 
  },

  header: {
    name: "Anweshan Roy Chowdhury",
    titles: [
      "Engineering Team Lead",
      "Solution Architect",
      "AI-Driven Product Builder",
      "Full-Stack Innovator"
    ],
    location: "Kolkata, West Bengal, India",
    availability: "Open to consulting & architecture engagements",
    contact: {
      email: "anweshanrc15@gmail.com",
      linkedin: "https://linkedin.com/in/anweshandev",
      github: "https://github.com/anweshandev",
      portfolio: "anweshan.dev"
    },
    socialProof: {
      yearsExperience: 3,
      teamsLed: 5,
      appsDelivered: 20,
      cloudCostOptimizations: "Up to 800%"
    }
  },

  summary: {
    short:
      "Engineering leader specializing in AI-driven applications and scalable full-stack systems.",
    long:
      "Engineering Team Lead & Solution Architect at Pravaah Consulting, leading cross-functional teams to design and deliver high-performance mobile and cloud applications. Expert in AI/ML integration, scalable architecture, and aligning technical strategy with business outcomes. Passionate about building resilient systems, mentoring engineers, and transforming complex requirements into elegant, user-focused digital products.",
    leadershipStyle: [
      "Servant leadership",
      "Data-driven decision making",
      "Mentorship & team empowerment",
      "Outcome-focused delivery"
    ]
  },

  coreCompetencies: [
    "Solution Architecture",
    "AI/ML Integration",
    "Scalable Cloud Systems",
    "Mobile App Architecture",
    "Technical Leadership",
    "Performance Optimization",
    "DevOps & Infrastructure",
    "Cross-Functional Collaboration"
  ],

  skills: {
    frontend: ["React", "TypeScript", "Vite", "TailwindCSS", "Three.js"],
    mobile: ["React Native", "Flutter"],
    backend: ["Node.js", "Python", "Java", "Kotlin"],
    cloud: ["Firebase", "Google Cloud", "Kubernetes", "Docker"],
    ai: ["OpenAI", "Gemini", "Groq", "Vector Databases", "Deepgram"],
    systems: ["BLE", "IoT", "PostgreSQL", "Knex"],
    languages: ["C++", "Objective-C"]
  },

  experience: [
    {
      role: "Engineering Team Lead",
      company: "Pravaah Consulting Inc.",
      location: "Kolkata, India",
      period: "July 2025 - Present",
      highlights: [
        "Lead engineering teams delivering scalable mobile & cloud platforms",
        "Define architecture standards and AI integration strategies",
        "Align technical roadmaps with business objectives",
        "Mentor engineers and cultivate high-performance culture"
      ],
      achievements: [
        "Reduced infrastructure costs through cloud optimization",
        "Improved deployment speed via containerization & CI/CD",
        "Standardized architecture patterns across teams"
      ],
      technologies: ["React Native", "Google Cloud", "Kubernetes", "AI/ML"],
      keyProjects: [
        {
            name: "Octopus SaaS",
            website: "https://www.octopussaas.com",
            tagline: "Enterprise Routing & Waste Management Platform",
            starProject: true,
            category: "SaaS Platform",
            partnership: "Developed in partnership with a leading U.S. waste management company",
            period: "August 2024 - Present",
            overview: "Octopus SaaS is a cutting-edge enterprise software platform transforming how medical and solid waste management companies operate. Designed for transporters, treatment facilities, brokers, subcontractors, and generators, the platform streamlines routing, automates compliance, and enhances operational efficiency through powerful digital tools and real-time visibility.",
            problemStatement: "The client relied on an outdated routing system that failed to meet modern operational demands, resulting in inefficiencies, poor visibility, and increased operational costs.",
            solution: "Architected and delivered a scalable, cloud-agnostic SaaS platform that optimizes waste collection, improves route planning, enhances customer engagement, and provides complete operational control across multiple user roles.",
            platformModules: ["OCTO Field App", "OCTO Market", "OCTO Connect", "OCTO Waste Processing"],
            portals: ["Administrator Portal", "Transporter Portal", "Generator Portal", "Subcontractor Portal", "Driver Mobile App (React Native)"],
            architectureHighlights: ["Multi-tenant SaaS architecture", "Cloud-agnostic infrastructure provisioned using Terraform", "Custom brand component system & UI guidelines", "Role-based access control across portals", "Optimized routing & operational workflows", "Fully scalable Firebase backend"],
            techStack: {
                frontend: ["React", "TailwindCSS", "Custom Design System"],
                mobile: ["React Native"],
                backend: ["Firebase"],
                infrastructure: ["Terraform"],
                deployment: ["Cloud-platform compatible infrastructure"]
            },
            leadershipImpact: ["Led end-to-end architecture and product direction", "Aligned engineering execution with U.S. enterprise client requirements", "Standardized brand and UI component guidelines", "Built a scalable routing optimization framework", "Improved operational efficiency and reduced legacy system dependency"],
            businessImpact: ["Modernized routing operations for a U.S.-based waste management enterprise", "Enhanced compliance tracking & operational transparency", "Increased scalability and cross-platform compatibility", "Enabled digital transformation of traditional waste workflows"]
        },
        {
            name: "Bleu Capital Ticketing",
            tagline: "Event Management & Ticketing SaaS Platform",
            starProject: true,
            category: "SaaS Platform",
            website: null, 
            period: "2024 - Present",
            overview: "Bleu Capital Ticketing is a full-stack, end-to-end SaaS platform for event management, ticket creation, and real-time attendee operations. Designed to support event organizers, venues, and promoters, the platform enables seamless ticket sales, custom event pages, onsite scanning, and customer engagement across web and mobile ecosystems.",
            problemStatement: "Event organizers required a unified platform capable of handling event creation, ticket sales, onsite operations, and customer engagement without relying on fragmented third-party tools.",
            solution: "Architected and delivered a scalable, white-label ticketing platform featuring a custom event builder, integrated purchasing flows, mobile apps, and real-time scanning infrastructure to streamline event operations from creation to check-in.",
            platformComponents: ["Admin Dashboard & Event Builder", "Customer Ticket Purchasing Portal", "Customer Mobile App", "Ticket Scanning App", "Onsite Box Office Tools"],
            keyCapabilities: ["Custom event page builder embedded within admin panel", "Dynamic ticket pricing & tier management", "QR-based ticket delivery and scanning", "Real-time attendee tracking & validation", "Affiliate & referral ticketing workflows", "One-page optimized checkout for CRO", "Conditional logic in ticket selection & add-ons", "Role-based access for event staff and organizers"],
            architectureHighlights: ["White-label SaaS with embedded event page builder", "Real-time ticket validation & scanning system", "Modular admin architecture supporting multiple event types", "Cross-platform mobile scanning app for onsite operations", "Highly optimized checkout experience for conversion rate optimization"],
            techStack: {
                frontend: ["React", "TypeScript", "Vite", "TailwindCSS"],
                mobile: ["React Native"],
                backend: ["Firebase"],
                realtime: ["Firestore realtime sync"],
                integrations: ["Payment gateways", "QR/Barcode systems"]
            },
            leadershipImpact: ["Led end-to-end architecture and SaaS product design", "Defined modular system supporting multiple event workflows", "Implemented real-time scanning & validation infrastructure", "Optimized purchase flow for higher conversion rates", "Enabled white-label deployment for enterprise clients"],
            businessImpact: ["Reduced dependency on third-party ticketing platforms", "Enabled organizers to manage events from creation to onsite operations", "Improved attendee experience with seamless mobile ticketing", "Provided scalable infrastructure for multi-event operations"]
        }
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Pravaah Consulting Inc.",
      location: "Kolkata, India",
      period: "July 2024 - July 2025",
      highlights: [
        "Led end-to-end mobile application development",
        "Conducted technical interviews & shaped hiring processes",
        "Established engineering best practices"
      ],
      technologies: ["React", "TypeScript", "Firebase", "AI/ML"],
      keyProjects: [
        {
          name: "Bookaible.ai",
          tagline: "AI Children's Book Creator",
          impact: [
            "Reduced cloud costs by 800%",
            "Enabled personalized content generation at scale"
          ],
          tech: [
            "React",
            "Vite",
            "TailwindCSS",
            "Firebase",
            "Gemini",
            "Stability AI",
            "OpenAI"
          ],
          details:
            "AI-powered platform generating personalized children's books with optimized cloud infrastructure and scalable content pipelines."
        },
        {
          name: "ChiroScript.ai",
          tagline: "AI Medical Scribe",
          impact: [
            "Automated clinical documentation",
            "Improved practitioner efficiency"
          ],
          tech: [
            "React",
            "TypeScript",
            "Deepgram",
            "GPT-4",
            "Vector DB",
            "Groq"
          ],
          details:
            "Context-aware transcription platform converting patient visits into structured SOAP notes using vector embeddings."
        },
        {
            name: "Aurora AG Mobile App",
            tagline: "Agricultural Transport Management Mobile Platform",
            category: "Enterprise Mobile Application",
            company: "Aurora Software Inc.",
            period: "2024",
            role: "Senior Software Engineer",
            overview: "Aurora AG Mobile App is a modernized cross-platform driver application integrated with the Nova Platform, designed to support agricultural transportation workflows including grain logistics, load planning, and contract matching. Built on 40+ years of Aurora Software’s TMS expertise, the app enables real-time operational coordination between dispatchers and drivers.",
            modernizationScope: "Rebuilt and modernized a legacy mobile application using Expo and React Native to ensure compatibility with modern iOS and Android devices while maintaining backward compatibility for existing operational environments.",
            industryContext: "Aurora Software has over 40 years of experience in Transportation Management Systems (TMS), serving sectors including Air Freight, LTL, Intermodal, Truckload, Brokerage, Bulk, and Agricultural transport.",
            keyOperations: ["Grain logistics coordination", "Feed mill supply chain support", "Farm pickup scheduling", "Customer delivery coordination", "Contract matching & load tracking"],
            coreFeatures: ["Real-time load visibility for drivers", "Mobile order dispatch from Nova Platform", "Advanced load planning integration", "Contract matching for purchase & sales", "Custom filters & sorting for delivery schedules"],
            architectureHighlights: ["Legacy system modernization with backward compatibility", "Seamless integration with Nova TMS platform", "Cross-platform mobile deployment via Expo", "Optimized performance for low-connectivity rural environments", "Driver-centric UX for operational efficiency"],
            techStack: {
                mobile: ["React Native", "Expo"],
                integration: ["Nova Platform APIs"],
                platforms: ["iOS", "Android"],
                compatibility: ["Backward compatibility for legacy workflows"]
            },
            engineeringImpact: ["Extended lifecycle of legacy TMS mobile infrastructure", "Enabled modern device compatibility without disrupting operations", "Improved driver adoption through enhanced UX", "Reduced maintenance complexity via unified cross-platform codebase"],
            businessImpact: ["Improved efficiency in agricultural transport operations", "Enhanced visibility across grain logistics workflows", "Reduced operational friction between dispatchers and drivers", "Future-proofed mobile infrastructure for Aurora AG clients"]
        },
        {
            name: "Aurora TMS Mobile App",
            tagline: "Freight & Logistics Transport Management Mobile Platform",
            category: "Enterprise Mobile Application",
            company: "Aurora Software Inc.",
            period: "2024",
            role: "Senior Software Engineer",
            overview: "Aurora TMS Mobile App is a modern cross-platform driver application integrated with the Nova Platform, supporting freight operations including Less Than Truckload (LTL), Full Truckload (FTL), intermodal, and brokerage workflows. The app enables real-time communication between dispatchers and drivers, improving visibility and operational efficiency across logistics networks.",
            modernizationScope: "Modernized a legacy mobile application using Expo and React Native to support modern iOS and Android devices while preserving backward compatibility for mission-critical logistics operations.",
            industryContext: "Aurora Software has over 40 years of experience delivering Transportation Management Systems (TMS) for industries including Air Freight, LTL, Intermodal, Truckload, Brokerage, and Bulk transportation.",
            supportedOperations: ["Less Than Truckload (LTL)", "Full Truckload (FTL / TL)", "Intermodal shipments", "Brokerage & third-party logistics", "Bulk transportation workflows"],
            coreFeatures: ["Real-time manifest updates", "Trailer & truck assignment tracking", "Load status updates and confirmations", "Dispatch-to-driver communication", "Offline-capable workflows for low-connectivity environments"],
            dataManagement: ["Manifest information synchronization", "Trailer utilization tracking", "Truck & driver assignment data", "Load lifecycle updates"],
            architectureHighlights: ["Legacy TMS mobile modernization with backward compatibility", "Seamless integration with Nova Platform", "Cross-platform mobile deployment via Expo", "Optimized for real-world logistics environments", "Resilient sync strategies for intermittent connectivity"],
            techStack: {
                mobile: ["React Native", "Expo"],
                integration: ["Nova Platform APIs"],
                platforms: ["iOS", "Android"],
                dataSync: ["Offline-first strategies", "Incremental sync"]
            },
            engineeringImpact: ["Unified legacy mobile systems into a modern cross-platform app", "Improved driver efficiency through streamlined workflows", "Reduced operational delays via real-time updates", "Enhanced system reliability in low-connectivity environments"],
            businessImpact: ["Improved freight visibility across LTL and FTL operations", "Reduced dispatch-to-driver communication gaps", "Increased operational efficiency across logistics networks", "Future-proofed mobile infrastructure for Aurora TMS clients"]
        }
      ]
    },
    {
      role: "Software Engineer",
      company: "Pravaah Consulting Inc.",
      location: "Kolkata & Bengaluru, India",
      period: "March 2023 - July 2024",
      highlights: [
        "Architected scalable full-stack applications",
        "Enforced code quality & CI pipelines",
        "Collaborated across UX, QA, and DevOps"
      ],
      technologies: ["React", "Node.js", "Flutter", "Firebase"],
      keyProjects: [
        {
            name: "MyBioMtrx",
            tagline: "IoT Healthcare & Body Composition Analytics Platform",
            category: "IoT Healthcare Platform",
            period: "2023 - 2024",
            overview: "MyBioMtrx is an IoT healthcare platform designed to capture, analyze, and visualize comprehensive body composition metrics from BLE-enabled medical devices. The platform integrates proprietary manufacturer SDKs via custom native bridges to overcome limitations in Flutter BLE protocols, enabling accurate, real-time health monitoring and advanced body analysis.",
            problemStatement: "The target BLE medical device required a proprietary SDK and could not be reliably accessed using Flutter's high-level BLE libraries, creating a critical integration barrier for real-time health data acquisition.",
            solution: "Engineered custom native bridges in Android (Java) and iOS (Swift) to integrate the manufacturer SDK directly into the Flutter application, enabling stable device connectivity, real-time vitals streaming, and cross-platform compatibility.",
            coreCapabilities: ["Real-time streaming of 50+ body composition metrics", "Cross-platform BLE connectivity via native SDK integration", "Body analysis dashboards & health insights", "Automated report generation & export", "User profile–based health calculations"],
            healthMetricsCaptured: ["Weight (kg/lb)", "BMI", "Body Fat %", "Muscle Mass", "Water %", "Bone Mass", "Protein %", "BMR", "Visceral Fat", "Skeletal Muscle", "Subcutaneous Fat", "Segmental Body Composition"],
            architectureHighlights: ["Custom Flutter-native bridges for BLE SDK integration", "EventChannel-based real-time vitals streaming", "Offline-safe data handling for unstable BLE connections", "Cross-platform device compatibility (iOS & Android)", "Structured health data pipeline for reporting & analytics"],
            engineeringChallenges: ["Flutter BLE libraries unable to connect to proprietary device", "Required native SDK integration for stable communication", "Handling asynchronous BLE streams across platforms", "Maintaining backward compatibility with legacy device firmware", "Ensuring data accuracy for medical-grade metrics"],
            nativeBridgeImplementation: {
                android: ["Java-based BluetoothBridge using MethodChannel & EventChannel", "Direct integration with manufacturer SDK", "Thread-safe scanning and connection lifecycle management"],
                ios: ["Swift BluetoothBridge with ICDeviceManager SDK", "Stream handlers for scan & weight data", "Robust connection handling and event propagation"],
                flutter: ["Real-time UI updates via EventChannel streams", "Health report rendering & export", "User profile–driven metric calculations"]
            },
            techStack: {
                mobile: ["Flutter"],
                native: ["Java", "Swift", "Objective-C"],
                connectivity: ["BLE", "Manufacturer SDK"],
                backend: ["Firebase"],
                realtime: ["EventChannel streams"]
            },
            engineeringImpact: ["Enabled reliable BLE connectivity where Flutter BLE failed", "Unified cross-platform health data acquisition", "Reduced device integration friction for future hardware", "Improved user trust through accurate medical data reporting"],
            businessImpact: ["Enabled advanced body composition analytics for users", "Improved device interoperability across mobile platforms", "Delivered exportable health reports for clinical or personal use", "Enhanced user engagement through actionable health insights"]
        }
      ]
    },
  ],

  education: [
    {
      degree: "Master of Science - Computer Science",
      school: "University of Calcutta",
      period: "2021 - 2023",
      focus: ["Distributed Systems", "AI", "Software Engineering"]
    },
    {
      degree: "Bachelor of Science - Computer Science",
      school: "University of Calcutta",
      period: "2018 - 2021"
    }
  ],

  certifications: [
    "Google Play Academy",
    "Wix Velo"
  ],

  honorsAndAwards: [
    {
      title: "Ownership and Accountability Award",
      year: 2025,
      impact: "Recognized for exceptional responsibility and delivery ownership."
    },
    {
      title: "Client Focused Delivery Award",
      year: 2023,
      impact: "Acknowledged for client-centric solutions and communication excellence."
    },
    {
      title: "Certificate of Excellence",
      year: 2023,
      impact: "Honored for consistently exceeding customer expectations."
    },
    {
      title: "Best Team Player Award",
      year: 2023,
      impact: "Recognized for collaboration and positive team contributions."
    }
  ],

  testimonials: [
    {
      quote:
        "Anweshan consistently delivers high-quality solutions and elevates the entire team's performance.",
      author: "HR Department",
      company: "Pravaah Consulting"
    }
  ],

  interests: [
    "AI & Emerging Technologies",
    "System Design",
    "Mentoring Engineers",
    "Open Source Contribution",
    "Product Strategy"
  ],

  dynamicContexts: {
    certificates: {
      title: "Award-Winning Engineering Leader",
      theme: "achievement"
    },
    leadership: {
      title: "Engineering Leader & Team Builder",
      theme: "leadership"
    },
    architecture: {
      title: "Scalable Systems & Cloud Architect",
      theme: "technical"
    },
    portfolio: {
      title: "Builder of High-Performance Digital Products",
      theme: "product"
    }
  }
};

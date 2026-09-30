// Portfolio Data Configuration - Update this file to modify your portfolio content
interface PersonalInfo {
  name: string
  title: string
  tagline: string
  email: string
  location: string
  bio: string
  profileImage: string
}

interface SocialLinks {
  github: string
  linkedin: string
  facebook: string
}

interface HeroCtaLink {
  text: string
  link: string
}

interface HeroSection {
  headline: string
  subheadline: string
  cta: {
    primary: HeroCtaLink
    secondary: HeroCtaLink
  }
  stats: Array<{
    value: string
    label: string
  }>
}

interface ExperienceItem {
  id: number
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  logo?: string
  description: string
  achievements: string[]
  technologies: string[]
}

interface EducationItem {
  id: number
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  gpa: string
  achievements: string[]
}

interface ProjectItem {
  id: number
  title: string
  description: string
  image: string
  liveUrl: string
  githubUrl: string
  technologies: string[]
  highlights: string[]
  category: string
}

interface SkillItem {
  name: string
  icon: string
  proficiency: number
}

interface SkillGroups {
  languages: SkillItem[]
  backend: SkillItem[]
  databases: SkillItem[]
  cloud: SkillItem[]
  security: SkillItem[]
  messaging: SkillItem[]
  tools: SkillItem[]
}

interface CertificationItem {
  id: number
  name: string
  issuer: string
  date: string
  credentialId?: string
  logo?: string
}

interface AchievementItem {
  id: number
  title: string
  description: string
  date: string
  type: string
  organization: string
}

interface ContactInfo {
  preferredMethod: string
  availability: string
  timezone: string
  responseTime: string
}

interface PortfolioData {
  personal: PersonalInfo
  socials: SocialLinks
  hero: HeroSection
  experience: ExperienceItem[]
  education: EducationItem[]
  projects: ProjectItem[]
  skills: SkillGroups
  certifications: CertificationItem[]
  achievements: AchievementItem[]
  contact: ContactInfo
}

export const portfolioData: PortfolioData = {
  // Personal Information
  personal: {
    name: " Puspita Nandi",
    title: "Backend Developer",
    tagline: "Building scalable systems that power the next generation of technology",
    email: "puspita.official08@gmail.com",
    location: "Dhaka, Narayanganj, Bangladesh",
    //phone: "123-456-7890",
    bio: " I am a CSE student learning Web and Backend Development. Currently, I am working with Python, FastAPI, MySQL, HTML, CSS, and JavaScript. I enjoy building small projects, learning new technologies, and improving my programming skills every day.",
    profileImage: "/profile.jpg", // Place your image in public folder
  },

  // Social Media & Professional Links
  socials: {
    github: "https://github.com/puspitapuja19",
    linkedin: "https://www.linkedin.com/in/puspita-nandi-8383ba370?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    //leetcode: "https://leetcode.com/yourusername",
    facebook: "https://www.facebook.com/share/1SJ2NLV4gs/",
  },

  // Hero Section
  hero: {
    headline: "Engineering Excellence at Scale",
    subheadline: "Transforming complex problems into elegant solutions for fintech and beyond.",
    cta: {
      primary: {
        text: "View My Work",
        link: "#projects"
      },
      secondary: {
        text: "Download Resume",
        link: "/resume.pdf" // Place your resume in public folder
      }
    },
    stats: [
      { value: "1+", label: "Years Experience" },
      { value: "5+", label: "Projects Delivered" },
      //{ value: "99.99%", label: "Uptime SLA" },
      //{ value: "$10B+", label: "Daily Transactions" }
    ]
  },

  // Experience
  experience: [
    /*{
      id: 1,
      company: "Meta (Facebook)",
      position: "Senior Backend Engineer",
      location: "Menlo Park, CA",
      startDate: "2022",
      endDate: "Present",
      logo: "/logos/meta.png", // Add company logos to public/logos/
      description: "Leading backend infrastructure for ML-powered recommendation systems serving 3B+ users.",
      achievements: [
        "Architected distributed caching layer reducing API latency by 60%",
        "Led migration to microservices handling 500K+ RPS",
        "Implemented ML pipeline processing 10TB daily data",
        "Mentored team of 5 engineers on system design best practices"
      ],
      technologies: ["Python", "Go", "Kubernetes", "PyTorch", "Redis", "Kafka"]
    },
    {
      id: 2,
      company: "Goldman Sachs",
      position: "Backend Developer | Quantitative Technology",
      location: "New York, NY",
      startDate: "2020",
      endDate: "2022",
      logo: "/logos/gs.png",
      description: "Built low-latency trading systems for algorithmic execution platform.",
      achievements: [
        "Reduced trade execution latency to sub-millisecond",
        "Implemented real-time risk management system",
        "Built secure APIs for $5B+ daily trading volume",
        "Achieved SOC2 and PCI-DSS compliance for payment systems"
      ],
      technologies: ["Java", "C++", "Spring Boot", "MongoDB", "RabbitMQ", "Docker"]
    },
    {
      id: 3,
      company: "Amazon Web Services",
      position: "Software Development Engineer II",
      location: "Seattle, WA",
      startDate: "2018",
      endDate: "2020",
      logo: "/logos/aws.png",
      description: "Developed cloud infrastructure services for AWS compute platform.",
      achievements: [
        "Built autoscaling service handling 1M+ EC2 instances",
        "Designed fault-tolerant distributed system with 99.99% SLA",
        "Reduced infrastructure costs by $2M annually",
        "Published 2 patents on cloud resource optimization"
      ],
      technologies: ["Python", "TypeScript", "DynamoDB", "Lambda", "CDK", "ECS"]
    },
    {
      id: 4,
      company: "Microsoft",
      position: "Software Engineer",
      location: "Redmond, WA",
      startDate: "2016",
      endDate: "2018",
      logo: "/logos/microsoft.png",
      description: "Contributed to Azure security and identity management platform.",
      achievements: [
        "Implemented OAuth 2.0 authentication for Azure AD",
        "Built threat detection ML models with 95% accuracy",
        "Reduced security incident response time by 40%",
        "Led security audits achieving ISO 27001 certification"
      ],
      technologies: ["C#", ".NET Core", "Azure", "SQL Server", "Redis", "Terraform"]
    }*/
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "Daffodil Institute of IT",
      degree: "Bachelor of Science in Computer Science and Engineering",
      field: "Computer Science (Specialization: Linear Algebra, Digital Logic Design, Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, Computer Architecture, )",
      location: "Dhaka, Narayanganj, Bangladesh",
      startDate: "2024",
      endDate: "2029",
      gpa: "3.20/4.0",
      achievements: [
        //"Research on distributed deep learning published in NeurIPS 2015",
        //"Teaching Assistant for CS229 (Machine Learning)",
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: 1,
      title: "ScamShield",
      description:
        "AI-powered scam detection app. Upload a screenshot of a suspicious SMS, email, or chat message, and it extracts the text with bilingual (English and Bengali) OCR, analyzes it with an LLM, and returns a risk score, red flags, and a plain-language explanation.",
      image: "/projects/scamshield.jpeg", // put a screenshot in public/projects/
      liveUrl: "https://scam-detection-ivory.vercel.app/", // add your Vercel link here
      githubUrl: "https://github.com/puspitapuja19/ScamShield",
      technologies: [
        "FastAPI",
        "React",
        "PostgreSQL",
        "EasyOCR",
        "Groq API",
        "Docker",
        "Tailwind CSS",
      ],
      highlights: [
        "Bilingual OCR (English and Bengali)",
        "JWT auth with bcrypt hashing",
        "Deployed on Render, Vercel, and Supabase",
      ],
      category: "Full-Stack",
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "Full-stack expense tracking app with secure user authentication, expense CRUD, category-wise spending summaries, and monthly budget tracking with visual progress indicators.",
      image: "/projects/expense-tracker.jpeg", // put a screenshot in public/projects/
      liveUrl: "", // add your Railway link here
      githubUrl: "https://github.com/puspitapuja19/Expense-tracker",
      technologies: [
        "FastAPI",
        "React",
        "MySQL",
        "SQLAlchemy",
        "Framer Motion",
      ],
      highlights: [
        "User-scoped data with protected routes",
        "Budget tracking per category",
        "MySQL in production, SQLite for local dev",
      ],
      category: "Full-Stack",
    },
    {
      id: 3,
      title: "ExamPulse",
      description:
        "A lighthearted, Banglish-flavored web app that estimates how ready you are for tomorrow's exam. Answer a few honest questions about last night's study habits and get an Aura Score out of 100 with a funny verdict.",
      image: "/projects/exampulse.jpeg",
      liveUrl: "https://exampluse.netlify.app/",
      githubUrl: "https://github.com/puspitapuja19/ExamPulse",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Live slider feedback and 5 verdict tiers",
        "Aura Score logic with penalty-based scoring",
        "Zero dependencies, deployed on Netlify",
      ],
      category: "Frontend",
    },
    {
      id: 4,
      title: "CalcMate",
      description:
        "A clean, beginner-friendly desktop calculator built with pure Python and Tkinter. It handles core arithmetic with a modern dark interface and a compact fixed-size window, organized in a single object-oriented Calculator class.",
      image: "/projects/calcmate.jpeg",
      liveUrl: "",
      githubUrl: "https://github.com/puspitapuja19/ClacMate",
      technologies: ["Python", "Tkinter", "OOP"],
      highlights: [
        "Object-oriented design with a Calculator class",
        "Custom dark UI with a 400x600 fixed layout",
        "Zero dependencies, standard library only",
      ],
      category: "Desktop",
    },
    {
      id: 5,
      title: "Bug Reporting & Classification Tool",
      description:
        "ML-powered bug triage assistant. Describe a bug in plain English and a TF-IDF and Logistic Regression model classifies it as UI, Backend, Database, Performance, or Security with a confidence score. Paired with a secure FastAPI bug-tracking backend.",
      image: "/projects/bug-classifier.jpeg",
      liveUrl: "",
      githubUrl: "https://github.com/puspitapuja19/Bug-Reporting-Classification-Tool",
      technologies: [
        "Python",
        "Flask",
        "FastAPI",
        "scikit-learn",
        "MySQL",
        "Tailwind CSS",
      ],
      highlights: [
        "TF-IDF + Logistic Regression bug classifier",
        "JWT auth, rate limiting, and per-user data isolation",
        "Dark/light mode UI with prediction history",
      ],
      category: "AI/ML",
    },
    /*{
      id: 6,
      title: "Real-Time Analytics Platform",
      description: "Stream processing platform for real-time analytics. Processes 1TB/hour with complex event processing and time-series analysis.",
      image: "/projects/analytics.jpg",
      liveUrl: "https://demo-analytics.example.com",
      githubUrl: "https://github.com/yourusername/analytics-platform",
      technologies: ["Scala", "Spark", "Flink", "Cassandra", "Grafana"],
      highlights: [
        "1TB/hour throughput",
        "Complex CEP",
        "Sub-second queries"
      ],
      category: "Big Data"
    }
  ],*/
  ],

  // Skills (organized by category)
  skills: {
    languages: [
      { name: "Python", icon: "🐍", proficiency: 95 },
      { name: "JavaScript", icon: "🔷", proficiency: 90 },
      //{ name: "Java", icon: "☕", proficiency: 90 },
      { name: "C++", icon: "⚡", proficiency: 85 },
      { name: "TypeScript", icon: "📘", proficiency: 90 },
      { name: "C", icon: "🦀", proficiency: 80 },
      // { name: "Scala", icon: "🔴", proficiency: 75 },
      { name: "SQL", icon: "🗄️", proficiency: 95 }
    ],
    backend: [
      { name: "Django", icon: "🎸", proficiency: 95 },
      { name: "FastAPI", icon: "⚡", proficiency: 95 },
      { name: "Express.js", icon: "🍃", proficiency: 90 },
      { name: "Node.js", icon: "🟢", proficiency: 90 },
      //{ name: "gRPC", icon: "📡", proficiency: 85 },
      { name: "GraphQL", icon: "📊", proficiency: 85 },
      //{ name: "Microservices", icon: "🔧", proficiency: 95 },
      { name: "REST APIs", icon: "🌐", proficiency: 95 }
    ],
    databases: [
      { name: "PostgreSQL", icon: "🐘", proficiency: 95 },
      { name: "MySQL", icon: "🍃", proficiency: 90 },
      //{ name: "Redis", icon: "🔴", proficiency: 95 },
      //{ name: "Cassandra", icon: "💫", proficiency: 85 },
      //{ name: "DynamoDB", icon: "⚡", proficiency: 90 },
      //{ name: "Elasticsearch", icon: "🔍", proficiency: 85 },
      //{ name: "TimescaleDB", icon: "⏰", proficiency: 80 },
      //{ name: "Neo4j", icon: "🕸️", proficiency: 75 }
    ],
    
    cloud: [
      { name: "AWS", icon: "☁️", proficiency: 95 },
      { name: "Azure", icon: "🔷", proficiency: 85 },
      { name: "GCP", icon: "🌥️", proficiency: 85 },
      //{ name: "Kubernetes", icon: "☸️", proficiency: 95 },
      { name: "Docker", icon: "🐳", proficiency: 95 },
      //{ name: "Terraform", icon: "🏗️", proficiency: 90 },
      //{ name: "Serverless", icon: "λ", proficiency: 85 },
      //{ name: "CloudFormation", icon: "📚", proficiency: 85 }
    ],
    security: [
      { name: "OAuth/JWT", icon: "🔐", proficiency: 95 },
      { name: "Encryption", icon: "🔒", proficiency: 90 },
      //{ name: "Penetration Testing", icon: "🎯", proficiency: 85 },
      { name: "OWASP", icon: "🛡️", proficiency: 90 },
      //{ name: "Zero Trust", icon: "🚫", proficiency: 85 },
      //{ name: "SIEM", icon: "👁️", proficiency: 80 },
      //{ name: "HashiCorp Vault", icon: "🔑", proficiency: 85 },
      //{ name: "Security Audits", icon: "📋", proficiency: 90 }
    ],
    messaging: [
      { name: "Kafka", icon: "📮", proficiency: 95 },
      { name: "RabbitMQ", icon: "🐰", proficiency: 90 },
      //{ name: "Redis Pub/Sub", icon: "📡", proficiency: 90 },
      //{ name: "AWS SQS/SNS", icon: "📬", proficiency: 90 },
      //{ name: "NATS", icon: "✉️", proficiency: 80 },
      //{ name: "Pulsar", icon: "🌟", proficiency: 75 }
    ],
    tools: [
      { name: "Git", icon: "🔀", proficiency: 95 },
      { name: "GitHub", icon: "🐧", proficiency: 95 },
      { name: "CI/CD", icon: "🔄", proficiency: 90 },
      //{ name: "Grafana", icon: "📊", proficiency: 90 },
      { name: "Postman", icon: "📈", proficiency: 90 },
      //{ name: "Jaeger", icon: "🔍", proficiency: 85 },
      //{ name: "DataDog", icon: "🐕", proficiency: 85 },
      //{ name: "Splunk", icon: "📊", proficiency: 80 }
    ]
  },

  // Certifications
  certifications: [
    {
      id: 1,
      name: "Legacy Responsive Web Design V8",
      issuer: "freeCodeCamp",
      date: "April 2026",
      credentialId: "fcc-b154a204-def5-4580-bfbe-1ce3f743cc2e",
      logo: "/certs/freecodecamp.png",
    },
    {
      id: 2,
      name: "Basics of SQL Statements & Indexes",
      issuer: "UniAthena (Cambridge International Qualifications, UK)",
      date: "May 2026",
      credentialId: "6305-0554-6579",
      logo: "/certs/uniathena.png",
    },
    {
       id: 3,
      name: "AI Security & Governance",
      issuer: "Securiti",
      date: "2026", // replace with the real month and year
      credentialId: "14B045EFA-14B043A41-144E041A2",
      logo: "/certs/securiti.png",
    },
    {
       id: 4,
      name: "Python from Zero-to-Hero (Beginner Level)",
      issuer: "Udemy",
      date: "December 2025",
      credentialId: "UC-1a949867-9570-4d45-b50b-aa44e4926095",
      logo: "/certs/udemy.png",
    },
    {
      id: 5,
      name: "Business Analytics with Excel",
      issuer: "Simplilearn SkillUP (Microsoft)",
      date: "March 2026",
      credentialId: "9984914",
      logo: "/certs/simplilearn.png",
    }
  ],

  // Achievements & Awards
  achievements: [
    /*{
      id: 1,
      title: "Patent: Distributed System Optimization",
      description: "US Patent for novel approach to resource optimization in distributed systems",
      date: "2023",
      type: "Patent",
      organization: "USPTO"
    },
    {
      id: 2,
      title: "Best Paper Award - NeurIPS",
      description: "Research on efficient deep learning in distributed environments",
      date: "2022",
      type: "Research",
      organization: "NeurIPS Conference"
    },
    {
      id: 3,
      title: "Top 1% LeetCode Global Ranking",
      description: "Solved 1000+ algorithmic problems, Contest rating: 2400+",
      date: "2023",
      type: "Achievement",
      organization: "LeetCode"
    },
    {
      id: 4,
      title: "Engineering Excellence Award",
      description: "Recognized for outstanding technical leadership and innovation",
      date: "2022",
      type: "Award",
      organization: "Meta"
    },
    {
      id: 5,
      title: "Open Source Contributor",
      description: "Core contributor to Kubernetes, 500+ merged PRs",
      date: "2021-Present",
      type: "Open Source",
      organization: "CNCF"
    }*/
  ],

  // Contact preferences
  contact: {
    preferredMethod: "puspita.official08@gmail.com",
    availability: "Available for internships & entry-level backend roles (Dhaka, Narayanganj, Bangladesh)",
    timezone: "BST (UTC+6)",
    responseTime: "Within 24 hours"
  }
};

export default portfolioData;

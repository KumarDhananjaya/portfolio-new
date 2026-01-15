export const PERSONAL_INFO = {
    name: "Kumar Dhananjaya",
    title: "Associate Software Engineer",
    subtitle: "Full-Stack Web & Mobile Developer | Cloud Security Enthusiast",
    location: "Karnataka, India",
    email: "kumar62.shivu@gmail.com",
    phone: "+91-9743086802",
    tagline: "Building scalable distributed systems with a focus on Zero-Trust security.",
    bio: `Hey there! I'm Kumar Dhananjaya, an Associate Software Engineer passionate about building scalable, high-concurrency applications and secure cloud-native experiences. With expertise in the MERN stack, React Native, and DevSecOps, I focus on turning complex technical challenges into robust, production-ready solutions.

I've architected high-availability platforms on Azure, engineered distributed systems capable of handling 100k+ RPS, and implemented comprehensive Zero-Trust security pipelines. I'm deeply interested in distributed systems, CRDTs for real-time collaboration, and the intersection of DevOps and Security.

When I'm not architecting systems, you'll find me exploring new tech stacks (currently delving into Golang and NestJS), participating in national-level hackathons (2nd prize at HPE SWARM-IT!), or sharing my journey and insights through my technical blog at kdexplorations.hashnode.dev.`,
};

export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/kumardhananjaya/",
    github: "https://github.com/KumarDhananjaya",
    twitter: "https://twitter.com/SKumarDhananjay",
    instagram: "https://www.instagram.com/kumar.dhananjay_/",
    hashnode: "https://kdexplorations.hashnode.dev/",
};

export const SKILLS = {
    languages: ["JavaScript", "TypeScript", "Java", "Python", "Golang", "Rust", "C/C++", "Dart", "SQL"],
    frontend: ["React", "Next.js", "React Native", "Flutter", "Tailwind CSS", "Framer Motion", "Three.js", "Redux"],
    backend: ["Node.js", "Express", "NestJS", "Go-Gin", "Spring Boot", "Kafka", "Redis (Lua scripting)", "WebSockets", "gRPC"],
    devops: ["Azure", "Docker", "Kubernetes", "NGINX", "CI/CD", "GitHub Actions", "Terraform", "Cloudflare", "OPA Gatekeeper", "HashiCorp Vault"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
};

export const EXPERIENCE = [
    {
        company: "Examic EdTech",
        position: "Associate Software Engineer",
        location: "Mysuru, India",
        duration: "Jul 2024 – Present",
        highlights: [
            "Architected a high-integrity Online Assessment Platform on Azure using WebSockets for <150ms real-time proctoring.",
            "Engineered an internal CMS and end-to-end e-commerce engine, streamlining content and payment workflows.",
            "Built high-performance React Native apps (IoT & Learning) with BLE integration and real-time cloud sync.",
            "Implemented Zero-Downtime (ZDT) pipelines and NGINX reverse proxies for secure system ingress.",
            "Optimized MongoDB schemas and APIs, reducing query latency by 25% for 1000+ concurrent users."
        ],
        technologies: ["Azure", "React Native", "Node.js", "MongoDB", "WebSockets", "Docker", "BLE IoT", "NGINX"],
    },
    {
        company: "Kandra Digital Pvt. Ltd.",
        position: "Full-Stack Developer Intern",
        location: "Bengaluru, India",
        duration: "Feb 2024 – Jul 2024",
        highlights: [
            "Developed full-stack MERN applications with scalable backends and admin dashboards.",
            "Dockerized services for deployment on DigitalOcean, streamlining local and production environments.",
            "Leveraged Next.js App Router for optimized SEO and server-side performance."
        ],
        technologies: ["Next.js", "React", "Node.js", "MongoDB", "Docker", "DigitalOcean"],
    },
];

export const PROJECTS = [
    {
        title: "Flux-Gate: Flash Sale Engine",
        description: "High-concurrency distributed flash sale engine handling 100k+ RPS with zero overselling. Utilizes Redis Lua scripts for atomicity and Kafka for event sourcing.",
        technologies: ["Golang", "Redis", "Kafka", "PostgreSQL", "Docker", "gRPC"],
        github: "https://github.com/KumarDhananjaya/Flux-Gate-Distributed-High-Concurrency-Flash-Sale-Engine",
        featured: true,
    },
    {
        title: "Auth-Secure: Identity Platform",
        description: "Production-grade authentication system with multi-provider OAuth, token rotation, and suspicious login detection. Built with security-first principles and GDPR compliance.",
        technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Jose", "React Hook Form"],
        github: "https://github.com/KumarDhananjaya/auth-secure-pro",
        featured: true,
    },
    {
        title: "The Ironclad Pipeline",
        description: "Zero-Trust software supply chain implementing shift-left security with secret scanning, SAST, and container auditing using Trivy and OPA.",
        technologies: ["Gitleaks", "SonarQube", "Trivy", "Sigstore", "Jenkins", "Falco", "OPA"],
        github: "https://github.com/KumarDhananjaya/The-Ironclad-Pipeline-A-Zero-Trust-Software-Supply-Chain",
        featured: true,
    },
    {
        title: "Real-Time Collaborative Editor",
        description: "Multi-user text editor using CRDTs (Yjs) for conflict-free synchronization, featuring real-time cursors and document versioning.",
        technologies: ["React", "WebSockets", "Node.js", "CRDTs", "Redis", "Yjs"],
        github: "https://github.com/KumarDhananjaya/Real-Time-Collaborative-Text-Editor",
        featured: true,
    },
    {
        title: "Splendly UI & Analytics",
        description: "A premium UI kit and financial analytics dashboard with complex SVG charts, haptic-like feedback, and custom design tokens.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Recharts", "Lucide"],
        github: "https://github.com/KumarDhananjaya/splendly-ui",
        featured: true,
    },
    {
        title: "ConnectX - Social Ecosystem",
        description: "Full-stack social media platform with real-time notifications and private messaging, optimized for high performance and mobile response.",
        technologies: ["React", "Node.js", "MongoDB", "WebSockets", "Redux", "Express"],
        github: "https://github.com/KumarDhananjaya/ConnectX",
        featured: false,
    },
];

export const ACHIEVEMENTS = [
    "President (2022-23) & VP (2021-22), Clusteroids Club - Led workshops, grew membership by 20%",
    "President, ACES Club - Organized 5+ events including industry talks (Jan-Jun 2023)",
    "Lead Organizer, 24-hour Inter-college Hackathon with 100+ participants",
    "1st Place, Inter-College Web Dev Competition - Built Travel Web App in 3 hours",
    "2nd Place, HPE SWARM-IT National Hackathon - Developed Rat-Maze with Dijkstra's algorithm solution",
    "Best Idea Award, GND National Technical Symposium - Proposed Research Paper for Wildlife Conservation",
];

export const EDUCATION = {
    institution: "Maharaja Institute of Technology Thandavapura",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Mysuru, India",
    duration: "2019 – 2023",
    cgpa: "8.61/10",
};

export const PERSONAL_INFO = {
    name: "Kumar Dhananjaya",
    title: "Associate Software Engineer",
    subtitle: "Full-Stack Web & Mobile Developer | Cloud Security Enthusiast",
    location: "Karnataka, India",
    email: "kumar62.shivu@gmail.com",
    phone: "+91-9743086802",
    resume: "/resume.pdf",
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
    frontend: ["React", "Next.js", "React Native", "Tailwind CSS", "Framer Motion", "Three.js", "Redux"],
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
            "Architected a low-latency Online Assessment Platform on Azure, leveraging WebSockets to achieve <150ms real-time proctoring and state synchronization.",
            "Engineered an enterprise-grade internal CMS and e-commerce engine, automating exam packaging and payment workflows to reduce operational overhead.",
            "Pioneered a hardware-to-cloud bridge in React Native for 'IRIS' IoT, implementing secure BLE pairing and real-time device monitoring.",
            "Hardened infrastructure security and availability by implementing NGINX reverse proxies and Zero-Downtime (ZDT) deployment strategies.",
            "Refactored MongoDB schemas and API logic to support 1000+ concurrent users, resulting in a 25% reduction in end-to-end query latency."
        ],
        technologies: ["React", "Next.js", "Node.js", "React Native", "MongoDB", "WebSockets", "Docker", "BLE IoT", "NGINX", "Azure"],
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
        title: "pulsetrace",
        description: "High-performance telemetry & error tracking platform designed for million-scale events. Featuring real-time anomaly detection and distributed tracing.",
        technologies: ["TypeScript", "Node.js", "ClickHouse", "Redis", "Kafka", "React"],
        github: "https://github.com/KumarDhananjaya/pulsetrace",
        featured: true,
    },
    {
        title: "Flux-Gate",
        description: "Distributed high-concurrency flash sale engine handling 100k+ RPS with zero overselling. Implements atomic inventory management and a virtual waiting room.",
        technologies: ["TypeScript", "Node.js", "Redis (Lua)", "Kafka", "PostgreSQL", "Docker"],
        github: "https://github.com/KumarDhananjaya/Flux-Gate-Distributed-High-Concurrency-Flash-Sale-Engine",
        featured: true,
    },
    {
        title: "The Ironclad Pipeline",
        description: "Zero-Trust software supply chain implementing shift-left security with secret scanning, SAST, and runtime protection using Trivy and OPA.",
        technologies: ["Terraform", "OPA", "Vault", "Trivy", "SonarQube", "Falco", "GitHub Actions"],
        github: "https://github.com/KumarDhananjaya/The-Ironclad-Pipeline-A-Zero-Trust-Software-Supply-Chain",
        featured: true,
    },
    {
        title: "Spendly",
        description: "Modern personal finance application with an offline-first experience, secure cloud sync, and advanced spending analytics built on a secure backend.",
        technologies: ["TypeScript", "React Native", "Supabase", "PostgreSQL", "Framer Motion"],
        github: "https://github.com/KumarDhananjaya/Spendly",
        featured: true,
    },
    {
        title: "Real-Time Collaborative Editor",
        description: "High-integrity multi-user text editor using CRDTs (Yjs) for conflict-free synchronization, featuring real-time cursors and document versioning.",
        technologies: ["TypeScript", "Yjs", "WebSockets", "Node.js", "Redis", "MongoDB"],
        github: "https://github.com/KumarDhananjaya/Real-Time-Collaborative-Text-Editor",
        featured: true,
    },
    {
        title: "zero-trust-api-platform",
        description: "Cloud-native API platform focused on secure communication using Zero-Trust principles, enforced through granular access control and policy-as-code.",
        technologies: ["NestJS", "OPA", "Kong", "Docker", "TypeScript"],
        github: "https://github.com/KumarDhananjaya/zero-trust-api-platform",
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

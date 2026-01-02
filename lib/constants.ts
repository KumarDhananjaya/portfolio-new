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
    languages: ["JavaScript", "TypeScript", "Java", "Python", "Golang", "C/C++", "Dart"],
    frontend: ["React", "Next.js", "React Native", "Flutter", "Redux", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "NestJS", "Spring Boot", "Kafka", "Redis (Lua scripting)", "WebSockets", "gRPC"],
    "DevOps & Security": ["Azure", "Docker", "Kubernetes", "NGINX", "CI/CD", "GitHub Actions", "Terraform", "OPA Gatekeeper", "HashiCorp Vault", "Trivy", "Falco"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
};

export const EXPERIENCE = [
    {
        company: "Examic EdTech",
        position: "Associate Software Engineer",
        location: "Mysuru, India",
        duration: "Jul 2024 – Present",
        highlights: [
            "Architected and deployed a high-integrity Online Assessment Platform with server-validated timers, session-based concurrency control, and auto-save to ensure data consistency during network failures.",
            "Engineered an internal CMS enabling non-technical teams to manage exam content, pricing, and packaging, reducing dependency on engineering for operations.",
            "Built an end-to-end e-commerce and payment engine integrated with the assessment system, handling complex workflows including coupon validation, reservations, and secure payment processing.",
            "Developed cross-platform mobile applications in React Native, including 'IRIS' smart fragrance IoT app with BLE device discovery, secure pairing, and real-time cloud sync, and a multilingual language learning app supporting French, Spanish, and Portuguese.",
            "Designed Azure-hosted REST APIs with JWT authentication and Role-Based Access Control (RBAC) for secure device registry management and command execution.",
            "Implemented a .NET Windows Service for secure, auditable local printing, bridging cloud commands to local hardware execution.",
            "Optimized MongoDB schemas and APIs to reduce latency by 25% and ensured scalable, low-latency (<150ms) real-time communication via WebSockets.",
            "Set up NGINX reverse proxies and automated CI/CD pipelines for zero-downtime deployments and secure system ingress."
        ],
        technologies: ["Azure", "React Native", "React", "Node.js", "Express", "MongoDB", "REST APIs", "WebSockets", "NGINX", ".NET", "BLE IoT"]
    },
    {
        company: "Kandra Digital Pvt. Ltd.",
        position: "Full-Stack Developer Intern",
        location: "Bengaluru, India",
        duration: "Feb 2024 – Jul 2024",
        highlights: [
            "Built full-stack MERN applications (GlobalTrans, Team Trip, Job Portal) with scalable backend, frontend, and admin panels",
            "Optimized deployments on DigitalOcean using Docker, ensuring reliable cloud infrastructure and CI/CD pipelines",
            "Enhanced server-side rendering and performance using Next.js for production-grade web applications",
        ],
        technologies: ["MERN Stack", "Docker", "DigitalOcean", "Next.js"],
    },
    {
        company: "CAIR-DRDO",
        position: "Software Developer Intern",
        location: "Bengaluru, India",
        duration: "Aug 2022 – Oct 2022",
        highlights: [
            "Developed and optimized a Java-based internal workflow application, achieving a 40% reduction in critical task completion times",
            "Spearheaded the successful deployment of the application across 5 key internal departments within DRDO, resulting in an 80% increase in user adoption rate",
            "Implemented a user-centric, responsive UI design based on iterative feedback, contributing to a 25% improvement in user satisfaction ratings",
        ],
        technologies: ["Java", "JSP", "HTML", "CSS", "JavaScript", "PostgreSQL", "REST APIs", "JWT"],
    },
];

export const PROJECTS = [
    {
        title: "Flux-Gate",
        description: "High-concurrency distributed flash sale engine handling 100k+ RPS with zero overselling. Utilizes Redis Lua scripts for atomicity and Kafka for asynchronous processing.",
        technologies: ["Node.js", "Redis", "Kafka", "PostgreSQL", "Distributed Systems"],
        github: "https://github.com/KumarDhananjaya/Flux-Gate-Distributed-High-Concurrency-Flash-Sale-Engine",
        featured: true,
    },
    {
        title: "Zero-Trust API Platform",
        description: "Cloud-native platform implementing OAuth2, RBAC/ABAC, and automated security scanning. Integrated with OPA Gatekeeper for policy enforcement and Trivy for container auditing.",
        technologies: ["Docker", "Kubernetes", "OPA", "NestJS", "PostgreSQL", "Vault"],
        github: "https://github.com/KumarDhananjaya/zero-trust-api-platform",
        featured: true,
    },
    {
        title: "The Ironclad Pipeline",
        description: "Zero-Trust software supply chain implementing shift-left security. Features secret scanning, SAST, container scanning, and image signing with Sigstore.",
        technologies: ["Gitleaks", "SonarQube", "Trivy", "Sigstore", "Jenkins", "Falco"],
        github: "https://github.com/KumarDhananjaya/The-Ironclad-Pipeline-A-Zero-Trust-Software-Supply-Chain",
        featured: true,
    },
    {
        title: "Real-Time Collaborative Editor",
        description: "Multi-user text editor using CRDTs (Yjs) for conflict-free synchronization. Features real-time cursors, presence indicators, and document versioning.",
        technologies: ["React", "WebSockets", "Node.js", "CRDTs", "Redis"],
        github: "https://github.com/KumarDhananjaya/Real-Time-Collaborative-Text-Editor",
        featured: true,
    },
    {
        title: "Clusteroids - College Management App",
        description: "Comprehensive mobile app for streamlining academic administrative tasks. Achieved high engagement within the college community with sub-second performance.",
        technologies: ["Flutter", "Dart", "Firebase"],
        github: "https://github.com/KumarDhananjaya/Clusteroids",
        featured: true,
    },
    {
        title: "ConnectX - Social Platform",
        description: "Full-stack social media implementing notifications, private messaging, and content feeds. Optimized for mobile responsiveness and performance.",
        technologies: ["MERN Stack", "WebSockets", "Redux", "JWT"],
        github: "https://github.com/KumarDhananjaya/ConnectX",
        featured: false,
    },
    {
        title: "Hospify - Hotel Management",
        description: "Enterprise-grade hotel operations system with role-based access control and real-time inventory management.",
        technologies: ["Spring Boot", "React", "PostgreSQL", "Docker"],
        github: "https://github.com/KumarDhananjaya/Hospify-Hotel-Operations-Management",
        featured: false,
    },
    {
        title: "Sorting Visualizer",
        description: "Interactive visualizer for various sorting algorithms (Bubble, Merge, Quick, etc.). Helps in understanding algorithmic complexity and pathfinding visually.",
        technologies: ["React", "TypeScript", "Algorithms", "CSS Animations"],
        github: "https://github.com/KumarDhananjaya/Sorting-Visualizer",
        featured: false,
    },
    {
        title: "MITT App - Official College App",
        description: "Launched the official college Android application, used by 300+ active users. Integrated real-time push notifications and student resource hub.",
        technologies: ["Java", "Android SDK", "Firebase", "Firestore", "JWT", "Push Notifications", "Material Design"],
        github: "#",
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

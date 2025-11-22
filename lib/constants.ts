export const PERSONAL_INFO = {
    name: "Kumar Dhananjaya",
    title: "Associate Software Engineer",
    subtitle: "Full-Stack Web & Mobile Developer",
    location: "Karnataka, India",
    email: "kumar62.shivu@gmail.com",
    phone: "+91-9743086802",
    tagline: "Code with purpose. Build with vision.",
    bio: `Hey there! I'm Kumar Dhananjaya, an Associate Software Engineer passionate about building scalable, real-time applications and mobile experiences. With expertise in the MERN stack, React Native, and DevOps, I love turning complex problems into elegant solutions.

I've architected high-availability platforms on Azure, developed cross-platform mobile apps, and led technical communities as President of Clusteroids and ACES clubs. When I'm not coding, you'll find me exploring new technologies, participating in hackathons (2nd prize at HPE SWARM-IT!), or sharing knowledge through my blog.

Let's build something awesome together! 🚀`,
};

export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/kumardhananjaya/",
    github: "https://github.com/KumarDhananjaya",
    twitter: "https://twitter.com/SKumarDhananjay",
    instagram: "https://www.instagram.com/kumar.dhananjay_/",
    hashnode: "https://kdexplorations.hashnode.dev/",
};

export const SKILLS = {
    languages: ["JavaScript", "TypeScript", "Java", "Python", "C/C++", "Golang"],
    frontend: ["React", "Next.js", "React Native", "Redux", "HTML", "CSS"],
    backend: ["Node.js", "Express", "Spring Boot", "MongoDB", "PostgreSQL", "MySQL", "REST APIs", "GraphQL", "WebSockets", "gRPC"],
    devops: ["Azure", "Docker", "Kubernetes", "NGINX", "CI/CD", "GitHub Actions", "Azure DevOps", "Git", "Terraform"],
};

export const EXPERIENCE = [
    {
        company: "Examic EdTech",
        position: "Associate Software Engineer",
        location: "Mysuru, India",
        duration: "Jul 2024 – Present",
        highlights: [
            "Architected and delivered a highly available, real-time assessment platform on Azure, leveraging WebSockets for low-latency (< 150ms) proctoring communication",
            "Secured system ingress using NGINX reverse proxies and implemented automated CI/CD pipelines enabling zero-downtime deployments",
            "Developed a secure education e-commerce portal handling 1000+ concurrent transactions; optimized MongoDB schemas to cut data latency by 25%",
            "Created cross-platform mobile apps (iOS/Android) using React Native, delivering responsive, mobile-first UIs",
        ],
        technologies: ["Azure", "React Native", "React", "Node.js", "Express", "MongoDB", "REST APIs", "WebSockets"],
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
        title: "Real-Time Chat Application",
        description: "Real-time chat application with WebSocket support for instant messaging, user presence indicators, and message history.",
        technologies: ["TypeScript", "gRPC", "React", "Golang", "PostgreSQL", "REST APIs", "JWT"],
        github: "https://github.com/KumarDhananjaya/realtime-chat",
        featured: false,
    },
    {
        title: "ConnectX - Real-Time Social Platform",
        description: "Engineered a full-stack social media platform implementing real-time features (chat, notifications) via WebSockets. Designed secure user authentication/authorization using JWT and optimized MongoDB indexing for efficient data retrieval under simulated load (100+ concurrent users).",
        technologies: ["Node.js", "React", "MongoDB", "WebSockets", "JWT", "Redux"],
        github: "https://github.com/KumarDhananjaya/ConnectX",
        featured: true,
    },
    {
        title: "Hotel Management System",
        description: "Full-stack hotel management application with comprehensive CRUD operations for guests, rooms, and bookings. Features role-based access control, real-time availability tracking, and responsive admin dashboard.",
        technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/KumarDhananjaya/hotel-management-system",
        featured: true,
    },
    {
        title: "Clusteroids - College Management App",
        description: "College management app that simplifies student, faculty, and course administration, enhancing departmental efficiency. Built with Flutter for cross-platform mobile experience.",
        technologies: ["Flutter", "Dart", "Firebase"],
        github: "https://github.com/KumarDhananjaya/Clusteroids",
        featured: true,
    },
    {
        title: "MITT App - Official College Mobile App",
        description: "Developed and launched the official college Android application, achieving adoption by 300+ active users. Implemented real-time push notifications (FCM) for critical updates and seamless data access, reducing information lag by 50%+.",
        technologies: ["Java", "Android SDK", "Firebase", "FCM"],
        github: "#",
        featured: true,
    },
    {
        title: "Sorting Visualizer",
        description: "Interactive sorting visualizer that demonstrates various sorting algorithms. Using React and TypeScript, it offers real-time animations and detailed explanations of each algorithm's working.",
        technologies: ["React", "TypeScript", "Algorithms"],
        github: "https://github.com/KumarDhananjaya/Sorting-Visualizer",
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

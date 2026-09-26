export const PERSONAL_INFO = {
    name: "Kumar Dhananjaya",
    title: "Associate Software Engineer",
    subtitle: "Full-Stack Web & Mobile Developer | Cloud Security Enthusiast",
    location: "Sydney, Australia",
    email: "kumar62.shivu@gmail.com",
    phone: "+91-9743086802",
    resume: "/resume.pdf",
    resume_view: "https://drive.google.com/file/d/1rnKQ_pGaJ9hX_rkVGyLCUQhICJkSPC-m/view?usp=sharing",
    tagline: "Building scalable distributed systems with a focus on Zero-Trust security.",
    bio: `Hey there! I'm Kumar Dhananjaya, a software engineer currently based in Sydney, Australia, pursuing my Master of Computer Science (Advanced Entry) at The University of Sydney. I specialize in building scalable, high-concurrency distributed applications, autonomous AI agent platforms, and secure cloud-native architectures.

With industry experience architecting low-latency platforms on Azure, engineering flash-sale engines capable of handling 100k+ RPS, and implementing Zero-Trust CI/CD pipelines, I bridge the gap between academic depth and production-grade engineering.

My current focus revolves around distributed consensus, multi-agent LLM systems, real-time collaboration with CRDTs, and high-throughput backend infrastructure.`,
};

export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/kumardhananjaya/",
    github: "https://github.com/KumarDhananjaya",
    twitter: "https://twitter.com/SKumarDhananjay",
    instagram: "https://www.instagram.com/kumar.dhananjay_/",
    hashnode: "https://kdexplorations.hashnode.dev/",
    medium: "https://medium.com/@kumar62.shivu",
};

export const SKILLS = {
    "Languages": ["TypeScript", "Python", "Golang", "JavaScript", "Java", "Rust", "C/C++", "SQL", "HCL"],
    "AI & Multi-Agent": ["LangChain", "Multi-Agent Orchestration", "Model Context Protocol (MCP)", "RAG Systems", "Vector Search", "FastAPI", "XGBoost", "Scikit-Learn"],
    "Backend & Distributed": ["Node.js", "Express", "NestJS", "Go-Gin", "WebSockets", "Kafka", "Redis (Lua scripting)", "gRPC", "CRDTs (Yjs)", "ClickHouse"],
    "DevSecOps & Cloud": ["Azure", "Docker", "Kubernetes", "Helm", "Terraform", "OPA Gatekeeper", "HashiCorp Vault", "Trivy", "Falco", "GitHub Actions", "NGINX", "Zero-Trust"],
    "Frontend & Mobile": ["React 19", "Next.js (App Router)", "React Native", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Vite", "Three.js"],
    "Databases & Storage": ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "Supabase", "MySQL", "Firebase"],
};

export const EXPERIENCE = [
    {
        company: "Examic EdTech",
        position: "Associate Software Engineer",
        location: "Mysuru, India",
        duration: "Jul 2024 – Feb 2026",
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
        title: "ResolveFlow",
        category: "AI & Multi-Agent",
        chapter: "Chapter I: Autonomous Agent Orchestration",
        metric: "Multi-Agent HITL",
        description: "Autonomous Multi-Agent Dispute Resolution & Reconciliation Engine with Enterprise Human-in-the-Loop (HITL) Governance. Features specialized agent coordination and consensus mechanisms.",
        technologies: ["Python", "LangChain", "FastAPI", "Multi-Agent", "AI/ML", "Redis"],
        github: "https://github.com/KumarDhananjaya/ResolveFlow",
        featured: true,
    },
    {
        title: "Flux-Gate",
        category: "Distributed Systems",
        chapter: "Chapter II: Concurrency Under Extreme Load",
        metric: "100k+ RPS",
        description: "Distributed high-concurrency flash sale engine handling 100k+ RPS with zero overselling. Implements atomic inventory management using Redis Lua scripts, virtual waiting rooms, and asynchronous order pipelines.",
        technologies: ["TypeScript", "Node.js", "Redis (Lua)", "Kafka", "PostgreSQL", "Docker"],
        github: "https://github.com/KumarDhananjaya/Flux-Gate-Distributed-High-Concurrency-Flash-Sale-Engine",
        featured: true,
    },
    {
        title: "FraudLens",
        category: "AI & Multi-Agent",
        chapter: "Chapter I: Autonomous Agent Orchestration",
        metric: "Real-time ML Inference",
        description: "End-to-end Machine Learning pipeline and interactive web dashboard for real-time credit card fraud detection using an XGBoost classifier, FastAPI backend, and React interface.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "XGBoost"],
        github: "https://github.com/KumarDhananjaya/Fraud-Detection-ML-System",
        link: "https://fraud-detection-ml-system-seven.vercel.app/",
        featured: true,
    },
    {
        title: "pulsetrace",
        category: "Distributed Systems",
        chapter: "Chapter II: Concurrency Under Extreme Load",
        metric: "Million-Scale Events",
        description: "High-performance telemetry & error tracking platform designed for million-scale events. Featuring real-time anomaly detection, distributed tracing, and high-throughput ingestion.",
        technologies: ["TypeScript", "Node.js", "ClickHouse", "Redis", "Kafka", "React"],
        github: "https://github.com/KumarDhananjaya/pulsetrace",
        featured: true,
    },
    {
        title: "The Ironclad Pipeline",
        category: "Cloud & Security",
        chapter: "Chapter III: Zero-Trust Supply Chain",
        metric: "Zero-Trust Enforcement",
        description: "Zero-Trust software supply chain implementing shift-left security with secret scanning, SAST, and runtime policy enforcement using OPA Gatekeeper, Trivy, SonarQube, and HashiCorp Vault.",
        technologies: ["Terraform", "OPA", "Vault", "Trivy", "SonarQube", "Falco", "GitHub Actions"],
        github: "https://github.com/KumarDhananjaya/The-Ironclad-Pipeline-A-Zero-Trust-Software-Supply-Chain",
        featured: true,
    },
    {
        title: "TalentIQ AI",
        category: "AI & Multi-Agent",
        chapter: "Chapter I: Autonomous Agent Orchestration",
        metric: "Recruitment Intelligence",
        description: "AI-powered recruitment intelligence platform for deep resume analysis, semantic candidate matching, skill gap detection, and automated technical interview generation.",
        technologies: ["Python", "FastAPI", "AI/ML", "NLP", "React", "TypeScript"],
        github: "https://github.com/KumarDhananjaya/talentiq-ai",
        featured: true,
    },
    {
        title: "Real-Time Collaborative Editor",
        category: "Distributed Systems",
        chapter: "Chapter II: Concurrency Under Extreme Load",
        metric: "CRDT Synchronization",
        description: "High-integrity multi-user text editor using CRDTs (Yjs) for conflict-free synchronization across distributed clients, featuring real-time cursors and document versioning.",
        technologies: ["TypeScript", "Yjs", "WebSockets", "Node.js", "Redis", "MongoDB"],
        github: "https://github.com/KumarDhananjaya/Real-Time-Collaborative-Text-Editor",
        featured: true,
    },
    {
        title: "Spendly",
        category: "Full-Stack & Mobile",
        chapter: "Chapter IV: User-Centric Products",
        metric: "Offline-First Sync",
        description: "Modern personal finance application with an offline-first experience, secure cloud sync, and advanced spending analytics built on a scalable backend.",
        technologies: ["TypeScript", "React Native", "Supabase", "PostgreSQL", "Framer Motion"],
        github: "https://github.com/KumarDhananjaya/Spendly",
        featured: true,
    },
    {
        title: "zero-trust-api-platform",
        category: "Cloud & Security",
        chapter: "Chapter III: Zero-Trust Supply Chain",
        metric: "Policy as Code",
        description: "Cloud-native API platform focused on secure communication using Zero-Trust principles, enforced through granular access control and policy-as-code.",
        technologies: ["NestJS", "OPA", "Kong", "Docker", "TypeScript"],
        github: "https://github.com/KumarDhananjaya/zero-trust-api-platform",
        featured: false,
    },
];

export const OPEN_SOURCE = [
    {
        project: "Komodor (Helm Dashboard)",
        repo: "komodorio/helm-dashboard",
        role: "Core Contributor",
        status: "Merged PRs",
        description: "Contributed critical bug fixes and features: resolved revision rollback bugs (#569), fixed upgrade recommendation algorithms (#577), added flags to disable slow version checks (#493), and documentation.",
        github: "https://github.com/komodorio/helm-dashboard",
        fork: "https://github.com/KumarDhananjaya/helm-dashboard",
        pullRequestsUrl: "https://github.com/komodorio/helm-dashboard/pulls?q=is:pr+author:KumarDhananjaya",
        language: "Go / React",
        stars: "2k+",
        prCount: "5+ PRs Merged",
    },
    {
        project: "Onyx (formerly Danswer)",
        repo: "onyx-dot-app/onyx",
        role: "Contributor",
        status: "PRs Submitted",
        description: "Contributed improvements to the open-source GenAI enterprise search platform: fixed source copy-paste counting bugs (#69), resolved assistant tools loading (#7207), and enhanced citation click reliability during LLM streaming (#5745).",
        github: "https://github.com/onyx-dot-app/onyx",
        fork: "https://github.com/KumarDhananjaya/onyx",
        pullRequestsUrl: "https://github.com/onyx-dot-app/onyx/pulls?q=is:pr+author:KumarDhananjaya",
        language: "Python / TypeScript",
        stars: "14k+",
        prCount: "3 PRs",
    },
    {
        project: "Atlassian MCP Server",
        repo: "atlassian/atlassian-mcp-server",
        role: "Contributor",
        status: "PR Submitted",
        description: "Official Model Context Protocol (MCP) server for Atlassian. Fixed skills value sanitization in jql_builder to allow comma-separated criteria for AI agent tool calling (#258).",
        github: "https://github.com/atlassian/atlassian-mcp-server",
        fork: "https://github.com/KumarDhananjaya/atlassian-mcp-server",
        pullRequestsUrl: "https://github.com/atlassian/atlassian-mcp-server/pulls?q=is:pr+author:KumarDhananjaya",
        language: "TypeScript",
        stars: "1k+",
        prCount: "PR #259",
    },
    {
        project: "Tiptap Editor",
        repo: "ueberdosis/tiptap",
        role: "Contributor",
        status: "PR Submitted",
        description: "The headless rich text editor framework for web artisans. Improved background color parsing compatibility for Safari in the highlight extension (#7379).",
        github: "https://github.com/ueberdosis/tiptap",
        fork: "https://github.com/KumarDhananjaya/tiptap",
        pullRequestsUrl: "https://github.com/ueberdosis/tiptap/pulls?q=is:pr+author:KumarDhananjaya",
        language: "TypeScript",
        stars: "28k+",
        prCount: "PR #7379",
    },
];

export const BLOGS = [
    {
        title: "Why Your RAG Pipeline Fails on Exact Matches: The Semantic Search Fallacy (And How to Fix It)",
        description: "An architectural deep-dive into the failure modes of pure vector embeddings in enterprise Retrieval-Augmented Generation, and how hybrid BM25 + dense retrieval solves exact match recall.",
        url: "https://medium.com/@kumar62.shivu/why-your-rag-pipeline-fails-on-exact-matches-the-semantic-search-fallacy-and-how-to-fix-it-7d90c49c368b",
        platform: "Medium",
        date: "Sep 2026",
        readTime: "6 min read",
        tags: ["AI/RAG", "Vector Search", "System Design"],
    },
    {
        title: "Architectural Deep Dive: Building a Zero-Overselling Flash Sale Engine at 100k+ RPS",
        description: "How to design a bulletproof inventory reservation system handling six-figure requests per second using Redis Lua scripting, token buckets, and Kafka-backed asynchronous persistence.",
        url: "https://medium.com/@kumar62.shivu/architectural-deep-dive-building-a-zero-overselling-flash-sale-engine-at-100k-rps-06888c777e2a",
        platform: "Medium",
        date: "Sep 2026",
        readTime: "8 min read",
        tags: ["Distributed Systems", "Redis", "Kafka"],
    },
    {
        title: "Event-Driven Microservices: What I Learned the Hard Way",
        description: "Practical engineering lessons from implementing event choreography: idempotency keys, dead letter queue triage, distributed saga rollbacks, and schema evolution.",
        url: "https://medium.com/@kumar62.shivu/event-driven-microservices-what-i-learned-the-hard-way-a6e23e52c0d8",
        platform: "Medium",
        date: "Dec 2025",
        readTime: "7 min read",
        tags: ["Microservices", "Event-Driven", "Architecture"],
    },
    {
        title: "Node.js API Optimization: Comparing Raw SQL Queries vs Prisma vs Sequelize",
        description: "Benchmarking query latency, memory allocation overhead, and connection pool saturation under heavy concurrent load across ORM layers.",
        url: "https://medium.com/@kumar62.shivu/node-js-api-optimization-comparing-raw-sql-queries-vs-prisma-vs-sequelize-87b221ff76ff",
        platform: "Medium",
        date: "Feb 2025",
        readTime: "5 min read",
        tags: ["Node.js", "Performance", "Databases"],
    },
    {
        title: "Optimizing Node.js Server and APIs for MongoDB with Mongoose",
        description: "Speed, memory efficiency, lean queries, proper compound indexing strategies, and connection pooling tuning for high-throughput Node.js microservices.",
        url: "https://medium.com/@kumar62.shivu/optimizing-node-js-server-and-apis-for-mongodb-with-mongoose-speed-and-memory-efficiency-2097f5ad268e",
        platform: "Medium",
        date: "Feb 2025",
        readTime: "5 min read",
        tags: ["MongoDB", "Mongoose", "Backend"],
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
    institution: "The University of Sydney",
    degree: "Master of Computer Science (Advanced Entry)",
    location: "Sydney, Australia",
    duration: "Current",
    focus: "Distributed Systems, Artificial Intelligence & Cloud Computing",
    highlights: [
        "Advanced Entry candidate specializing in large-scale Distributed Computing, Advanced AI/ML Systems, and Cloud Security.",
        "Conducting research and hands-on system architecture on high-concurrency event engines and autonomous multi-agent systems."
    ],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
};

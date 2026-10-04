export const profile = {
  name: "Ratnesh Ranve",
  roles: [
    "MERN Stack Developer",
    "Full-Stack Engineer",
    "React.js Developer",
    "Software Developer Intern",
  ],
  tagline:
    "I build scalable, production-grade web applications with the MERN stack — from REST APIs and admin dashboards to live client platforms used by thousands of real users.",
  summary:
    "A third-year B.Tech Software Engineering student with a focus on web development using the MERN stack. Skilled in building interactive and scalable applications, with a strong foundation in problem-solving and logical thinking. Known for being a collaborative team player and proactive leader, eager to learn from real-world projects and contribute fresh ideas.",
  location: "Indore, India",
  phone: "+91-9770133148",
  email: "ratneshranve@gmail.com",
  resumeFile: `${process.env.PUBLIC_URL}/assets/resume/Ratnesh-Ranve-Resume.pdf`,
  photo: `${process.env.PUBLIC_URL}/assets/images/myphoto.jpg`,
  socials: {
    github: "https://github.com/ratneshranve",
    linkedin: "https://www.linkedin.com/in/ratnesh-ranve",
    twitter: "https://x.com/RatneshR42111",
    instagram: "https://instagram.com/_ratnez_",
  },
  stats: [
    { label: "CGPA", value: "9.1", suffix: "/10" },
    { label: "Live Projects Shipped", value: "10", suffix: "+" },
    { label: "Orders Powered", value: "800", suffix: "+" },
    { label: "Revenue Driven", value: "2.8", suffix: "L+" },
  ],
};

export const experience = [
  {
    id: "appzeto",
    role: "Software Developer Intern",
    org: "Appzeto Pvt. Ltd.",
    period: "April 2026 – June 2026",
    points: [
      "Developed & maintained scalable MERN stack applications for multiple live client projects.",
      "Built REST APIs and integrated Google Maps, Razorpay, Cloudinary, Email/OTP, and other third-party services.",
      "Resolved production issues, optimized code, improved application performance, and enhanced user experience.",
      "Designed & implemented features including admin dashboards, subscriptions, order management, and delivery workflows.",
      "Managed deployments using Git, VPS, Linux, Nginx, and PM2, ensuring reliable production releases.",
      "Collaborated with clients and cross-functional teams to gather requirements, deliver custom solutions, and maintain live applications.",
    ],
  },
];

export const education = [
  {
    id: "btech",
    degree: "Bachelor of Technology (IT)",
    school: "IPS Academy, Institute of Engineering & Science (RGPV)",
    period: "2023 – Present",
    detail: "CGPA: 9.1 / 10",
  },
  {
    id: "xii",
    degree: "Senior Secondary (XII)",
    school: "St. Stephen's Convent School, Chhanera (M.P.)",
    period: "2023",
    detail: "Percentage: 89.6%",
  },
  {
    id: "x",
    degree: "Secondary (X)",
    school: "St. Stephen's Convent School, Chhanera (M.P.)",
    period: "2021",
    detail: "Percentage: 92.4%",
  },
];

export const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["MongoDB"],
  },
  {
    category: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Nginx",
      "PM2",
      "Linux",
      "VPS",
      "Cloudinary",
      "Razorpay",
      "Google Maps API",
    ],
  },
  {
    category: "Core",
    skills: ["DSA", "OOPs", "DBMS", "Operating Systems", "API Integration"],
  },
];

// Flat list used for the scrolling marquee strip
export const marqueeSkills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
  "Razorpay",
  "Google Maps API",
  "Cloudinary",
  "Git & GitHub",
  "Nginx",
  "PM2",
  "Linux",
  "VPS",
];

// Real Appzeto client platforms built/maintained during the internship.
export const clientProjects = [
  {
    id: "oyechotuu",
    name: "OyeChotuu",
    tagline: "Multi-Service Food Delivery Platform",
    description:
      "A scalable food delivery platform spanning Food, Grocery, Dairy, and Home Bakery modules — with subscription plans, order management, delivery workflows, an admin dashboard, and full payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Google Maps", "Cloudinary"],
    stats: [
      { label: "Play Store Downloads", value: "1,500+" },
      { label: "Live Users", value: "2,000+" },
      { label: "Orders Delivered", value: "800+" },
      { label: "Gross Revenue", value: "₹280K+" },
    ],
    image: `${process.env.PUBLIC_URL}/assets/images/project.png`,
    badge: "Private Client Project",
    featured: true,
    highlights: [
      "Food, Grocery, Dairy & Home Bakery modules in a single app",
      "Subscription plans with recurring order scheduling",
      "Admin dashboard for live order & delivery management",
      "Razorpay payments, Google Maps live tracking, Cloudinary media, OTP auth",
    ],
  },
  {
    id: "barodamart",
    name: "BarodaMart",
    tagline: "Quick-Commerce Grocery Delivery",
    description:
      "A quick-commerce grocery marketplace connecting customers with multiple local sellers — built end-to-end with product & inventory management, seller management, order processing, delivery workflow, admin dashboard, and online payments.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Razorpay", "Live Tracking"],
    stats: [
      { label: "Modules", value: "Seller + Admin" },
      { label: "Payments", value: "Razorpay" },
      { label: "Auth", value: "OTP-based" },
    ],
    image: `${process.env.PUBLIC_URL}/assets/images/skills.png`,
    badge: "Private Client Project",
    featured: true,
    highlights: [
      "Multi-seller marketplace with seller onboarding & inventory tools",
      "Real-time order processing and delivery workflow",
      "Live order tracking powered by location-based services",
      "OTP-based authentication and order notifications",
    ],
  },
  {
    id: "tuggo",
    name: "Tuggo",
    tagline: "Food Delivery Platform",
    description:
      "A full-stack food ordering and delivery platform built and maintained for a live Appzeto client, covering the customer app, order lifecycle, and admin operations.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    stats: [],
    image: `${process.env.PUBLIC_URL}/assets/images/project.png`,
    badge: "Private Client Project",
    featured: true,
    highlights: [
      "End-to-end customer ordering experience, cart to delivery",
      "Order lifecycle tracking for live operations",
      "Admin tooling for menu, order and delivery management",
    ],
  },
  {
    id: "yatradesk",
    name: "YatraDesk",
    tagline: "Travel Desk & Booking Management Platform",
    description:
      "An admin platform for managing travel bookings, trip modules, and driver operations (including bulk driver onboarding) — built with a consistent internal design system for reliable day-to-day operations.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Admin Dashboard"],
    stats: [],
    image: `${process.env.PUBLIC_URL}/assets/images/skills.png`,
    badge: "Private Client Project",
    featured: true,
    highlights: [
      "Centralized travel & trip booking management for the ops team",
      "Bulk driver onboarding via spreadsheet upload",
      "Consistent internal design system across every admin page",
    ],
  },
];

export const otherClientProjects = [
  {
    id: "zeppe",
    name: "Zeppe",
    tagline: "Fresh Grocery Delivery",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "bitecube",
    name: "BiteCube",
    tagline: "Food Delivery Platform",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "healway",
    name: "Healway",
    tagline: "Healthcare Platform",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "dardecomer",
    name: "Dar De Comer",
    tagline: "Food Ordering Platform",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

export const personalProjects = [
  {
    id: "lifesupport",
    name: "LifeSupport",
    tagline: "Blood & Organ Donation Platform",
    description:
      "A blood and organ donation platform connecting donors with recipients, with secure authentication, real-time request management, and a user-friendly UI.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: `${process.env.PUBLIC_URL}/assets/images/lifesupport.png`,
    links: [{ label: "GitHub", url: "https://github.com/ratneshranve/LifeSupport" }],
  },
  {
    id: "ghumophiro",
    name: "Ghumophiro",
    tagline: "AI-Powered Travel Planner",
    description:
      "An AI-powered travel planner that helps users discover destinations, personalize itineraries, and organize trips based on preferences.",
    tech: ["React", "AI", "Full Stack"],
    image: `${process.env.PUBLIC_URL}/assets/images/ghumophiro.png`,
    links: [{ label: "Live Site", url: "https://ghumophiro.vercel.app/" }],
  },
];

export const certifications = [
  {
    id: "java-iitb",
    name: "Java Training — Score 75%",
    org: "IIT Bombay",
    image: `${process.env.PUBLIC_URL}/assets/images/java.png`,
  },
  {
    id: "ypsilon",
    name: "Web Development Internship",
    org: "Ypsilon IT Solutions Pvt. Ltd.",
    image: `${process.env.PUBLIC_URL}/assets/images/internship.jpg`,
  },
];

export const certificationChips = [
  "AWS Solutions Architecture Job Simulation — Forage",
  "SnowHacks'26 Hackathon — Chameli Devi Group of Institutions, Indore",
  "AI Manthan'25 National Level Hackathon — Acropolis Institute of Technology & Research, Indore",
  "SSH'26 National Level Hackathon — Symbiosis University of Applied Sciences, Indore",
];

export const achievements = [
  "Participated in Smart India Hackathon (SIH 2025) — Internal Round, IPS Academy.",
  "Participated in Hacktoberfest 2025 organized by HotWax Commerce — open-source contributions.",
  "Participated in Science Exhibition 2024 at IPS Academy.",
  "Consistently taken up leadership roles as Team Leader in college projects and activities.",
];

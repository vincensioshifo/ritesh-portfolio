//import { label, title } from 'framer-motion/client';
import{
    Code2,
    //GraduationCap,
    //Briefcase,
    //Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';

import { FiGithub, FiLinkedin, FiTwitter,
 } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

//Here import all the assets like images
import Project1 from '../assets/images/project1.png';
import Project2 from '../assets/images/project2.png';
import Project3 from '../assets/images/project3.png';
import Project4 from '../assets/images/project4.png';
import Project5 from '../assets/images/project5.png';
import Project6 from '../assets/images/project6.png';
import Project7 from '../assets/images/project7.png';

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Building visually appealing and user-friendly interfaces using modern frontend technologies.",
        skills: [
            {name: "ReactJs", level:60, color: "bg-sky-500"},
            {name: "TypeScript", level:50, color: "bg-blue-700"},
            {name: "NextJs", level:50, color: "bg-gray-500"},
            {name: "TailwindCSS", level:60, color: "bg-cyan-500"},
            {name: "Framer Motion", level:50, color: "bg-pink-600"},
        ],
    },

    {
        title: "Backend",
        icon: Server,
        description: "Designing and implementing robust backend systems and APIs to support frontend applications.",
        skills: [
          {name: "Python (Django)", level:40, color: "bg-emerald-900"},
            {name: "NodeJs", level:40, color: "bg-green-500"},
            {name: "ExpressJs", level:20, color: "bg-gray-600"},
            {name: "Flask", level:35, color: "bg-rose-500"},
            {name: "Firebase", level:30, color: "bg-orange-500"},
        ],
    },

    {
        title: "Database",
        icon: Database,
        description: "Managing and optimizing databases to ensure efficient data storage and retrieval.",
        skills: [
            {name: "MongoDB", level:55, color: "bg-green-400"},
            {name: "MySQL", level:50, color: "bg-amber-400"},
            {name: "PostgreSQL", level:35, color: "bg-cyan-700"},
            {name: "SQLite", level:50, color: "bg-blue-800"},
            {name: "Redis", level:10, color: "bg-red-500"},
        ],
    },

    {
        title: "DevOps",    
        icon: Cloud,
        description: "Implementing CI/CD pipelines and managing cloud infrastructure for seamless deployment and scalability.",
        skills: [
            {name: "Docker", level:20, color: "bg-blue-400"},
            {name: "Vercel", level:70, color: "bg-slate-500"},
            {name: "AWS", level:25, color: "bg-amber-600"},
            {name: "GitHub Actions", level:55, color: "bg-blue-700"},
            {name: "Netlify", level:60, color: "bg-teal-500"},
        ],
    },

];

export const TECH_STACK = [
  "HTML5",
  "CSS3",
  "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "ReactJs",
    "NextJs",
    "NodeJs",
    "ExpressJs",
    "Bootstrap",
    "MongoDB",
    "Python",
    "Django",
    "Pandas",
    "Git",
    "Rest API",
    "Vite",
    "Framer Motion",
    "UI/UX",
    "ThreeJs",
    "VS Code",
    "Figma",
    "Photoshop",
    "Vercel",
    "PowerBI",
    "Tableau",

];

export const STATS = [
    {number: "50+", label: "Projects Completed" },
    {number: "30+", label: "Happy Clients" },
    {number: "5+", label: "Years of Experience" },
    {number: "10+", label: "Certifications Earned" },
    {number: "100%", label: "Satisfaction Rate" },
    {number: "24/7", label: "Support Availability" },
    {number: "20+", label: "Tech Stack Proficiency" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "TickVen",
    description:
      "TickVen is a cutting-edge stock market platform designed to empower traders and investors with real-time insights, intelligent alerts, and comprehensive analytics. ",
    image: Project1,
    tags: ["NextJs", "TailwindCSS", "MongoDB", "TypeScript", "Inngest"],
    liveUrl: "https://tickven.vercel.app/",
    githubUrl: "https://github.com/ritesh025",
    featured: true,
    category: "Full Stack",
  },

  {
    id: 2,
    title: "SkillTics",
    description:
      "SkillTics is an intelligent web application that analyzes resumes using AI to provide instant feedback, ATS scores, and actionable improvement suggestions — helping users stand out in every job application.",
    image: Project2,
    tags: ["React", "TailwindCSS", "PuterJs", "Zustand"],
    liveUrl: "https://skilltics-hazel.vercel.app/",
    githubUrl: "https://github.com/ritesh025",
    featured: true,
    category: "Web App",
  },

  {
    id: 3,
    title: "FlickFetch",
    description:
      "FlickFetch is a responsive and dynamic movie discovery web app built with HTML, Tailwind CSS, and JavaScript, powered by The Movie Database (TMDb) API.",
    image: Project3,
    tags: ["JavaScript", "TailwindCSS", "API"],
    liveUrl: "https://flick-fetch-ff.vercel.app/",
    githubUrl: "https://github.com/ritesh025",
    featured: true,
    category: "Frontend",
  },

  {
    id: 4,
    title: "TrAip",
    description:
      "Traip is a frontend web application designed to help users plan their trips with the assistance of artificial intelligence that generates personalized itineraries.",
    image: Project4,
    tags: ["NextJs", "TailwindCSS", "TypeScript"],
    liveUrl: "https://traip.vercel.app/",
    githubUrl: "https://github.com/ritesh025",
    featured: true,
    category: "Frontend",
  },

  {
    id: 5,
    title: "Weatherify",
    description:
      "Weatherify is a responsive, lightweight web application that fetches and displays real-time weather and 5-day forecasts.",
    image: Project5,
    tags: ["VanillaJs", "CSS3", "API"],
    liveUrl: "https://weatherify-gamma.vercel.app/",
    githubUrl: "https://github.com/ritesh025",
    featured: true,
    category: "Frontend",
  },

  {
    id: 6,
    title: "On-Pass",
    description:
      "On-Pass is a secure and user-friendly password manager that ensures safe password storage and retrieval while providing a sleek and modern UI.",
    image: Project6,
    tags: ["NextJs", "TypeScript", "Clerk", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/ritesh025",
    featured: false,
    category: "Web App",
  },

  {
    id: 7,
    title: "Portfolio",
    description:
      "A modern and interactive 3D portfolio website to showcase my projects and skills.",
    image: Project7,
    tags: ["ReactJs", "GSAP", "ThreeJs"],
    liveUrl: "https://ritesh-portfolio-navy.vercel.app/",
    githubUrl: "https://github.com/ritesh025",
    featured: true,
    category: "Full Stack",
  },
];

/* export const JOURNEY_STEPS = [
    {
        year: "2021",
        title: "Started My Coding Journey",
        description: "Began my journey into the world of web development, learning the basics of HTML, CSS, and JavaScript.",
        icon: Code2,
        color: "bg-blue-500",
    },

    {
        year: "2022",
        title: "Built First Full-Stack Project",
        description: "Developed and deployed my first full-stack web application, gaining hands-on experience with frontend and backend technologies.",
        icon: Rocket,
        color: "bg-green-500",
    }
] */

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience (UX)",
        description: "Crafting intuitive and engaging user experiences that leave a lasting impression.",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Tackling complex challenges with innovative solutions and a strategic mindset.",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Staying updated with the latest industry trends and technologies to enhance my skills.",
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Ensuring fast and efficient applications through meticulous optimization techniques.",
    },
];


export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/ritesh025/",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/riteshbafna25/",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://x.com/mrraja018",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:riteshbafna025@gmail.com",
    color: "hover:text-rose-500",
    bgColor: "hover:bg-rose-600/10",
  },
];


export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Chhattisgarh, India",
    },

    {
        icon: Mail,
        label: "Email",
        value: "riteshbafna025@gmail.com",
    },

    {
        icon: Phone,
        label: "Phone",
        value: "+91 700XXXXXXX",
    }
]

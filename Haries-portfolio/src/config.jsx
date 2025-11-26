import { FaPhone } from "react-icons/fa";
import React from 'react';
import { FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Haries",
        
    },
    social: {
        github: "harieshussain",
    },
    NAV_ITEMS: [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/certificates', label: 'Certificates' },
        { href: '/contact', label: 'Contact' }
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Next.js 15", level: "Advanced", hot: true },
                { name: "React", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
                { name: "Framer Motion", level: "Intermediate" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "MongoDB", level: "Advanced" },
                { name: "Express.js", level: "Advanced", hot: true }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Postman", level: "Advanced" },
                { name: "Photoshop", level: "Intermediate" },
                { name: "Git", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Frontend Developer",
            
            period: "2025",
            location: "Remote",
            description: "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
            responsibilities: [
                "Building responsive and interactive user interfaces using React and Next.js",
                "Implementing modern UI/UX designs with TailwindCSS and Framer Motion",
                "Optimizing application performance and ensuring cross-browser compatibility",
                "Collaborating with design and backend teams to deliver high-quality features"
            ],
            technologies: ["React", "Next.js", "TailwindCSS", "JavaScript", "Framer Motion", "TypeScript"]
        },
        {
            position: "Full Stack Developer",
            
            period: "2025",
            location: "Remote",
            description: "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
            responsibilities: [
                "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
                "Implemented RESTful APIs and integrated third-party services",
                "Built responsive user interfaces and optimized application performance",
                "Worked on database design and backend architecture"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "MERN Stack"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform with modern UI/UX, real-time inventory management, secure payment integration, and admin dashboard. Features include product catalog, shopping cart, order tracking, and user authentication.",
            image: "/projects/project-1.webp",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "TailwindCSS"],
            github: "https://github.com/HariesHussain",
            demo: "#"
        },
        {
            id: 2,
            title: "Social Media Dashboard",
            description: "A comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration. Built with real-time updates, data visualization, and responsive design for seamless user experience.",
            image: "/projects/project-2.webp",
            technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js", "Framer Motion"],
            github: "https://github.com/HariesHussain",
            demo: "#"
        },
        {
            id: 3,
            title: "Task Management App",
            description: "A collaborative task management application with real-time synchronization, drag-and-drop interface, team collaboration features, and project tracking. Includes kanban boards, time tracking, and notifications.",
            image: "/projects/project-3.webp",
            technologies: ["React", "Socket.io", "MongoDB", "Express", "WebSockets", "Material UI"],
            github: "https://github.com/HariesHussain",
            demo: "#"
        },
        {
            id: 4,
            title: "Weather Forecast App",
            description: "A beautiful weather application with location-based forecasts, interactive maps, weather alerts, and detailed meteorological data. Features include 7-day forecasts, hourly predictions, and weather history.",
            image: "/projects/project-4.webp",
            technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API", "TailwindCSS"],
            github: "https://github.com/HariesHussain",
            demo: "#"
        },
        {
            id: 5,
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website showcasing projects, skills, and experience. Features include animated components, dark mode, smooth scrolling, and optimized performance with SEO best practices.",
            image: "/projects/project-5.webp",
            technologies: ["React", "Framer Motion", "TailwindCSS", "Vite", "Three.js"],
            github: "https://github.com/HariesHussain",
            demo: "#"
        }
    ],
    certificates: [
    {
        title: "Web Development",
        issuer: "Eduskills",
        year: "2025",
        file: "/certificates/web-development.pdf"
    },
    {
        title: "Prompt Engineering",
        issuer: "simplilearn",
        year: "2025",
        file: "/certificates/prompt-engineering.pdf"
    },
    {
        title: "Machine Learning Using Python",
        issuer: "simplilearn",
        year: "2025",
        file: "/certificates/ml-python.pdf"
    },
    {
        title: "Generative AI",
        issuer: "simplilearn",
        year: "2025",
        file: "/certificates/generative-ai.pdf"
    }
],

    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@harieshussain",
            link: `https://github.com/HariesHussain`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "shaikharieshussain09@gmail.com",
            link: "mailto:shaikharieshussain09@gmail.com"
        },
        {
            icon: <FaPhone className="w-5 h-5" />,
            label: "Mobile",
            value: "9391175096",
            link: "tel:9391175096"
        },
         {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
} 
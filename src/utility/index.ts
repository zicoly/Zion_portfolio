import { v4 as uuidv4 } from 'uuid';

import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

import mock11 from '../assets/images/mock11.png';
import mock12 from '../assets/images/mock12.png';
import mock13 from '../assets/images/mock13.png';

export const projects = [
  {
    id: uuidv4(),
    name: "Onasis Links — Corporate Website",
    image: mock11,
    description:
      "Developed a responsive corporate website for Onasis Links Resources Limited, showcasing the company's services, products, and business information through a modern and professional digital experience.",
    url: "https://onasislinks.vercel.app",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "REST APIs",
    ],
  },

  {
    id: uuidv4(),
    name: "Onasis Operations Dashboard",
    image: mock12,
    description:
      "Built a full-stack B2B operations platform that centralizes task management, staff coordination, customer follow-up, quotations, newsletters, notifications, and business workflows.",
    message:
      "Internal company project. Selected features and screenshots are available for demonstration.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "Resend",
    ],
  },

  {
    id: uuidv4(),
    name: "GloroQ — Esports Tournament Platform",
    image: mock13,
    description:
      "Built a Next.js esports and gaming tournament platform featuring tournament creation, game categories, tournament hubs, communities, channels, tickets, two-way chat, polling, and authenticated user workflows.",
      url: "https://gloroq.com",
    techStack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "React Hook Form",
      "Zod",
      "REST APIs",
      "Authentication",
    ],
  },

  {
    id: uuidv4(),
    name: "Health Guardian",
    image: mock09,
    description:
      "Designed and developed a hospital management application for a hackathon, providing interfaces for healthcare and administrative workflows while integrating backend services and AI-powered functionality.",
    url: "https://hg-gamma.vercel.app",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "OpenAI",
    ],
  },

  {
    id: uuidv4(),
    name: "Chiquitas IMS",
    image: mock05,
    description:
      "Collaborated with a development team to build an inventory management system for a hair and wig business, replacing manual processes with a centralized digital solution for inventory, orders, and customer management.",
    message:
      "Details available upon request, as this is a client project.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Vite",
    ],
  },

  {
    id: uuidv4(),
    name: "QR-PAY",
    image: mock04,
    description:
      "Developed a QR-based payment application with account-detail extraction, payment workflows, and a streamlined transaction interface connected to backend services.",
    url: "https://qr-pay-zeta.vercel.app/home",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    sourceUrl: "https://github.com/zicoly/QR-PAY",
  },

  {
    id: uuidv4(),
    name: "E-BOOK Library",
    image: mock10,
    description:
      "Developed an interactive digital library integrating the Open Library API with real-time search, filtering, animations, and a responsive user interface for discovering books.",
    url: "https://zicoly-e-book-website.netlify.app",
    techStack: [
      "React",
      "Open Library API",
      "Swiper",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
    sourceUrl: "https://github.com/zicoly/E-BOOK-Library",
  },

  {
    id: uuidv4(),
    name: "Visioneers Elementary School",
    image: mock03,
    description:
      "Developed a responsive school website presenting programs, admissions, and contact information with a focus on accessibility, usability, and smooth navigation.",
    url: "https://visioneers-school.vercel.app/",
    techStack: [
      "React",
      "CSS",
      "Vite",
    ],
    sourceUrl:
      "https://github.com/zicoly/visioneers-elementary-school",
  },

  {
    id: uuidv4(),
    name: "Ecommerce Store",
    image: mock08,
    description:
      "Built a responsive e-commerce interface demonstrating product browsing, shopping workflows, reusable components, and modern frontend development practices.",
    url: "https://zicoly-ecommerce-site.vercel.app",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    sourceUrl:
      "https://github.com/zicoly/Ecommerce-site",
  },
];
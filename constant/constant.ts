import { b } from "framer-motion/client";
import { title } from "process";

export const NavLinks=[
    {
        id:1,
        url:'#',
        Label:'About'
    },

    {
        id:2,
        url:'#',
        Label:'Skills'
    },

    {
        id:3,
        url:'#',
        Label:'Projects'
    },

    {
        id:4,
        url:'#',
        Label:'Education'
    },

    {
        id:5,
        url:'#',
        Label:'Experience'
    },

    {
        id:6,
        url:'#',
        Label:'Interests'
    },

    {
        id:7,
        url:'#',
        Label:'Contact'
    },
]

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveLink: string | null; // Allow null for projects without a live link
  frontendLink: string;
  backendLink: string;
  githubLink?: string; // Optional main github link
  isFeatured: boolean;
};


export const projects = [
   {
    title: 'ResourceHub',
    description: 'A full-stack platform for managing organizational resources...',
    longDescription: 'Resource Hub is a comprehensive web application designed for efficient management of organizational resources, including meals, assets, and maintenance tasks. Built with modern React and TypeScript, it provides distinct interfaces and functionalities for Administrators, SuperAdmins, and regular Users with advanced role-based access control.',
    image: '/images/project1.png', // Your image path
    technologies: ['HTML', 'JWT', 'MUI', 'Tailwind CSS', 'JavaScript', 'React JS', 'MySQL', 'Ballerina'],
    liveLink: 'https://resourcehub-fivestackdev.vercel.app/',
    frontendLink: '#',
    backendLink: '#',
    githubLink: '', // Add a general GitHub link if available
    isFeatured: true,
  },
  {
  title: 'LUIGI',
    description: 'An AI-powered robotic pet car designed for emotional interaction, remote control, gesture recognition, and smart gameplay.',
    longDescription: 'LUIGI is an innovative AI-powered robotic pet car designed to provide emotional interaction and companionship. Equipped with advanced features such as remote control, gesture recognition, and smart gameplay, LUIGI offers a unique blend of fun and functionality. Users can interact with LUIGI through voice commands, play games, and enjoy its expressive features, making it an ideal companion for both work and leisure.',
    image: '/images/project4.png',
    technologies: ['RaspberryPi', 'ESP32', 'Python', 'AI Integration'],
    liveLink: '',
    frontendLink: '',
    backendLink: '',
    githubLink: '#',
    isFeatured: false,
},
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with Next.js and TypeScript.',
    longDescription: 'This portfolio website is built using Next.js and TypeScript to showcase my skills, projects, and experience as a developer. It features a modern design, responsive layout, and interactive elements to provide visitors with an engaging experience.',
    image: '/images/project5.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Icons'],
    liveLink: 'hhh',
    frontendLink: '',
    backendLink: '',
    githubLink: '#',
    isFeatured: false,
  },
  {
    title: 'ERP System',
    description: 'A productivity app to help users organize their tasks, set deadlines, and track their progress.',
    longDescription: 'The ERP System is a comprehensive enterprise resource planning application designed to streamline business processes and improve organizational efficiency. Built with a robust tech stack, it offers modules for inventory management, order processing, customer relationship management, and reporting.',
    image: '/images/project2.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: '',
    frontendLink: '',
    backendLink: '',
    githubLink: '#',
    isFeatured: false,
  },
  {
    title: 'Personalized Weather Dashboard',
    description: 'A simple app that fetches and displays weather data from a third-party API based on user\'s index number which calculated the geocoordinates.',
    longDescription: 'This Personalized Weather Dashboard is a user-centric application that provides real-time weather updates based on the user\'s unique index number. By calculating geocoordinates from the index number, the app fetches accurate weather data from a reliable third-party API, ensuring users receive relevant and timely information about their local weather conditions.',
    image: '/images/project4.png',
    technologies: ['Flutter', 'Dart', 'REST API'],
    liveLink: '',
    frontendLink: '',
    backendLink: '',
    githubLink: '#',
    isFeatured: false,
  },

];
export const NavLinks=[
    {
        id:1,
        url:'#about',
        Label:'About'
    },

    {
        id:2,
        url:'#skills',
        Label:'Skills'
    },

    {
        id:3,
        url:'#projects',
        Label:'Projects'
    },

    {
        id:4,
        url:'#education',
        Label:'Education'
    },

    {
        id:5,
        url:'#experience',
        Label:'Experience'
    },

    {
        id:6,
        url:'#interests',
        Label:'Interests'
    },

    {
        id:7,
        url:'#contact',
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
    description: 'A full-stack platform for managing organizational resources.',
    longDescription: 'Resource Hub is a comprehensive web application designed for efficient management of organizational resources, including meals, assets, and maintenance tasks. Built with modern React and TypeScript, it provides distinct interfaces and functionalities for Administrators, SuperAdmins, and regular Users with advanced role-based access control.',
    image: '/images/resourcehub.png', // Your image path
    technologies: ['HTML', 'JWT', 'MUI', 'Tailwind CSS', 'JavaScript', 'React JS', 'MySQL', 'Ballerina'],
    liveLink: 'https://resourcehub-fivestackdev.vercel.app/',
    frontendLink: 'https://github.com/FiveStackDev/Dev_ResourceHub_FrontEnd',
    backendLink: 'https://github.com/FiveStackDev/Dev_ResourceHub_BackEnd',
    githubLink: 'https://github.com/FiveStackDev', 
    isFeatured: true,
  },
  {
    title: 'FitBuddy',
    description: 'A fitness companion app that helps users discover workouts, track hydration, and stay motivated with daily tips.',
    longDescription: 'This fitness companion app features a Home dashboard, an Exercises tab with search & favorites, and a fully interactive hydration tracker synced across screens. It has integrated external APIs, including API‑Ninjas Exercise API for workout content and tips, and DummyJSON for authentication, with graceful fallbacks',
    image: '/images/fitbuddy.jpg',
    technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'React Navigation'],
    liveLink: '',
    frontendLink: '',
    backendLink: '',
    githubLink: 'https://github.com/PiuminiTishani/FitBuddy',
    isFeatured: false,
  },
  {
  title: 'LUIGI',
    description: 'An AI-powered robotic pet car designed for emotional interaction, remote control, gesture recognition, and smart gameplay.',
    longDescription: 'LUIGI is an innovative AI-powered robotic pet car designed to provide emotional interaction and companionship. Equipped with advanced features such as remote control, gesture recognition, and smart gameplay, LUIGI offers a unique blend of fun and functionality. Users can interact with LUIGI through voice commands, play games, and enjoy its expressive features, making it an ideal companion for both work and leisure.',
    image: '/images/luigi.jpg',
    technologies: ['RaspberryPi', 'ESP32', 'Python', 'AI Integration'],
    liveLink: 'https://www.linkedin.com/posts/piumini-tishani-209b70269_robotics-innovation-smarttech-activity-7314651275185246208-i4aQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHYjCkB2a0p6tCJfz2phTY5100xuklAX4w',
    frontendLink: '',
    backendLink: '',
    githubLink: 'https://github.com/PiuminiTishani/Luigi---Pet-Robot',
    isFeatured: false,
},
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with Next.js and TypeScript.',
    longDescription: 'This portfolio website is built using Next.js and TypeScript to showcase my skills, projects, and experience as a developer. It features a modern design, responsive layout, and interactive elements to provide visitors with an engaging experience.',
    image: '/images/portfolio.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Icons'],
    liveLink: 'https://piumini.me',
    frontendLink: '',
    backendLink: '',
    githubLink: '#',
    isFeatured: false,
  },
  {
    title: 'ERP System',
    description: 'A productivity app to help users organize their tasks, set deadlines, and track their progress.',
    longDescription: 'The ERP System is a comprehensive enterprise resource planning application designed to streamline business processes and improve organizational efficiency. Built with a robust tech stack, it offers modules for inventory management, order processing, customer relationship management, and reporting.',
    image: '/images/silekta.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: '',
    frontendLink: '',
    backendLink: '',
    githubLink: 'https://github.com/MIS-Silekta/silekta-frontend',
    isFeatured: false,
  },
  {
    title: 'Ceylon Coffee',
    description: 'A cutting-edge E-commerce website designed to elevate the online presence and revolutionize customer accessibility',
    longDescription: 'A fully responsive, coffee-themed website focused on creating dynamic and visually engaging web pages using modern front-end practices. It features an elegant UI inspired by café aesthetics, interactive components, smooth navigation, and mobile-friendly layouts to ensure an optimal user experience across all devices.',
    image: '/images/coffee.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveLink: 'https://ceyloncoffee.vercel.app/',
    frontendLink: '',
    backendLink: '',
    githubLink: 'https://github.com/th33k/Ceylon-Coffee',
    isFeatured: false,
  },
  {
    title: 'eBookNest (Ongoing)',
    description: 'a full-stack MERN application that allows users to plan, write, and export complete eBooks',
    longDescription: 'eBookNest is a full-stack MERN application that allows users to plan, write, and export complete eBooks with the help of Google Gemini AI. It features secure JWT authentication, AI-powered outline and chapter generation, a modern Markdown editor with live preview, drag-and-drop chapter management, customizable book details, and export options in PDF and DOCX formats, all within a clean, responsive Tailwind-styled interface.',
    image: '/images/ebook.jpg',
    technologies: ['React JS', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Google Gemini AI', 'JWT', 'Git'],
    liveLink: '',
    frontendLink: '',
    backendLink: '',
    githubLink: '#',
    isFeatured: false,
  },
  

];
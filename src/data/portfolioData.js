export const personalInfo = {
  name: "Muhammad Khizar Irfan",
  title: "Web Developer | MERN Stack",
  tagline: "Building modern web applications with React, Node.js, and MongoDB",
  location: "Karachi, Pakistan",
  bio: "IT graduate passionate about building clean, responsive web applications. Completed NAVTTC MERN Stack training with hands-on experience in full-stack development. Eager to contribute to innovative teams and grow as a developer.",
  profileImage: null,
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  whatsapp: "+923001234567",
  github: "https://github.com/yourusername",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Project One",
    description:
      "A full-stack web application that solves a real-world problem with a clean user interface and robust backend API.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "User authentication and authorization",
      "CRUD operations with REST API",
      "Responsive design for all devices",
      "Form validation and error handling",
    ],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one-demo.netlify.app",
    image: null,
  },
  {
    id: 2,
    name: "Project Two",
    description:
      "A MERN stack application built during NAVTTC training, demonstrating full-stack development skills and modern UI patterns.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Dynamic data fetching and state management",
      "Protected routes and session handling",
      "MongoDB database integration",
      "Deployed on cloud platform",
    ],
    githubUrl: "https://github.com/yourusername/project-two",
    liveUrl: "https://project-two-demo.netlify.app",
    image: null,
  },
];

export const experience = [
  {
    role: "MERN Stack Trainee",
    organization: "NAVTTC",
    period: "2024 – 2025",
    description: [
      "Completed intensive MERN stack training program with hands-on projects",
      "Built full-stack applications using React, Node.js, Express, and MongoDB",
      "Collaborated on team projects and learned industry best practices",
    ],
  },
  {
    role: "University Projects",
    organization: "IT Degree Program",
    period: "2020 – 2024",
    description: [
      "Developed web applications as part of coursework and final year project",
      "Applied software engineering principles and database design concepts",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Your University Name",
    period: "2020 – 2024",
    details: "Relevant coursework: Web Development, Database Systems, Software Engineering, Data Structures",
  },
  {
    degree: "MERN Stack Development",
    institution: "NAVTTC",
    period: "2024 – 2025",
    details: "Modules: React, Node.js, Express, MongoDB, REST APIs, Authentication, Deployment",
  },
];

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

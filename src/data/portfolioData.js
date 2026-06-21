export const personalInfo = {
  name: "Muhammad Khizar Irfan",
  navBrand: "Khizar",
  title: "Web Developer | MERN Stack",
  tagline: "Building modern web applications with React, Node.js, and MongoDB",
  location: "Gujrat, Pakistan",
  bio: "IT graduate from University of Gujrat passionate about building clean, responsive web applications. Completed NAVTTC MERN Stack training with hands-on experience in full-stack development. Eager to contribute to innovative teams and grow as a developer.",
  profileImage: null,
  email: "khizarsheikh480@gmail.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  whatsapp: "+923006296923",
  github: "https://github.com/khizar604",
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
    category: "MERN Stack",
    items: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "Responsive Design"],
  },
  {
    category: "Backend & APIs",
    items: ["REST API Development", "JWT Authentication", "Node.js"],
  },
  {
    category: "Other Technologies",
    items: ["Google Maps API", "Django (basics)", "Flutter (basics)"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Database Management"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "Canva", "VS Code", "Postman", "MS Office"],
  },
  {
    category: "Soft Skills",
    items: ["Teaching", "Team Leadership", "Problem Solving", "Communication"],
  },
];

export const projects = [
  {
    id: 1,
    name: "StyleHub",
    description:
      "A full-stack fashion e-commerce platform with Django admin panel for managing products, orders, brand submissions, and file uploads.",
    techStack: ["Django", "Python", "MySQL", "Bootstrap", "REST API"],
    features: [
      "Admin dashboard for products, orders, and brand submissions",
      "User authentication and authorization system",
      "Order management with order items tracking",
      "File upload and product catalog management",
    ],
    githubUrl: "https://github.com/khizar604/stylehub",
    image: "/stylehub-admin.png",
  },
  {
    id: 2,
    name: "MERN Stack Project",
    description:
      "A full-stack web application built during NAVTTC training, demonstrating MERN stack development with modern UI and REST API integration.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Dynamic data fetching and state management",
      "Protected routes and JWT authentication",
      "MongoDB database integration with Mongoose",
      "Responsive design for all devices",
    ],
    githubUrl: "https://github.com/khizar604",
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
    organization: "University of Gujrat",
    period: "2021 – 2025",
    description: [
      "Developed web applications as part of coursework and final year project",
      "Built StyleHub e-commerce platform with Django admin panel",
      "Applied software engineering principles and database design concepts",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Gujrat",
    period: "2021 – 2025",
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

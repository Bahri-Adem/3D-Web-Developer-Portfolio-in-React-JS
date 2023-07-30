import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  php,
  jakarta,
  smartphone,
  blog,
  adoptme,
  crud,
  medicalfile,
  movie,
  mysql,
  lpm,
  ipeim,
  enis,
  lordroid,
  quebec,
  microsoft,
  fcc,
  udemy,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Jakarta EE",
    icon: jakarta,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Baccalaureat in Mathematics",
    company_name: "Pioneer High School of Monastir (LPM)",
    icon: lpm,
    iconBg: "#E6DEDD",
    date: "2015 - 2019",
    points: [
      "Pioneer High School of Monastir is a prestigious educational institution in Tunisia, known for academic excellence.",
      "The school offers diverse programs and extracurricular activities to nurture students' talents and skills",
      "With dedicated educators, it fosters critical thinking and leadership development.",
      "The school provides a nurturing and enriching learning environment for students' holistic growth.",
    ],
  },
  {
    title: "Mathematics and Physics Preparatory Cycle",
    company_name: "Monastir Preparatory Engineering Institute (IPEIM)",
    icon: ipeim,
    iconBg: "#383E56",
    date: "2019 - 2021",
    points: [
      "Monastir Preparatory Engineering Institute (IPEIM) is a renowned educational institute in Tunisia, specializing in preparing students for engineering careers.",
      "With comprehensive courses and experienced faculty, IPEIM emphasizes rigorous training and practical skills development.",
      "The institute's state-of-the-art facilities create an ideal learning environment for students to excel in their engineering pursuits.",
    ],
  },
  {
    title: "Computer Engineer",
    company_name: "National Engineering School of Sfax (ENIS)",
    icon: enis,
    iconBg: "#383E56",
    date: "2021 - present",
    points: [
      "The National Engineering School of Sfax (ENIS) is a prestigious institution in Tunisia, renowned for engineering education and research",
      "With a qualified faculty and modern facilities, ENIS fosters a conducive learning environment.",
      "Emphasizing innovation and practical experience, it prepares graduates for success in engineering and technology.",
    ],
  },
  {
    title: "Intern",
    company_name: "LORDROID",
    icon: lordroid,
    iconBg: "#E6DEDD",
    date: "July 2022 - August 2022",
    points: [
      "During my internship at LORDROID, a mobile development company, I gained hands-on experience in developing innovative mobile applications using Android Studio and Java.",
      "This opportunity significantly enhanced my programming skills, particularly in Java, and honed my ability to write efficient and robust code.",
      "Working on diverse projects further cultivated my creativity and problem-solving abilities.",
    ],
  },
  {
    title: "Intern",
    company_name: "Quebec Training Center",
    icon: quebec,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "During my enriching internship at Quebec Trang Center, I had the privilege to actively contribute to the creation of a dynamic full-stack JavaScript application utilizing the popular MERN stack.",
      " This hands-on experience allowed me to delve deep into the intricacies of MongoDB, Express.js, React, and Node.js, gaining a comprehensive understanding of their functionalities and interactions.",
      "Through my involvement in diverse projects, I honed my problem-solving abilities and learned to overcome technical challenges with creativity and efficiency.",
    ],
  },
];

const certifications = [
  {
    certification: "The Complete React Redux Node Express MySql Developer",
    name: "Udemy",
    date: "Mar 2023",
    image: udemy,
  },
  {
    certification: "Front End Development Libraries ",
    name: "FreeCodeCamp",
    date: "Nov 2022",
    image: fcc,
  },
  {
    certification: "Responsive Web Design ",
    name: "FreeCodeCamp",
    date: "May 2022",
    image: fcc,
  },
  {
    certification: "JavaScript Algorithms and Data Structures ",
    name: "FreeCodeCamp",
    date: "Jun 2022",
    image: fcc,
  },
  {
    certification: "Azure Fundamentals",
    name: "Microsoft",
    date: "Jan 2023",
    image: microsoft,
  },
  {
    certification: "Azure AI Fundamentals",
    name: "Microsoft",
    date: "Feb 2023",
    image: microsoft,
  },
];

const projects = [
  {
    name: "Smartphone Store",
    description:
      "This application allows users to browse, search, and purchase mobile phones and accessories. Additionally, it provides admin pages to manage products, categories, and user orders.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs ",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: smartphone,
    source_code_link: "https://github.com/Bahri-Adem/Mobile-Store-MERN-APP",
  },
  {
    name: "Medical File",
    description:
      "The project is to develop a web application that centralizes patients' medical data for all healthcare providers (medical clinics, laboratories, pharmacies).",
    tags: [
      {
        name: "JEE",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: medicalfile,
    source_code_link:
      "https://github.com/Bahri-Adem/Application-Web-Des-Patients",
  },
  {
    name: "IT Blog",
    description:
      "A user-friendly blog platform for creating, reading, and editing posts. Intuitive design, categorized content, and user interactions through comments and likes.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Bahri-Adem/IT-Blog-Php",
  },
  {
    name: "Adopt Me",
    description:
      "A compassionate platform connecting pet lovers with their furry soulmates. Simplifying pet adoption, users can explore a wide range of adorable animals seeking forever homes.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "React Query",
        color: "pink-text-gradient",
      },
    ],
    image: adoptme,
    source_code_link: "https://github.com/Bahri-Adem/AdoptMe-React-Application",
  },
  {
    name: "Students Managment",
    description:
      "Securely manage student profiles with authentication. Admins can view, create, update, and delete data, including name, email, age, and picture. Simplify student record management for educational institutions with ease.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express ",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: crud,
    source_code_link:
      "https://github.com/Bahri-Adem/MERN-CRUD-APP-With-Login-and-Registration",
  },
  {
    name: "Movie Trailer",
    description:
      "This platform, akin to Netflix, provides users with an immersive experience through a vast collection of movie trailers. With an intuitive interface, users can effortlessly explore a diverse range of films and receive tailored recommendations based on their viewing preferences.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux ",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Bahri-Adem/React-Redux-Movie-Trailer",
  },
];

export { services, technologies, experiences, certifications, projects };

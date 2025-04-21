import codingcops_logo from "../assets/Images/codingcops_logo.png";
import rebel from "../assets/Images/rebel.png";
import ocl from "../assets/Images/ocl.png";
import comsatsLogo from "../assets/Images/comsatsLogo.png";
import umt from "../assets/Images/umt.png";
import ecell from "../assets/Images/ecell.png";
import ethglobal from "../assets/Images/ethglobal.png";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BodyWerx from "../assets/Images/BodyWerx.png";
export const programmingLanguages = [
  // Programming Languages
  { icon: "SiPython", name: "Python" },
  { icon: "SiRuby", name: "Ruby" },
  { icon: "SiJavascript", name: "Javascript" },
  { icon: "SiC", name: "C" },
  { icon: "SiCplusplus", name: "C++" },
  { icon: "SiCss3", name: "CSS" },
  { icon: "SiHtml5", name: "HTML" },

  // Frameworks/Libraries
  { icon: "SiDjango", name: "Django" },
  { icon: "SiRubyonrails", name: "Ruby on Rails" },
  { icon: "SiReact", name: "React" },
  { icon: "SiGraphql", name: "GraphQl" },
  { icon: "SiTailwindcss", name: "Tailwindcss" },
  { icon: "SiSass", name: "Sass" },
  { icon: "SiBootstrap", name: "Bootstrap" },

  // Build & Developer Tools
  { icon: "SiMysql", name: "Mysql" },
  { icon: "SiPostman", name: "Postman" },
  { icon: "SiDocker", name: "Docker" },
  { icon: "SiGit", name: "Git" },
  { icon: "SiGithub", name: "Github" },
  { icon: "SiVite", name: "Vite" },
  { icon: "SiVercel", name: "Vercel" },
];

// export const experience = [
//   {
//     organization: "Coding Cops, Pakistan",
//     logo: "Coding Cops",
//     img: codingcops_logo,
//     postions: [
//       {
//         title: "Software Engineer",
//         duration: "Jun 2024 - Feb 2022",
//         content: [
//           {
//             text: "Led the MVP transition from Angular 1.0 to React and developed the user profile module to manage employee details, payroll, PTO, and documents.",
//             link: "",
//           },
//           {
//             text: "Built key HR features like employee PTO, custom tables, and documents, while successfully integrating Trinet, 15Five, and Gusto within project deadlines.",
//             link: "",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     organization: "Rebel,Uruguay (Remote)",
//     logo: "Rebel",
//     img: rebel,
//     postions: [
//       {
//         title: "Senior Software Engineer",
//         duration: "Jun 2022 - jan 2024",
//         content: [
//           {
//             text: "Developed & deployed multiple Shopify applications using the MERN and Rails stacks for Rebl, improving service offerings and client satisfaction.",
//             link: "",
//           },
//           {
//             text: "Led a team of three developers, assigned tasks, reviewed PRs, and ensured application stability through testing.",
//             link: "",
//           },
//           {
//             text: "Integrated Shopify apps with external APIs, managed webhook architecture, and deployed applications using Docker & Heroku.",
//             link: "",
//           },
//           {
//             text: "Led the development of Tally, a Shopify app for inventory, purchase orders, vendor management, shipping (DHL), and email automation.",
//             link: "",
//           },
//           {
//             text: "Built from scratch: Tally, Pengems, Castells, and Simple Subscriptions.",
//             link: "",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     organization: "OCL Building Services Pte Ltd, Singapore (Remote)",
//     logo: "OCL Building Services Pte Ltd",
//     img: ocl,
//     postions: [
//       {
//         title: "Senior Software Engineer",
//         duration: "Jun 2024 - Feb 2022",
//         content: [
//           {
//             text: "Led the MVP transition from Angular 1.0 to React and developed the user profile module to manage employee details, payroll, PTO, and documents.",
//             link: "",
//           },
//           {
//             text: "Built key HR features like employee PTO, custom tables, and documents, while successfully integrating Trinet, 15Five, and Gusto within project deadlines.",
//             link: "",
//           },
//         ],
//       },
//     ],
//   },
// ];
export const experience = [
  {
    organization: "Coding Cops, Pakistan",
    logo: "Coding Cops",
    img: codingcops_logo,
    position: "left",
    postions: [
      {
        title: "Software Engineer",
        duration: "Jun 2024 - Feb 2022",
        skills: [
          "React",
          "AngularJS",
          "Trinet API",
          "Gusto API",
          "15Five",
          "JavaScript",
          "HTML",
          "CSS",
        ],
        contributions: [
          "Migrated core features from Angular 1.0 to React, improving performance and maintainability.",
          "Built user profile module for managing employee data, payroll, and PTO.",
          "Integrated HR tools (Trinet, 15Five, Gusto) to automate workflows and reduce manual effort.",
        ],
      },
    ],
  },
  {
    organization: "Rebel, Uruguay (Remote)",
    logo: "Rebel",
    img: rebel,
    position: "right",
    postions: [
      {
        title: "Senior Software Engineer",
        duration: "Jun 2022 - Jan 2024",
        skills: [
          "React",
          "Shopify",
          "MERN Stack",
          "Ruby on Rails",
          "Heroku",
          "Docker",
          "GraphQL",
        ],
        contributions: [
          "Led development of 4 Shopify apps (Tally, Pengems, Castells, Simple Subscriptions).",
          "Integrated DHL shipping and automated vendor management workflows.",
          "Managed a 3-developer team; performed code reviews and led app deployments via Heroku & Docker.",
        ],
      },
    ],
  },
  {
    organization: "OCL Building Services, Singapore (Remote)",
    logo: "OCL Building Services Pte Ltd",
    img: ocl,
    position: "left",
    postions: [
      {
        title: "Senior Software Engineer",
        duration: "Jun 2024 - Feb 2022",
        skills: [
          "React",
          "AngularJS",
          "HR Tech",
          "Custom Tables",
          "Document Management",
        ],
        contributions: [
          "Redesigned MVP from Angular to React and improved UI/UX of HR modules.",
          "Built document storage and PTO tracking system for HR.",
        ],
      },
    ],
  },
];

export const education = [
  {
    name: "Comsats Univeristy Lahore, Pakistan",
    logo: comsatsLogo,
    fieldName: "Bachelor of software engineering",
    duration: "December 2015 - May 2019",
    about: [
      {
        text: "● Major: Software Development & Architecture",
      },
      { text: "● Minor: Artificial Intelligence & Software Systems" },
    ],
  },
  {
    name: "University of Management & Technology, Lahore Pakistan",
    logo: umt,
    fieldName: "Master of AI",
    duration: "May 2024 - Persent",
    about: [
      {
        text: "● Pursuing advanced studies in Artificial Intelligence, focusing on machine learning, deep learning, and AI-driven solutions.",
      },
      {
        text: "● Engaged in cutting-edge research and practical applications of AI in real-world scenarios.",
      },
      {
        text: "● Exploring AI's role in automation, data analysis, and intelligent systems development",
      },
    ],
  },
];

export const achievement = [
  {
    id: "a-1",
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    img: ethglobal,
    icon: "",
    position: "Winner",
    content1: "True Network's Winner, Polkadot's 1st Runner Up",
    content2: "Lit Protocol's 2nd Runner Up",
    content3: "Coinbase Pool Prize, Base Top 10",
    article:
      "https://www.linkedin.com/posts/mittal-parth_super-stoked-to-announce-that-our-team-emerged-activity-7274735259621961729-tkq4?utm_source=share&utm_medium=member_desktop",
    project: "https://devfolio.co/projects/khoj-3336",
    youtube:
      "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
  },
  {
    id: "a-2",
    icon: "",
    img: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article:
      "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-3",
    icon: "",
    img: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article:
      "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-4",
    icon: "",
    img: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article:
      "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-5",
    icon: "",
    img: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article:
      "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
];

export const projects = [
  {
    id: 1,
    img: BodyWerx,
    projectName: "Body Werx",
    Stack: "Teach Stack",
    icons: [
      {
        icon: "SiRuby",
      },
      {
        icon: "SiPostgresql",
      },
      {
        icon: "SiReact",
      },
      {
        icon: "SiSass",
      },
      {
        icon: "SiHtml5",
      },
    ],
    description:
      "A beautifully designed website focused on connecting masseurs with clients. The platform offers a clean, responsive interface, making it easy for usersto browse available services, book appointments, and securely process payments. It includes features like ads,service filtering, user authentication, anda review system, ensuring a seamless and trustworthy user experience.",
    githubIcon: GitHub,
    linkedinIcon: LinkedInIcon,
    githubURL: "",
    websiteURL: "https://www.bodywerx.com/",
    linkedInURL: "",
  },
  {
    id: 2,
    img: ethglobal,
    projectName: "SVR Support Vector Machine",
    Stack: "Teach Stack",
    icons: [
      {
        icon: "SiRuby",
      },
      {
        icon: "SiPython",
      },
      {
        icon: "SiRust",
      },
      {
        icon: "SiC",
      },
      {
        icon: "SiDjango",
      },
    ],
    description:
      "Machine learning technique such as Support Vector Regression (SVR),offer powerful tools for analyzing and predicting housing prices.In this paper, we apply SVR to predict house prices using adataset obtained from Zameen.com, which contains approximately 50,000 entries from Lahore and Islamabad.",
    githubIcon: GitHub,
    linkedinIcon: LinkedInIcon,
  },
  {
    id: 3,
    img: ethglobal,
    projectName: "Pengums Shopify App",
    Stack: "Teach Stack",
    icons: [
      {
        icon: "SiRuby",
      },
      {
        icon: "SiPython",
      },
      {
        icon: "SiRust",
      },
      {
        icon: "SiC",
      },
      {
        icon: "SiDjango",
      },
    ],
    description:
      "Winning project at 3 hackathons, GreenTrust offers a novel solution for obtaining certification in organic farming by organizing credible and decentralized Participatory Guarantee Systems (PGSs).",
    githubIcon: GitHub,
    linkedinIcon: LinkedInIcon,
  },
  {
    id: 4,
    img: ethglobal,
    projectName: "Telly App",
    Stack: "Teach Stack",
    icons: [
      {
        icon: "SiRuby",
      },
      {
        icon: "SiPython",
      },
      {
        icon: "SiRust",
      },
      {
        icon: "SiC",
      },
      {
        icon: "SiDjango",
      },
    ],
    description:
      "Winning project at 3 hackathons, GreenTrust offers a novel solution for obtaining certification in organic farming by organizing credible and decentralized Participatory Guarantee Systems (PGSs).",
    githubIcon: GitHub,
    linkedinIcon: LinkedInIcon,
  },
];

export const header = {
  title: "Skills and Experience",
  educationTitle: "Education",
  achievementTitle: "Achievement",
  projectTitle: "Projects",
};

export default {
  programmingLanguages,
  experience,
  header,
  education,
  projects,
  achievement,
};

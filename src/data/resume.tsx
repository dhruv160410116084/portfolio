import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Dhruv Patel",
  initials: "DP",
  url: "https://dhruvpatel.work",
  location: "Tornoto, CA",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Software Engineer/ Educator",
  summary:
    "I am a dedicated MERN stack developer with robust DevOps skills and a keen interest in AWS cloud services. In addition to my development expertise, I am a computer science teacher, committed to educating and inspiring the next generation of technologists. I am passionate about working with the latest technologies, ensuring system security, and optimizing performance. My goal is to leverage my skills and knowledge to develop innovative solutions that drive efficiency and enhance user experience.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "AWS",
    "Google cloud"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "dhruvnpatel289@gmail.com",
    tel: "+14372862908",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dhruv160410116084",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhruv-patel-dev/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "AG-CDI College",
      href: "https://www.cdicollege.c",
      badges: [],
      location: "North York & Mississauga",
      title: "Instructor",
      logoUrl: "https://www.cdicollege.ca/files/templates/main2020/images/CDI%20Logo.svg",
      start: "Dec 2023",
      end: "Present",
      description: 
        `Conducting comprehensive lectures and hands-on sessions in various computer science subjects, including Pythonprogramming, web programming, UX design, Software Development Projects, and CMS.\nUpdated curriculum to align with industry trends, integrating interactive methods: project-based assessments andcoding challenges. Introduced online quizzes for paced learning and team-based competitions.`,
    },
    {
      company: "MIT Technology Ventures",
      badges: [],
      href: "https://mitventures.co",
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "/mit.jpg",
      start: "Dec 2021",
      end: "Mar 2024",
      description:
        `Reduced project’s cost by 15% within 3 months by implementing real-time chat functionality using WebSocket and realtime video calling using WebRTC, eliminating the need for costly 3rd party libraries.\n Increased scalability and availability of the application by up to 90% by utilizing AWS Cloud’s Application Load Balancer service for distributing incoming traffic across multiple instances of EC2.\nConfiguring CI/CD pipelines for MERN stack projects, leveraging Bitbucket and GitHub Actions to automate build, test, and deployment processes. Optimized MongoDB aggregation pipelines to reduce the response time of APIs by 50%.\n Created user-friendly UI in React using Material Design, Antdesign, and TailwindCSS UI libraries.`,
    },
    {
      company: "TidBit Solutions",
      href: "https://www.crunchbase.com/organization/tidbit-solutions",
      badges: [],
      location: "Remote",
      title: "MERN Stack Developer",
      logoUrl: "/tidbit.webp",
      start: "Aug 2020",
      end: "Dec 2021",
      description:
        `Designed and developed reusable React components for future use, resulting in a 30% reduction in development time for new projects. Redux to centralize states and efficiently manage to build dynamic and complex UI.\nDecreased client’s manual work to 20% by developing CRM, the company’s leading project, as a dedicated developer with REST APIs in MVC architecture using ExpressJS, building UI and Integrating it with React components.\nOptimised complicated SQL queries for retrieving and manipulating data from MySQL database leveraging joins, subqueries, and aggregate functions, increasing performance by 15%.`,
    },
    {
      company: "Infostretch",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Backend Intern",
      logoUrl: "/infostretch.jpg",
      start: "May 2019",
      end: "Jul 2019",
      description:
        `Designed and developed an online test management platform for hiring purposes, leveraging MongoDB, Express, AWS LightSail, and AWS S3 to create a scalable solution.\nBuilt JWT-based authentication for enhanced security, allowing only authorized users access to sensitive data and features. Implemented caching mechanisms, improving response times by 30%.\nIntroduced a generate PDF feature, enabling the generation of reports and documents directly within the application.`,
    }
  ],
  education: [
    {
      school: "Lambton College",
      href: "https://www.lambtoncollege.ca/",
      degree: "DevOps for Cloud Computing",
      logoUrl: "/lambton.webp",
      start: "2023",
      end: "2024",
    },
    {
      school: "Gujrat Technological University",
      href: "https://www.gtu.ac.in/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/gtu.png",
      start: "2016",
      end: "2020",
    }
  ],
  projects: [
    {
      title: "CharCha",
      href: "https://charcha.dhruvpatel.work",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "CharCha is a Peer-to-Peer real-time video calling application that uses WebRTC, And with the help of data channel it supports realtime messages and file transfer.",
      technologies: [
        "React",
        "Vite",
        "WebRTC",
        "WebSocket",
        "Node",
        "PostgreSql"
      ],
      links: [
        {
          type: "Website",
          href: "https://charcha.dhruvpatel.work",
          icon: <Icons.globe className="size-3" />,
        },
      ],
       image: "/charcha.png",
    },
    {
      title: "sshm",
      href: "https://github.com/dhruv160410116084/sshm/tree/master",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "CharCha is a Peer-to-Peer real-time video calling application that uses WebRTC, And with the help of data channel it supports realtime messages and file transfer.",
      technologies: [
        "Go",
        "cobra-cli",
        "ssh",
        "brew"
      ],
      links: [
        {
          type: "Cli",
          href: "https://github.com/dhruv160410116084/sshm/tree/master",
          icon: <Icons.globe className="size-3" />,
        },
      ],
       image: "/sshm.gif",
    },
  ],
  hackathons: [],
} as const;

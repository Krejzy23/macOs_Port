const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "system",
    name: "System", // was "Photos"
    icon: "system.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Dec 21, 2025",
    title:
      "TypeScript",
    image: "/images/blog1.png",
    link: "https://m-e-r-n-blog.onrender.com/post/typescript",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "T-Shark Cybersecurity instrument",
    image: "/images/wireshark.svg",
    link: "https://m-e-r-n-blog.onrender.com/post/t-shark",
  },
  {
    id: 3,
    date: "Dec 21, 2025",
    title: "Graphene operation system description",
    image: "/images/GrapheneOS.svg",
    link: "https://m-e-r-n-blog.onrender.com/post/grapheneos",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Krejzy23",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://minimalist-portfolio-navy.vercel.app/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com",
  },
];

const mobileQuickAccess = [
  {
    id: "resume",
    name: "Resume",
    icon: "/images/pages.png",
    windowKey: "resume",
    windowPosition: "top-[5vh] left-30",
  },
  {
    id: "terminal",
    name: "Tech Stack",
    icon: "/images/terminal.png",
    windowKey: "terminal",
    windowPosition: "top-[5vh] left-5",
  },
];

const systemProp = [
  {
    id: "1",
    version: "v1.0.0",
    tech: "HTML + CSS",
    description: [
      "First contact with programming after a retraining course",
      "Struggling with flexbox and mobile responsiveness 😀",
    ],
    date: "23.9.2023",
    repo: "https://github.com/Krejzy23/Photographer_portfolio",
    live: "https://photographer-portfolio-nine.vercel.app/",
  },
  {
    id: "2",
    version: "v1.5.0",
    tech: "HTML + CSS + JavaScript",
    description: [
      "Simple website using jQuery and a form written in JavaScript",
      "Started to feel like a real programmer — still fighting flexbox 😅",
    ],
    date: "10.11.2023",
    repo: "https://github.com/Krejzy23/Barber_Portfolio",
    live: "https://barber-portfolio.vercel.app/",
  },
  {
    id: "3",
    version: "v2.0.0",
    tech: "React + Tailwind CSS + Framer Motion",
    description: [
      "Learning React fundamentals, dependencies, and basic UI/UX principles",
      "Why did I waste time with vanilla coding? React is awesome! 🤩",
    ],
    date: "13.1.2024",
    repo: "https://github.com/Krejzy23/KrejzyVerse",
    live: "https://krejzy-verse.vercel.app/",
  },
  {
    id: "4",
    version: "v3.5.0",
    tech: "React + Tailwind CSS + Three.js",
    description: [
      "Working with 3D models, animations, and real spatial positioning",
      "Making websites feel alive is insanely fun",
    ],
    date: "20.11 2024",
    repo: "https://github.com/Krejzy23/3D-Sushi-Ramen",
    live: "https://3-d-sushi-ramen-bistro.vercel.app/",
  },
  {
    id: "5",
    version: "v3.0.0",
    tech: "React + Redux + Tailwind CSS",
    description: [
      "Full-stack React application built with Vite, Redux Toolkit and Tailwind CSS",
      "Finally understood the pain and beauty of full-stack development 🥲",
    ],
    date: "15.6.2024",
    repo: "https://github.com/Krejzy23/Summarizer_Ai",
    live: "https://summarizer-ai-psi.vercel.app/",
  },
  {
    id: "6",
    version: "v2.5.0",
    tech: "Next.js + TypeScript + API",
    description: [
      "First project built with TypeScript and the Next.js framework",
      "Realized why type safety and structured data flow matter",
    ],
    date: "14.2.2024",
    repo: "https://github.com/Krejzy23/Anime_List",
    live: "https://anime-list-beige.vercel.app/",
  },
  {
    id: "7",
    version: "v4.0.0",
    tech: "Cybersecurity · Networking · Linux",
    description: [
      "Shift from building applications to understanding how they can be broken",
      "Hands-on learning via labs, CTFs and real attack scenarios on TryHackMe",
      "Started focusing on networking, enumeration, privilege escalation and fundamentals",
    ],
    date: "2025",
    repo: "https://tryhackme.com/p/Krejzy23",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  mobileQuickAccess,
  systemProp,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Personal Photography Services",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "photo.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This private photographer’s website was created to differentiate itself from traditional portfolios through a distinctive design and minimalist approach. Attention to detail plays a key role, while carefully crafted animations bring the website to life. Lively video elements and subtle, natural animations enhance the visual experience and create a memorable “wow” effect.",
            "The website was developed using Next.js and Tailwind CSS, with Framer Motion used for animations. It is a frontend-only project, and further development is ongoing.",
          ],
        },
        {
          id: 2,
          name: "photo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://photo-sand.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "photo.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/photo.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI SaaS Image Editing",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Image-Ai.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A scalable AI image SaaS platform built for advanced image processing, offering secure payment integration, intelligent image search, and multiple AI-powered features such as image restoration, recoloring, object removal, generative filling, and background removal.",
            "The application was built using Next.js and styled with Tailwind CSS. User authentication is handled by Clerk, payments are processed via Stripe, and the database is connected to MongoDB.",
          ],
        },
        {
          id: 2,
          name: "image-ai.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://image-ai-nu.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "image-ai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/image-ai.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "M.E.R.N blog",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "MERN_blog.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A developer-focused blogging platform built as a digital lab for cybersecurity research, system exploration, and full-stack experimentation",

            "The platform combines a terminal-driven visual identity with modern web technologies to deliver structured technical content and interactive experiences.Developed using React, Tailwind CSS, and a MERN architecture, with an emphasis on modular design, scalability, and maintainability.",
          ],
        },
        {
          id: 2,
          name: "mern_blog.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://m-e-r-n-blog.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "mern_blog.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  system: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

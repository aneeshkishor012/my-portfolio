type Skill = {
    title: string;
    level: number;
    category: string;
    description: string;
    link: string;
    image: string;
};


export const defaultSkills: Skill[] = [
    {
        title: "ReactJS",
        level: 90,
        category: "FrontEnd",
        description: "JavaScript library for building user interfaces.",
        link: "https://react.dev/",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        title: "React Native",
        level: 85,
        category: "FrontEnd",
        description: "Framework for building native apps using React.",
        link: "https://reactnative.dev/",
        image: "https://reactnative.dev/img/header_logo.svg",
    },
    {
        title: "Next.js",
        level: 75,
        category: "FrontEnd",
        description: "A powerful React framework for building optimized, server-rendered, and static web applications.",
        link: "https://nextjs.org/docs",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
        title: "C Programming",
        level: 85,
        category: "Language",
        description:
            "A powerful general-purpose programming language used for system software, embedded systems, and high-performance applications.",
        link: "https://devdocs.io/c/",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    },
    {
        title: "HTML5",
        level: 85,
        category: "FrontEnd",
        description: "Markup language for structuring and presenting web content.",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
        title: "CSS3",
        level: 80,
        category: "FrontEnd",
        description: "Stylesheet language for designing visually appealing web pages.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    {
        title: "JavaScript",
        level: 90,
        category: "Language",
        description: "Programming language that powers interactive web experiences.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
        title: "Python Basics",
        level: 40,
        category: "Language",
        description: "High-level programming language known for its simplicity and versatility.",
        link: "https://docs.python.org/3/tutorial/",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
        title: "Git",
        category: "Tools",
        level: 70,
        description: "Version control system for tracking code changes.",
        link: "https://git-scm.com/doc",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    },
    {
        title: "ANTD",
        category: "FrontEnd",
        level: 90,
        description: "Component library for building user interfaces.",
        link: "https://ant.design/",
        image: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    },
    {
        title: "MUI",
        category: "FrontEnd",
        level: 80,
        description: "Component library for building user interfaces.",
        link: "https://mui.com/",
        image: "https://icon.icepanel.io/Technology/svg/Material-UI.svg",
    },
];
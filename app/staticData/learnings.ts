import { IconType } from "react-icons";
import { DiMongodb } from "react-icons/di";
import { FaCamera, FaMapMarkerAlt } from "react-icons/fa";
import { FaBluetooth, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import { SiSupabase } from "react-icons/si";
import { TbBrandVercel, TbBrandVercelFilled } from "react-icons/tb";

type Learning = {
    title: string;
    description: string;
    link: string;
    image?: string;
    icon?: IconType;
};

export const defaultLearnings: Learning[] = [
    {
        title: "ReactJS",
        description: "Build fast, interactive user interfaces using the component-based React library from Meta.",
        link: "https://react.dev/",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        title: "React Native",
        description: "Create cross-platform mobile apps for iOS and Android using React Native and JavaScript.",
        link: "https://reactnative.dev/",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        title: "Next.js",
        description: "A powerful React framework for building optimized, server-rendered, and static web applications.",
        link: "https://nextjs.org/docs",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",


    },
    {
        title: "Node.js",
        description: "A JavaScript runtime built on Chrome’s V8 engine, designed for scalable server-side applications.",
        link: "https://nodejs.org/en/docs",
        icon: FaNodeJs
    },
    {
        title: "Redux & Redux Toolkit",
        description: "Redux is a state management library for JavaScript apps (commonly React). And Redux Toolkit is the official, recommended way to use Redux.",
        link: "https://redux-toolkit.js.org/introduction/getting-started",
        image: "https://icon.icepanel.io/Technology/svg/Redux.svg",
    },
    {
        title: "TypeScript",
        description: "A superset of JavaScript that adds static typing and powerful tooling for large-scale applications.",
        link: "https://www.typescriptlang.org/docs/",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
        title: "Tailwind CSS",
        description: "Tailwind CSS is a utility-first CSS framework designed to accelerate the development of modern websites by allowing developers to style web pages directly in HTML using predefined utility classes.",
        link: "https://tailwindcss.com/",
        image: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    },
    {
        title: "React Context API",
        description: "Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.",
        link: "https://react.dev/learn/passing-data-deeply-with-context",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        title: "Supabase",
        description: "Supabase is the Postgres development platform.Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.",
        link: "https://mrousavy.com/react-native-vision-camera/",
        icon: SiSupabase,
    },
    {
        title: "MongoDB",
        description: "MongoDB is a NoSQL, document-based database.",
        link: "https://www.mongodb.com/",
        icon: DiMongodb,
    },
    {
        title: "React Native Vision Camera",
        description: "High-performance camera library for React Native, supporting barcode and face detection.",
        link: "https://mrousavy.com/react-native-vision-camera/",
        icon: FaCamera,
    },
    {
        title: "RN BLE PLX",
        description: "react-native-ble-plx is a widely used, full-featured React Native library for Bluetooth Low Energy (BLE) communication, designed for robust cross-platform support on both iOS and Android.",
        link: "https://dotintent.github.io/react-native-ble-plx/",
        icon: FaBluetooth,
    },
    {
        title: "Apache Cordova",
        description: "Build mobile apps using HTML, CSS, and JavaScript that access native device APIs.",
        link: "https://cordova.apache.org/docs/en/latest/",
        image: "https://cordova.apache.org/static/img/cordova_bot.png",
    },
    {
        title: "React Native Geolocation",
        description: "Access device location services easily using the React Native Geolocation API.",
        link: "https://github.com/react-native-geolocation/react-native-geolocation",
        icon: FaMapMarkerAlt,
    },
    {
        title: "Google Gemini API (AI & Generative Key)",
        description: "Use Google’s Gemini Generative AI models for building intelligent chatbots and creative assistants.",
        link: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Google_Gemini_logo_2025.svg",
        image: "./icons/Gemini.svg"
    },
    {
        title: "SVG and PNG tech icons",
        description: "Download, copy and paste tech icons in SVG and PNG format for your projects.",
        link: "https://techicons.dev/",
        image: "https://techicons.dev/tech-icons-logo.svg",
    },
    {
        title: "",
        description: "Free customizable illustrations for websites, apps, and presentations. You can edit colors, styles, and download as SVG/PNG or animated assets.",
        link: "https://storyset.com/",
        image: "https://storyset.com/images/logo.svg",
    }
];

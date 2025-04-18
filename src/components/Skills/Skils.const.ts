import {
  Code,
  GitCommit,
  FileCode,
  Monitor,
  Cloud,
  Package,
  Database,
  Server,
  Network,
  Palette,
  Repeat,
  Locate,
} from "lucide-react";

export const iconMap: Record<string, React.ComponentType> = {
  HTML5: Code,
  CSS3: Palette,
  JavaScript: Monitor,
  TypeScript: FileCode,
  React: Monitor,
  Git: GitCommit,
  Postman: Network,
  Firebase: Cloud,
  Figma: Palette,
  Vite: Package,
  MongoDB: Database,
  "Node.js": Server,
  Express: Network,
  Redux: Repeat,
  Compass: Locate,
};
export const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
export const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
export const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
// export const categories = [
//   {
//     title: "Development",
//     skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js"],
//   },
//   {
//     title: "Technologies & Utilities",
//     skills: ["Git", "Figma", "Vite", "Postman", "Compass"],
//   },
//   {
//     title: "Personal Qualities",
//     skills: [
//       "Communicative",
//       "Conscientious",
//       "Punctual",
//       "Time Management",
//       "Responsibility",
//       "Problem-solving",
//     ],
//   },
// ];
export const categories = [
  {
    title: "Development",
    skills: [
      {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "TypeScript", link: "https://www.typescriptlang.org/docs/" },
      { name: "React", link: "https://react.dev/" },
      { name: "Node.js", link: "https://nodejs.org/en/docs" },
    ],
  },
  {
    title: "Utilities",
    skills: [
      { name: "Git", link: "https://git-scm.com/doc" },
      { name: "Figma", link: "https://help.figma.com/hc/en-us" },
      { name: "Vite", link: "https://vitejs.dev/guide/" },
      {
        name: "Postman",
        link: "https://learning.postman.com/docs/getting-started/introduction/",
      },
      {
        name: "Compass",
        link: "https://www.mongodb.com/docs/compass/current/",
      },
    ],
  },
  {
    title: "Personal Qualities",
    skills: [
      {
        name: "Communicative",
        link: "https://en.wikipedia.org/wiki/Communication",
      },
      {
        name: "Conscientious",
        link: "https://en.wikipedia.org/wiki/Conscientiousness",
      },
      { name: "Punctual", link: "https://en.wikipedia.org/wiki/Punctuality" },
      {
        name: "Time Management",
        link: "https://en.wikipedia.org/wiki/Time_management",
      },
      {
        name: "Responsibility",
        link: "https://en.wikipedia.org/wiki/Responsibility",
      },
      {
        name: "Problem-solving",
        link: "https://en.wikipedia.org/wiki/Problem_solving",
      },
    ],
  },
];

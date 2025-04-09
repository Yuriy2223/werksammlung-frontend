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
export const categories = [
  {
    title: "Development",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Figma", "Vite", "Postman", "Redux", "Express"],
  },
  {
    title: "Personal Qualities",
    skills: [
      "Communicative",
      "Conscientious",
      "Punctual",
      "Time Management",
      "Responsibility",
      "Problem-solving",
    ],
  },
];

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
  "VS Code": FileCode,
  Vite: Package,
  MongoDB: Database,
  "Node.js": Server,
  Express: Network,
  Redux: Repeat,
  Compass: Locate,
  Docker: Cloud,
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

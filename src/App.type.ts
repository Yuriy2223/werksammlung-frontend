export type Language = "EN" | "UA" | "DE";

export interface User {
  _id: string;
  firstName: LangText;
  lastName: LangText;

  avatarUrl: string;
  viewCV: string;
  about: LangText;

  email: string;
  linkedin: string;
  telegram: string;
  gitHub: string;

  skills: Skills[];
  projects: Project[];
}
export interface Project {
  _id: string;
  imgUrl: string;
  title: LangText;
  technologies: string[];

  description: LangText;
  codeUrl: string;
  webUrl: string;
  role: string;
  date: string;

  createdAt: string;
  updatedAt: string;
}
export interface Skills {
  categories: Category[];
  utilities: Category[];
  qualities: Category[];
}
export interface Category {
  title: LangText;
  skills: Skill[];
}
export interface Skill {
  name: LangText;
  link: string;
}
export interface LangText {
  en: string;
  ua: string;
  de: string;
}

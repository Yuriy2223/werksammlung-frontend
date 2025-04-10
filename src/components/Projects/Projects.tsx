import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Title } from "../../shared/Title";
import { SubTitle } from "../../shared/SubTitle";
import { ProjectCard } from "./ProjectCard";
import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectsSection,
} from "./Projects.styled";

import { projects } from "./Projects.const";

export interface Project {
  title: string;
  description: string;
  role: string;
  category: string;
  img: string;
  technologies: string[];
}

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Title>{t("projects.title")}</Title>
          <SubTitle>{t("projects.subtitle")}</SubTitle>
        </motion.div>

        <ProjectsGrid
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {projects.map((project: Project) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

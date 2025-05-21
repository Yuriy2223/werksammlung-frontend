import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Languages, Project } from "../../App.type";
import { Title } from "../../shared/Title";
import { SubTitle } from "../../shared/SubTitle";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { selectProfile } from "../../redux/user/selectors";
import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectsSection,
} from "./Projects.styled";

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.toLowerCase() as Languages;
  const profile = useSelector(selectProfile);
  const projects = profile?.projects || [];

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
              key={project._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} lang={lang} />
            </motion.li>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

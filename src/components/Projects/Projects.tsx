import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects } from "./Projects.const";
import { Container } from "../../shared/Container";
import { Title } from "../../shared/Title";
import { SubTitle } from "../../shared/SubTitle";

export const ProjectsSection = styled.section`
  background-color: ${({ theme }) => theme.bgBody};
`;
export const ProjectsContainer = styled(Container)`
  padding: 40px 20px;
`;
export const TitleWrapper = styled(motion.div)``;
export const ProjectFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;
export const FilterButton = styled.button`
  background-color: #00bcd4;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #008c9e;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled(motion.div)`
  border-radius: 12px;
  padding: 20px;
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.colorText};
  box-shadow: 0 0 8px ${({ theme }) => theme.colorText};
  color: ${({ theme }) => theme.colorText};
  transition: all 300ms ease;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:hover {
    /* transform: translateY(-200px) scale(1.2); */
    box-shadow: 0 0 20px ${({ theme }) => theme.colorText};
  }
`;
export const ProjectImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 12px;
`;
export const ProjectTitle = styled.h3`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const ProjectDescription = styled.p`
  color: #444;
`;

export const ProjectRole = styled.p`
  font-size: 1.1rem;
  color: #2c3e50;
`;

export const ProjectTechnologies = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const TechTag = styled.span`
  background-color: #00bcd4;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: 1rem;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <TitleWrapper
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Title>Projects</Title>
          <SubTitle>
            Drop a message for collaboration, freelancing or just to say hi! ✌️
          </SubTitle>
        </TitleWrapper>

        <ProjectFilters>
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? "active" : ""}
            >
              {cat}
            </FilterButton>
          ))}
        </ProjectFilters>

        <ProjectsGrid>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <ProjectImg src={project.img} alt={project.title}></ProjectImg>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectRole>
                  <strong>Role:</strong> {project.role}
                </ProjectRole>
                <ProjectTechnologies>
                  {project.technologies.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </ProjectTechnologies>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

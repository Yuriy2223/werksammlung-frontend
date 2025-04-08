// import { ProjectsSection } from "./Projects.styled";

// export const Projects = () => {
//   return <ProjectsSection id="projects">Projects</ProjectsSection>;
// };
import styled from "styled-components";
import { motion } from "framer-motion";

// === Стилі ===
const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(120deg, #e3f2fd 0%, #ffffff 100%);
  text-align: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #1e2a38;
  position: relative;
  display: inline-block;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    width: 0%;
    height: 4px;
    background: #00bcd4;
    border-radius: 2px;
    transform: translateX(-50%);
    animation: underline 1.2s ease forwards 0.5s;
  }

  @keyframes underline {
    to {
      width: 80px;
    }
  }
`;

const ProjectFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  background-color: #00bcd4;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #008c9e;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 12px 35px rgba(0, 188, 212, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0097a7;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1.5rem;
`;

const ProjectRole = styled.p`
  font-size: 1.1rem;
  color: #2c3e50;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background-color: #00bcd4;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: 1rem;
`;

// === Анімація ===
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// === Компонент Projects ===
export const Projects = () => {
  const projects = [
    {
      title: "Ukrainian House",
      description:
        "This website promotes Ukrainian literature with a library, news pages, contact form, and an admin panel.",
      role: "Front-end developer",
      technologies: ["React", "JavaScript", "SCSS"],
      category: "React",
    },
    {
      title: "HYPE TATTOO",
      description:
        "Responsive landing page for a tattoo studio, including a 'Not Found' (404) page and 'Thank You' page.",
      role: "Individual project",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "JavaScript",
    },
    {
      title: "E-Pharmacy",
      description:
        "An accessible web app for searching and ordering medicines, featuring user authentication and dynamic search.",
      role: "Individual project",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "React + Node.js",
    },
    {
      title: "petLove",
      description:
        "Platform for pet owners to post pet listings, find partners, and connect with users in a community.",
      role: "Individual project",
      technologies: ["React", "JavaScript"],
      category: "React",
    },
    {
      title: "Nanny.Services",
      description:
        "Web app that connects users with available nannies, allowing users to browse, filter, and save favorites.",
      role: "Individual project",
      technologies: ["React", "JavaScript"],
      category: "React",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <TitleWrapper>
        <Title>My Projects</Title>
      </TitleWrapper>

      <ProjectFilters>
        <FilterButton>All</FilterButton>
        <FilterButton>JavaScript</FilterButton>
        <FilterButton>React</FilterButton>
        <FilterButton>React + Node.js</FilterButton>
      </ProjectFilters>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectRole>
              <strong>Role:</strong> {project.role}
            </ProjectRole>
            <ProjectTechnologies>
              {project.technologies.map((tech, idx) => (
                <TechTag key={idx}>{tech}</TechTag>
              ))}
            </ProjectTechnologies>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

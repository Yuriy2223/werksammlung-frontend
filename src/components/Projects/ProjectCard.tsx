import { useState } from "react";
import {
  BackFace,
  CardWrapper,
  CardInner,
  FrontFace,
  ProjectDescription,
  ProjectImg,
  ProjectRole,
  ProjectTechnologies,
  ProjectTitle,
  TechTag,
} from "./ProjectCard.styled";

import { Project } from "./Projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <CardWrapper onClick={handleClick}>
      <CardInner isFlipped={isFlipped}>
        <FrontFace>
          <ProjectImg src={project.img} alt={project.title} />
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectTechnologies>
            {project.technologies.map((tech, i: number) => (
              <TechTag key={i}>{tech}</TechTag>
            ))}
          </ProjectTechnologies>
        </FrontFace>
        <BackFace>
          <div>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </div>
          <div>
            <ProjectRole>
              <strong>Role:</strong> {project.role}
            </ProjectRole>
            <ProjectTechnologies>
              {project.technologies.map((tech: string, i: number) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </ProjectTechnologies>
          </div>
        </BackFace>
      </CardInner>
    </CardWrapper>
  );
};

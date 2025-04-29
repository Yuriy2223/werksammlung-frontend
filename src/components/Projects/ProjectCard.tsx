import React, { useState } from "react";
import { Project } from "./Projects";
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
  ProjectDate,
} from "./ProjectCard.styled";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // const handleClick = () => {
  //   if (window.innerWidth <= 768) {
  //     setIsFlipped((prev) => !prev);
  //   }
  // };
  const handleClick = () => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <CardWrapper onClick={handleClick}>
      <CardInner $isFlipped={isFlipped}>
        <FrontFace>
          <ProjectImg src={project.imgUrl} alt={project.title} />
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectTechnologies>
            {project.technologies.map((tech: string, i: number) => (
              <React.Fragment key={i}>
                <TechTag>{tech}</TechTag>
                {i < project.technologies.length - 1 && <span>,&nbsp;</span>}
              </React.Fragment>
            ))}
          </ProjectTechnologies>
        </FrontFace>
        <BackFace>
          <div>
            <ProjectDescription>{project.description}</ProjectDescription>
          </div>
          <div>
            <ProjectRole>
              Role:<span>{project.role}</span>
            </ProjectRole>
            <ProjectDate>{project.date}</ProjectDate>
          </div>
        </BackFace>
      </CardInner>
    </CardWrapper>
  );
};

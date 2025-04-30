import React, { useEffect, useRef, useState } from "react";
import { Github, Globe } from "lucide-react";
import { Project } from "../Projects/Projects";
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
  LinkProject,
  WrapLinkProject,
} from "./ProjectCard.styled";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsFlipped((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isFlipped &&
        cardRef.current &&
        !cardRef.current.contains(event.target as Node)
      ) {
        setIsFlipped(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isFlipped]);

  return (
    <CardWrapper onClick={handleClick} ref={cardRef}>
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
          <WrapLinkProject>
            <LinkProject href={project.repUrl} target="_blank">
              GitHub
              <Github size={20} />
            </LinkProject>
            <LinkProject href={project.demoUrl} target="_blank">
              View project
              <Globe size={20} />
            </LinkProject>
          </WrapLinkProject>
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

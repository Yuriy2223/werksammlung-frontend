import styled from "styled-components";
import { motion, useAnimationControls } from "framer-motion";
import {
  Github,
  GitCommit,
  Code,
  FileCode,
  Monitor,
  Cloud,
  Terminal,
  Key,
  Package,
  CheckCircle,
} from "lucide-react";

const cardVariants = {
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

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #e0f7fa 0%, #f8fdff 100%);
  text-align: center;
  backdrop-filter: blur(6px);
`;

const TitleWrapper = styled(motion.div)`
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
    bottom: -10px;
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

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4b4b4b;
  margin-top: 1rem;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.65);
  border-radius: 1.5rem;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 15px 35px rgba(0, 188, 212, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 22px 45px rgba(0, 188, 212, 0.25);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0097a7;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #d0ecf3;
  padding-bottom: 0.5rem;
`;

const SkillList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Skill = styled(motion.li)`
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    color: #00bfa5;
    font-size: 1.2rem;
  }
`;

const iconMap: Record<string, React.ComponentType> = {
  HTML5: Code,
  "CSS3 / SCSS": FileCode,
  JavaScript: Monitor,
  TypeScript: FileCode,
  React: Cloud,
  Redux: Terminal,
  "Node.js": Key,
  MongoDB: Package,
  "Git + GitHub": Github,
  Git: GitCommit,
  Postman: Cloud,
  Firebase: Cloud,
  Figma: Monitor,
  Vite: Package,
};

export const Skills = () => {
  const cardControls = useAnimationControls();
  const listControls = useAnimationControls();

  const categories = [
    {
      title: "Development",
      skills: [
        "HTML5",
        "CSS3 / SCSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Redux",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      title: "Tools",
      skills: ["Git + GitHub", "Postman", "Firebase", "Figma", "Vite"],
    },
    {
      title: "Personal Qualities",
      skills: [
        "Communicative",
        "Conscientious",
        "Punctual",
        "Adaptability",
        "Time Management",
        "Responsibility",
        "Problem-solving",
      ],
    },
  ];

  return (
    <SkillsSection id="skills">
      <TitleWrapper
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title>My Skills</Title>
        <Subtitle>What I’m confident working with every day</Subtitle>
      </TitleWrapper>

      <Categories>
        {categories.map(({ title, skills }) => (
          <Card
            key={title}
            variants={cardVariants}
            initial="hidden"
            animate={cardControls}
            onViewportEnter={() => {
              cardControls.start("visible");
              listControls.start("visible");
            }}
            onViewportLeave={() => {
              cardControls.start("hidden");
              listControls.start("hidden");
            }}
            viewport={{ amount: 0.3 }}
          >
            <CategoryTitle>{title}</CategoryTitle>
            <SkillList
              variants={listVariants}
              initial="hidden"
              animate={listControls}
            >
              {skills.map((skill) => {
                const Icon = iconMap[skill] ?? CheckCircle;
                return (
                  <Skill key={skill} variants={itemVariants}>
                    <Icon /> {skill}
                  </Skill>
                );
              })}
            </SkillList>
          </Card>
        ))}
      </Categories>
    </SkillsSection>
  );
};

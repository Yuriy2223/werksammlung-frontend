import { useAnimationControls } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SubTitle } from "../../shared/SubTitle";
import { Title } from "../../shared/Title";
import {
  cardVariants,
  categories,
  iconMap,
  itemVariants,
  listVariants,
} from "./Skils.const";
import {
  SkillsCard,
  Categories,
  CategoryTitle,
  SkillList,
  SkillsContainer,
  SkillsSections,
  WrapperTitle,
  SkillLi,
  SkillLink,
} from "./Skills.styled";

export const Skills: React.FC = () => {
  const cardControls = useAnimationControls();
  const listControls = useAnimationControls();

  return (
    <SkillsSections id="skills">
      <SkillsContainer>
        <WrapperTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title>My Skills</Title>
          <SubTitle>What I confidently work with on a daily basis</SubTitle>
        </WrapperTitle>

        <Categories>
          {categories.map(({ title, skills }) => (
            <SkillsCard
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
                {skills.map(({ name, link }) => {
                  const Icon = iconMap[name] ?? CheckCircle;
                  return (
                    <SkillLi key={name} variants={itemVariants}>
                      <SkillLink to={link}>
                        <Icon /> {name}
                      </SkillLink>
                    </SkillLi>
                  );
                })}
              </SkillList>
            </SkillsCard>
          ))}
        </Categories>
      </SkillsContainer>
    </SkillsSections>
  );
};

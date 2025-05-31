import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SubTitle } from "../../shared/SubTitle";
import { Title } from "../../shared/Title";
import { selectProfile } from "../../redux/profile/selectors";
import { useViewportAmount } from "../../hooks/useViewportAmount";
import { Languages } from "../../App.type";
import {
  cardVariant,
  iconMap,
  itemVariant,
  listVariant,
} from "../../shared/Animations.const";
import {
  SkillsCard,
  Categories,
  CategoryTitle,
  SkillList,
  SkillsContainer,
  SkillsSections,
  WrapperTitle,
  SkillLink,
} from "./Skills.styled";

export const Skills = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.toLowerCase() as Languages;
  const profile = useSelector(selectProfile);
  const viewportAmount = useViewportAmount();

  return (
    <SkillsSections id="skills">
      <SkillsContainer>
        <WrapperTitle>
          <Title>{t("skills.title")}</Title>
          <SubTitle>{t("skills.subtitle")}</SubTitle>
        </WrapperTitle>

        <Categories>
          {profile?.skills?.map(({ category, items }, index) => {
            const categoryName =
              typeof category === "object" && category !== null
                ? category[lang]
                : category;

            const categoryKey =
              typeof category === "object" && category !== null
                ? category["en"] || Object.values(category)[0]
                : category;

            return (
              <SkillsCard
                key={categoryKey || index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: false, amount: 0.3 }}
                viewport={{ once: false, amount: viewportAmount }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px currentColor",
                }}
              >
                <CategoryTitle>{categoryName}</CategoryTitle>

                <SkillList
                  variants={listVariant}
                  initial="hidden"
                  animate="visible"
                  // viewport={{ once: false, amount: 0.3 }}
                  viewport={{ once: false, amount: viewportAmount }}
                >
                  {items.map(({ name, link }, i) => {
                    const skillName = name?.[lang];
                    if (!skillName) return null;
                    const key = name?.["en"] || Object.values(name)[0] || i;
                    const Icon = iconMap[skillName] ?? CheckCircle;

                    return (
                      <motion.li key={key} variants={itemVariant}>
                        <SkillLink to={link}>
                          <Icon /> {skillName}
                        </SkillLink>
                      </motion.li>
                    );
                  })}
                </SkillList>
              </SkillsCard>
            );
          })}
        </Categories>
      </SkillsContainer>
    </SkillsSections>
  );
};

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SubTitle } from "../../shared/SubTitle";
import { Title } from "../../shared/Title";
import { selectProfile } from "../../redux/user/selectors";
import { Languages } from "../../App.type";
import {
  cardVariants,
  iconMap,
  itemVariants,
  listVariants,
} from "./Skils.consts";
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

  return (
    <SkillsSections id="skills">
      <SkillsContainer>
        <WrapperTitle
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title>{t("skills.title")}</Title>
          <SubTitle>{t("skills.subtitle")}</SubTitle>
        </WrapperTitle>

        <Categories as={motion.div}>
          {profile?.skills?.map(({ category, items }, index) => {
            const categoryName =
              typeof category === "object" && category !== null
                ? category[lang]
                : category;

            const сategoryKey =
              typeof category === "object" && category !== null
                ? category["en"] || Object.values(category)[0]
                : category;

            return (
              // <motion.div
              //   key={сategoryKey || index}
              //   variants={cardVariants}
              //   initial="hidden"
              //   whileInView="visible"
              //   viewport={{ once: true, amount: 0.3 }}
              // >
              <SkillsCard
                // as={motion.div}
                key={сategoryKey || index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px currentColor",
                }}
              >
                <CategoryTitle>{categoryName}</CategoryTitle>

                <SkillList
                  // as={motion.ul}
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {items.map(({ name, link }, i) => {
                    const skillName = name?.[lang];
                    if (!skillName) return null;
                    const key = name?.["en"] || Object.values(name)[0] || i;
                    const Icon = iconMap[skillName] ?? CheckCircle;

                    return (
                      <motion.li key={key} variants={itemVariants}>
                        <SkillLink to={link}>
                          <Icon /> {skillName}
                        </SkillLink>
                      </motion.li>
                    );
                  })}
                </SkillList>
              </SkillsCard>
              // </motion.div>
            );
          })}
        </Categories>
      </SkillsContainer>
    </SkillsSections>
  );
};

/******************************************************* */

/******************************************************* */
// import { useAnimationControls } from "framer-motion";
// import { motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { SubTitle } from "../../shared/SubTitle";
// import { Title } from "../../shared/Title";
// import {
//   cardVariants,
//   categories,
//   iconMap,
//   itemVariants,
//   listVariants,
// } from "./Skils.const";
// import {
//   SkillsCard,
//   Categories,
//   CategoryTitle,
//   SkillList,
//   SkillsContainer,
//   SkillsSections,
//   WrapperTitle,
//   SkillLink,
// } from "./Skills.styled";

// export const Skills = () => {
//   const { t } = useTranslation();
//   const cardControls = useAnimationControls();
//   const listControls = useAnimationControls();

//   return (
//     <SkillsSections id="skills">
//       <SkillsContainer>
//         <WrapperTitle
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Title> {t("skills.title")}</Title>
//           <SubTitle>{t("skills.subtitle")}</SubTitle>
//         </WrapperTitle>

//         <Categories>
//           {categories.map(({ title, skills }) => (
//             <SkillsCard
//               key={title}
//               variants={cardVariants}
//               initial="hidden"
//               animate={cardControls}
//               onViewportEnter={() => {
//                 cardControls.start("visible");
//                 listControls.start("visible");
//               }}
//               onViewportLeave={() => {
//                 cardControls.start("hidden");
//                 listControls.start("hidden");
//               }}
//               viewport={{ amount: 0.3 }}
//             >
//               <CategoryTitle>{title}</CategoryTitle>
//               <SkillList
//                 variants={listVariants}
//                 initial="hidden"
//                 animate={listControls}
//               >
//                 {skills.map(({ name, link }) => {
//                   const Icon = iconMap[name] ?? CheckCircle;
//                   return (
//                     <motion.li key={name} variants={itemVariants}>
//                       <SkillLink to={link}>
//                         <Icon /> {name}
//                       </SkillLink>
//                     </motion.li>
//                   );
//                 })}
//               </SkillList>
//             </SkillsCard>
//           ))}
//         </Categories>
//       </SkillsContainer>
//     </SkillsSections>
//   );
// };
/*************************************************** */
// import { useAnimationControls, motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { SubTitle } from "../../shared/SubTitle";
// import { Title } from "../../shared/Title";
// import {
//   cardVariants,
//   iconMap,
//   itemVariants,
//   listVariants,
// } from "./Skils.const";
// import {
//   SkillsCard,
//   Categories,
//   CategoryTitle,
//   SkillList,
//   SkillsContainer,
//   SkillsSections,
//   WrapperTitle,
//   SkillLink,
// } from "./Skills.styled";
// import { selectProfile } from "../../redux/user/selectors";
// import { useSelector } from "react-redux";
// import { LangText } from "../../App.type";

// export const Skills = () => {
//   const { t, i18n } = useTranslation();
//   const lang = i18n.language as keyof LangText;
//   const cardControls = useAnimationControls();
//   const listControls = useAnimationControls();

//   const profile = useSelector(selectProfile);
//   console.log(name);
//   console.log(lang);

//   return (
//     <SkillsSections id="skills">
//       <SkillsContainer>
//         <WrapperTitle
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Title>{t("skills.title")}</Title>
//           <SubTitle>{t("skills.subtitle")}</SubTitle>
//         </WrapperTitle>

//         <Categories>
//           {profile?.skills?.map(({ category, items }) => {
//             const categoryName = category?.[lang] || category?.en;

//             return (
//               <SkillsCard
//                 key={categoryName}
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate={cardControls}
//                 onViewportEnter={() => {
//                   cardControls.start("visible");
//                   listControls.start("visible");
//                 }}
//                 onViewportLeave={() => {
//                   cardControls.start("hidden");
//                   listControls.start("hidden");
//                 }}
//                 viewport={{ amount: 0.3 }}
//               >
//                 <CategoryTitle>{categoryName}</CategoryTitle>

//                 <SkillList
//                   variants={listVariants}
//                   initial="hidden"
//                   animate={listControls}
//                 >
//                   {items.map(({ name, link }) => {
//                     // const skillName = name?.[lang] || name?.en;
//                     const skillName =
//                       typeof name === "object" && name !== null
//                         ? name[lang] || name.en // Якщо є переклад, беремо його
//                         : name; // Якщо name - рядок, беремо його без змін

//                     const Icon = iconMap[skillName] ?? CheckCircle;

//                     return (
//                       // <motion.li key={skillName} variants={itemVariants}>
//                       <motion.li
//                         key={`${skillName}-${link}`}
//                         variants={itemVariants}
//                       >
//                         <SkillLink to={link}>
//                           <Icon /> {skillName}
//                         </SkillLink>
//                       </motion.li>
//                     );
//                   })}
//                 </SkillList>
//               </SkillsCard>
//             );
//           })}
//         </Categories>
//       </SkillsContainer>
//     </SkillsSections>
//   );
// };
/************************************************** */

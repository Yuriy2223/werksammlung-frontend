import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { SocialContact } from "../SocialBlock/SocialBlock";
import { selectProfile } from "../../redux/user/selectors";
import { API_URL } from "../../services/Api";
import {
  AboutBtn,
  AboutContainer,
  AboutSection,
  ContextInner,
  AboutWrapBottom,
  WrapperContext,
  WrapperImg,
  AboutWrapTop,
  ToContact,
} from "./About.styled";

export const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const profile = useSelector(selectProfile);
  const lang = i18n.language.toLowerCase() as "en" | "ua" | "de";
  const fullName = `${profile?.firstName?.[lang] || ""} ${
    profile?.lastName?.[lang] || ""
  }`;

  const handleOpenCV = () => {
    if (!profile?._id) return;
    window.open(`${API_URL}${profile.viewCV}`, "_blank");
  };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutWrapTop>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            style={{ flex: 1 }}
          >
            <WrapperImg>
              <img
                width="400px"
                height="400px"
                src={profile?.avatarUrl}
                alt={`${fullName} portrait`}
              />
            </WrapperImg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            style={{ flex: 1 }}
          >
            <WrapperContext>
              <ContextInner>
                <p>{t("about.hi")}</p>
                <h1>{fullName}</h1>
                <p>{t("about.full")}</p>
                <p>{t("about.dev")}</p>
                <ToContact>
                  <AboutBtn onClick={handleOpenCV}>
                    <FileText size={20} /> {t("buttons.wiewcv")}
                  </AboutBtn>
                  <SocialContact />
                </ToContact>
              </ContextInner>
            </WrapperContext>
          </motion.div>
        </AboutWrapTop>
        <AboutWrapBottom>
          <p>{profile?.about[lang]}</p>
        </AboutWrapBottom>
      </AboutContainer>
    </AboutSection>
  );
};

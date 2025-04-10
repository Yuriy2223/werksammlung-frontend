import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import imgUrl1 from "../../assets/порт1111.webp";
import {
  AboutBtn,
  AboutContainer,
  AboutSection,
  Context,
  WrapperContext,
  WrapperImg,
} from "./About.styled";

export const About: React.FC = () => {
  const { t } = useTranslation();
  const imgUrl = imgUrl1;
  const fullName = "Yuriy Shukan";

  const handleOpenCV = () => {
    const fileId = "660f123456abc7890abcde12";
    const url = `http://localhost:3000/pdf/${fileId}`;

    window.open(url, "_blank");
  };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          style={{ flex: 1 }}
        >
          <WrapperImg>
            <img
              width="400px"
              height="400px"
              src={imgUrl}
              alt={`${fullName} portrait`}
            />
          </WrapperImg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          style={{ flex: 1 }}
        >
          <WrapperContext>
            <Context>
              <p>{t("about.hi")}</p>
              <h1>{fullName}.</h1>
              <p>{t("about.full")}</p>
              <p>{t("about.dev")}</p>
              <AboutBtn onClick={handleOpenCV}>
                <FileText size={20} /> {t("buttons.wiewcv")}
              </AboutBtn>
            </Context>
          </WrapperContext>
        </motion.div>
      </AboutContainer>
    </AboutSection>
  );
};

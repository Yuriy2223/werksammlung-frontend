import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import imgUrl1 from "../../assets/порт1111.webp";
import {
  AboutBtn,
  AboutContainer,
  AboutSlogan,
  // AboutSubTitle,
  // AboutTitle,
  WrapperContext,
  WrapperImg,
} from "./About.styled";

export const About = () => {
  const imgUrl = imgUrl1;
  const fullName = "Yuriy Shukan";
  //  const slogan = "I specialize in building high-performance web applications using
  //                 the latest technologies like";
  const handleOpenCV = () => {
    const fileId = "660f123456abc7890abcde12";
    const url = `http://localhost:3000/pdf/${fileId}`;

    window.open(url, "_blank");
  };

  return (
    <section id="about">
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
            <AboutSlogan>
              <p>Hi, I’m</p>
              <h1>{fullName}.</h1>
              <p>I’m a Full-Stack JavaScript Developer</p>
              {/* <p>
                I specialize in building high-performance web applications using
                the latest technologies like React, Node.js, and MongoDB.
              </p> */}
            </AboutSlogan>
            <AboutBtn onClick={handleOpenCV}>
              <FileText size={20} /> VIEW CV
            </AboutBtn>
          </WrapperContext>
        </motion.div>
      </AboutContainer>
    </section>
  );
};

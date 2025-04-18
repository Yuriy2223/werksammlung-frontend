import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import {
  containerVariants,
  itemVariants,
  SocialLink,
  SocialLinks,
} from "./SocialBlock.styled";

export const SocialBlock = () => {
  return (
    <SocialLinks
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      <SocialLink
        href="https://github.com"
        target="_blank"
        variants={itemVariants}
        whileHover="whileHover"
      >
        <Github size={20} />
      </SocialLink>
      <SocialLink
        href="https://github.com"
        target="_blank"
        variants={itemVariants}
        whileHover="whileHover"
      >
        <Send size={20} />
      </SocialLink>

      <SocialLink
        href="https://linkedin.com"
        target="_blank"
        variants={itemVariants}
        whileHover="whileHover"
      >
        <Linkedin size={20} />
      </SocialLink>

      <SocialLink
        href="mailto:you@example.com"
        variants={itemVariants}
        whileHover="whileHover"
      >
        <Mail size={20} />
      </SocialLink>

      <SocialLink
        href="https://www.google.com/maps/place/Запоріжжя"
        target="_blank"
        variants={itemVariants}
        whileHover="whileHover"
      >
        <MapPin size={20} />
      </SocialLink>
    </SocialLinks>
  );
};

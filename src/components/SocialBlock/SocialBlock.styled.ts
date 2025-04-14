import { motion } from "framer-motion";
import styled from "styled-components";

export const SocialLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const SocialLink = styled(motion.a)`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colorText};
  border: 2px solid ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.secondary};

  svg {
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.svg};
  }

  &:hover,
  &:active {
    box-shadow: 0 0 20px ${({ theme }) => theme.colorText};
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  whileHover: { scale: 1.1 },
};

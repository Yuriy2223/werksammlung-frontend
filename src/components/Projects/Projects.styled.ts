import styled from "styled-components";
import { Container } from "../../shared/Container";
import { motion } from "framer-motion";

export const ProjectsSection = styled.section`
  background-color: ${({ theme }) => theme.bgBody};
`;
export const ProjectsContainer = styled(Container)`
  padding: 40px 20px;
`;
export const ProjectsGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

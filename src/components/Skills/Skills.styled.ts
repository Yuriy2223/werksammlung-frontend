import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../../shared/Container";

export const SkillsSections = styled.section`
  background-color: ${({ theme }) => theme.bgBody};
`;
export const SkillsContainer = styled(Container)`
  padding: 40px 20px;
`;
export const WrapperTitle = styled(motion.div)`
  margin-bottom: 40px;
  text-align: center;
`;
export const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
`;
export const SkillsCard = styled(motion.div)`
  border-radius: 12px;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.colorText};
  box-shadow: 0 0 8px ${({ theme }) => theme.colorText};
  color: ${({ theme }) => theme.colorText};
  transition: all 300ms ease;

  &:hover {
    transform: translateY(-6px) scale(1.5);
    box-shadow: 0 0 20px ${({ theme }) => theme.colorText};
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  /* color: #0097a7; */
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #d0ecf3;
  padding-bottom: 0.5rem;
`;

export const SkillList = styled(motion.ul)`
  list-style: none;
`;

export const Skill = styled(motion.li)`
  font-size: 1.1rem;
  /* color: #2c3e50; */
  margin-bottom: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    color: #00bfa5;
    /* font-size: 1.2rem; */
    font-size: 16px;
  }
`;

// export const SkillsSection = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 800px;
//   border: 2px solid white;
// `;

// export const Section = styled.section`
//   padding: 4rem 2rem;
//   background-color: #f9f9f9;
// `;

// export const Title = styled.h2`
//   font-size: 2.5rem;
//   text-align: center;
//   margin-bottom: 3rem;
//   color: #333;
// `;

// export const Categories = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 2rem;
// `;

// export const Category = styled.div`
//   background: white;
//   border-radius: 1rem;
//   padding: 2rem;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// export const CategoryTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
//   color: #007acc;
// `;

// export const Skill = styled.li`
//   list-style: none;
//   font-size: 1rem;
//   margin-bottom: 0.5rem;
//   position: relative;
//   padding-left: 1.2rem;

//   &::before {
//     content: "✔";
//     position: absolute;
//     left: 0;
//     color: #00b894;
//   }
// `;

// export const SkillList = styled.ul`
//   padding: 0;
//   margin: 0;
// `;

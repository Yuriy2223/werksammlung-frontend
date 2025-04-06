import styled from "styled-components";

export const SkillsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  border: 2px solid white;
`;

export const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

export const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const Category = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #007acc;
`;

export const Skill = styled.li`
  list-style: none;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: "✔";
    position: absolute;
    left: 0;
    color: #00b894;
  }
`;

export const SkillList = styled.ul`
  padding: 0;
  margin: 0;
`;

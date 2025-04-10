import styled from "styled-components";

export const CardWrapper = styled.div`
  perspective: 1500px;
  width: 100%;
  height: 400px;
`;
export const CardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s ease;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "none")};

  @media (hover: hover) {
    ${CardWrapper}:hover & {
      transform: rotateY(180deg);
    }
  }
`;
export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const FrontFace = styled(CardFace)`
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.colorText};
  box-shadow: 0 0 8px ${({ theme }) => theme.colorText};
`;
export const BackFace = styled(CardFace)`
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.colorText};
  box-shadow: 0 0 8px ${({ theme }) => theme.colorText};
  transform: rotateY(180deg);
  justify-content: space-between;
`;
export const ProjectImg = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;
export const ProjectTitle = styled.h3`
  margin: 30px auto;
  font-size: 20px;
  font-weight: 700;
`;
export const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;
export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;
`;
export const ProjectRole = styled.p`
  font-size: 0.9rem;
`;
export const TechTag = styled.span`
  background-color: #00bcd4;
  color: white;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 1rem;
`;

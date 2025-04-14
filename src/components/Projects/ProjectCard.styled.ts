import styled from "styled-components";

export const CardWrapper = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 400px;
`;
export const CardInner = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1.3s ease;
  transform-style: preserve-3d;
  transform: ${({ $isFlipped }) => ($isFlipped ? "rotateY(180deg)" : "none")};

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
  box-shadow: 0 0 20px ${({ theme }) => theme.colorText};
  transform: rotateY(180deg);
  justify-content: space-between;
`;
export const ProjectImg = styled.img`
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
`;
export const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
  padding-bottom: 6px;
  /* border-bottom: 2px solid ${({ theme }) => theme.colorText}; */
  border-bottom: 2px solid ${({ theme }) => theme.svg};
`;
export const ProjectTechnologies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProjectDescription = styled.p`
  font-size: 16px;
`;
export const ProjectRole = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  margin-left: 8px;

  span {
    margin-left: 8px;
  }
`;
export const TechTag = styled.span`
  color: ${({ theme }) => theme.colorText};
`;
export const ProjectDte = styled.p`
  text-align: center;
  font-size: 14px;
`;

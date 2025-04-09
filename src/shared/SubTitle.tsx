import React from "react";
import styled from "styled-components";

const WrapperSubTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colorText};
  font-weight: 500;
  line-height: 1.4;
  font-size: 24px;
  margin-bottom: 40px;
  text-shadow: -2px 2px 10px ${({ theme }) => theme.colorText};
`;

interface SubTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return <WrapperSubTitle>{children}</WrapperSubTitle>;
};

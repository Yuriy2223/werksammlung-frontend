import React from "react";
import styled from "styled-components";

const WrapperTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  line-height: 1.4;
  font-size: 36px;
  color: ${({ theme }) => theme.colorText};
  text-shadow: -3px 3px 20px ${({ theme }) => theme.colorText};
`;

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <WrapperTitle>{children}</WrapperTitle>;
};

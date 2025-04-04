import React from "react";
import styled from "styled-components";

const BtnWrapper = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.colorText};
  border: 1px solid ${({ theme }) => theme.colorText};
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <BtnWrapper className={className} onClick={onClick}>
      {children}
    </BtnWrapper>
  );
};

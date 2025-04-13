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
  gap: 8px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.colorText};
  border: 1px solid ${({ theme }) => theme.colorText};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.colorText};
    box-shadow: 0 0 26px ${({ theme }) => theme.colorText};
  }
`;

interface ButtonProps {
  type?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
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

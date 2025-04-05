import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  P {
    padding-bottom: 4px;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorText};
    word-spacing: 8px;
    position: relative;
    transition: all 300ms ease;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colorText};
      transition: width 300ms ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const Logo: React.FC = () => {
  const fullName = "Yuriy Shukan";

  return (
    <LogoContainer
      to="/"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <p>{fullName}</p>
    </LogoContainer>
  );
};

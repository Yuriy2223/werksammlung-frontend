import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  P {
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorText};
    word-spacing: 8px;
  }
`;

export const Logo: React.FC = () => {
  return (
    <LogoContainer
      to="/"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <p>Yuriy Shukan</p>
    </LogoContainer>
  );
};

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;

  P {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colorText};
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

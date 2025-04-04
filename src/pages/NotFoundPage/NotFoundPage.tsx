import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../components/shared/Container";
import styled from "styled-components";

export const NotFoundContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;
const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <p>Ooops! This page not found :(</p>

      <NavLink to="/">To home page</NavLink>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

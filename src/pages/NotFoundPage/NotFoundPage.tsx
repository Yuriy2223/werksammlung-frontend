import React from "react";
import { NavLink } from "react-router-dom";
import { NotFoundContainer } from "./NotFoundPage.styled";

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <p>Ooops! This page not found :(</p>

      <NavLink to="/">To home page</NavLink>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

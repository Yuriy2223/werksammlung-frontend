import React from "react";
import styled from "styled-components";
import { Container } from "../../shared/Container";

export const UserPageContainer = styled(Container)``;

const UserPage: React.FC = () => {
  return (
    <UserPageContainer>
      <h1>UserPage</h1>
    </UserPageContainer>
  );
};

export default UserPage;

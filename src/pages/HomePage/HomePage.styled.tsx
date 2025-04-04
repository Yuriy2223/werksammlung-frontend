import React from "react";
import styled from "styled-components";
import { Container } from "../../components/shared/Container";

export const HomePageContainer = styled(Container)``;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <h1>HomePage</h1>
    </HomePageContainer>
  );
};

export default HomePage;

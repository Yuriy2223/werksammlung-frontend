import React from "react";
import { HomePageContainer } from "./HomePage.styled";
import { About } from "../../components/About/About";
import { Contact } from "../../components/Contact/Contact";
import { Projects } from "../../components/Projects/Projects";
import { Skils } from "../../components/Skils/Skils";

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <h1>HomePage</h1>
      <About />
      <Projects />
      <Skils />
      <Contact />
    </HomePageContainer>
  );
};

export default HomePage;

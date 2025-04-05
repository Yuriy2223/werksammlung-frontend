import React from "react";
import { HomePageContainer } from "./HomePage.styled";
import { About } from "../../components/About/About";
import { Contact } from "../../components/Contact/Contact";
import { Projects } from "../../components/Projects/Projects";
import { Skills } from "../../components/Skills/Skills";

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </HomePageContainer>
  );
};

export default HomePage;

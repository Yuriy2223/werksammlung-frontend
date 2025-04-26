import { HomePageContainer } from "./HomePage.styled";
import { About } from "../../components/About/About";
import { Projects } from "../../components/Projects/Projects";
import { Skills } from "../../components/Skills/Skills";
import { Contact } from "../../components/Contact/Contact";

const HomePage = () => {
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

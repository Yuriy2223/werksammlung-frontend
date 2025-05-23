import { HomePageContainer } from "./HomePage.styled";
import { About } from "../../components/About/About";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Contact } from "../../components/Contact/Contact";
import { useEffect } from "react";
import { fetchProfile } from "../../redux/profile/operations";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectProfile } from "../../redux/profile/selectors";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    if (!profile) {
      dispatch(fetchProfile());
    }
  }, [dispatch, profile]);

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

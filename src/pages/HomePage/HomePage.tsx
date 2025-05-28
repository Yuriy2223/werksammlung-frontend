import { useSelector } from "react-redux";
import { About } from "../../components/About/About";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Contact } from "../../components/Contact/Contact";
import { useEffect } from "react";
import { fetchProfile } from "../../redux/profile/operations";
import { useAppDispatch } from "../../redux/store";
import { Loader } from "../../loader/Loader";
import {
  selectError,
  selectLoading,
  selectProfile,
} from "../../redux/profile/selectors";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const profile = useSelector(selectProfile);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!profile && !loading && !error) {
      dispatch(fetchProfile());
    }
  }, [dispatch, profile, loading, error]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;

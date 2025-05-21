import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useTrackVisit } from "../../hooks/useTrackVisit";
import { ModalUniversal } from "../../modals/UniversalModal/UniversalModal";
import {
  FooterWrapper,
  HeaderWrapper,
  LayoutWrapper,
  MainWrapper,
} from "./Layout.styled";

export const Layout = () => {
  useTrackVisit();

  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
      <ModalUniversal />
    </LayoutWrapper>
  );
};

import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../Header/Header";

const LayoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.bgBody};
  min-height: 100vh;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MainWrapper = styled.main`
  padding-top: 80px;
`;

export const Layout = () => {
  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </LayoutWrapper>
  );
};

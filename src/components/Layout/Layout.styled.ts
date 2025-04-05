import styled from "styled-components";

export const LayoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.bgBody};
  color: ${({ theme }) => theme.colorText};
  min-height: 100vh;
`;
export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const MainWrapper = styled.main`
  padding-top: 80px;
  background-color: ${({ theme }) => theme.primary};
`;
export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.secondary};
`;

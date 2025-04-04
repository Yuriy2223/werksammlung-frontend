import { ThemeType } from "../../styles/Theme";
import { Logo } from "../Logo/Logo";
import { Container } from "../shared/Container";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavList = styled.nav`
  display: flex;
  align-items: center;
`;
export const BtnLogin = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.colorText};
  border: 1px solid ${({ theme }) => theme.colorText};
`;

interface HeaderProps {
  toggleTheme: (theme: ThemeType) => void;
  currentTheme: ThemeType;
}

export const Header: React.FC<HeaderProps> = ({
  toggleTheme,
  currentTheme,
}) => {
  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <ThemeSwitcher toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <NavList>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </NavList>
        <BtnLogin>login</BtnLogin>
      </HeaderContainer>
    </Container>
  );
};

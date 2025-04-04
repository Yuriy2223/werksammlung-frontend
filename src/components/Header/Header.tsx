import React from "react";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Logo } from "../Logo/Logo";
import { Container } from "../shared/Container";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { BtnLogin, HeaderContainer, NavList } from "./Header.styled";

export const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <ThemeSwitcher />
        <LanguageSwitcher />
        <NavList>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>
        </NavList>
        <BtnLogin>login</BtnLogin>
      </HeaderContainer>
    </Container>
  );
};

/***************************** */

// import { useState } from "react";
// import { ThemeType } from "../../styles/Theme";
// import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
// import { Logo } from "../Logo/Logo";
// import { Container } from "../shared/Container";
// import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
// import { BtnLogin, HeaderContainer, NavList } from "./Header";
// import { translations } from "../shared/locales";

// interface HeaderProps {
//   toggleTheme: (theme: ThemeType) => void;
//   currentTheme: ThemeType;
// }

// export const Header: React.FC<HeaderProps> = ({
//   toggleTheme,
//   currentTheme,
// }) => {
//   const [lang, setLang] = useState(localStorage.getItem("lang") || "EN");
//   return (
//     <Container>
//       <HeaderContainer>
//         <Logo />
//         <ThemeSwitcher toggleTheme={toggleTheme} currentTheme={currentTheme} />
//         <LanguageSwitcher onLanguageChange={setLang} />
//         <NavList>
//           <a href="#home">{translations[lang].home}</a>
//           <a href="#about">{translations[lang].about}</a>
//           <a href="#projects">{translations[lang].projects}</a>
//           <a href="#contact">{translations[lang].contact}</a>
//         </NavList>
//         <BtnLogin>login</BtnLogin>
//       </HeaderContainer>
//     </Container>
//   );
// };

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LogIn } from "lucide-react";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Logo } from "../Logo/Logo";
import { Container } from "../../shared/Container";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import {
  BtnLogin,
  HeaderContainer,
  NavList,
  UserActions,
} from "./Header.styled";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.offsetTop - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <NavList>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className={activeSection === "about" ? "active" : ""}
          >
            {t("nav.about")}
          </a>
          <a
            href="#skils"
            onClick={(e) => handleNavClick(e, "skils")}
            className={activeSection === "skils" ? "active" : ""}
          >
            {t("nav.skils")}
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className={activeSection === "projects" ? "active" : ""}
          >
            {t("nav.projects")}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            {t("nav.contact")}
          </a>
        </NavList>
        <UserActions>
          <ThemeSwitcher />
          <LanguageSwitcher />
          <BtnLogin>
            {t("buttons.login")}{" "}
            <span>
              <LogIn />
            </span>
          </BtnLogin>
        </UserActions>
      </HeaderContainer>
    </Container>
  );
};

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LogIn } from "lucide-react";
import { useAppDispatch } from "../../redux/store";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Logo } from "../Logo/Logo";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import {
  BtnLogin,
  HeaderContainer,
  NavList,
  UserActions,
} from "./Header.styled";
import { openModal } from "../../redux/modal/slice";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const headerOffset = 80;
      const scrollPos = window.scrollY + headerOffset + 1;

      let current = "";

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          current = section.id;
        }
      });

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        current = "contact";
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    const headerHeight = 80;
    if (target) {
      const offsetTop = target.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeaderContainer>
      <Logo />
      <NavList role="navigation" aria-label="Main navigation">
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, "about")}
          className={activeSection === "about" ? "active" : ""}
        >
          {t("header.about")}
        </a>
        <a
          href="#skills"
          onClick={(e) => handleNavClick(e, "skills")}
          className={activeSection === "skills" ? "active" : ""}
        >
          {t("header.skills")}
        </a>
        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, "projects")}
          className={activeSection === "projects" ? "active" : ""}
        >
          {t("header.projects")}
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          {t("header.contact")}
        </a>
      </NavList>
      <UserActions>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <BtnLogin
          type="button"
          onClick={() => dispatch(openModal({ type: "ModalSignIn" }))}
        >
          {t("buttons.login")}
          <span>
            <LogIn size={22} />
          </span>
        </BtnLogin>
      </UserActions>
    </HeaderContainer>
  );
};

import React, { useEffect } from "react";
import { CloseButton, BurgerMenuContainer, Overlay } from "./BurgerMenu.styled";
import { Navigation } from "../Navigation/Navigation";
import { X } from "lucide-react";
import { UserActions } from "../UserActions/UserActions";

export const BurgerMenu: React.FC<{
  isOpen: boolean;
  closeMenu: () => void;
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}> = ({ isOpen, closeMenu, activeSection, onNavClick }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <Overlay $isOpen={isOpen} onClick={closeMenu}>
      <BurgerMenuContainer
        $isOpen={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={closeMenu} aria-label="Close menu">
          <X size={36} />
        </CloseButton>
        <Navigation activeSection={activeSection} onNavClick={onNavClick} />
        <UserActions />
      </BurgerMenuContainer>
    </Overlay>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import { LogIn } from "lucide-react";
import { useAppDispatch } from "../../redux/store";
import { openModal } from "../../redux/modal/slice";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { BtnLogin, UserActionsWrapper } from "./UserActions.styled";

export const UserActions: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <UserActionsWrapper>
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
    </UserActionsWrapper>
  );
};

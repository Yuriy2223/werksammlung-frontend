import React from "react";
import { useTranslation } from "react-i18next";
import { FooterContainer } from "./Footer.steled";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const fullName = "Yuriy Shukan";
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <p>{`© ${currentYear} ${fullName}. ${t("footer.copyright")}`}</p>
    </FooterContainer>
  );
};

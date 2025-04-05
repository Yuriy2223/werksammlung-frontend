import React from "react";
import { useTranslation } from "react-i18next";
import { FooterContainer } from "./Footer.steled";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const fullName = "Yuriy Shukan";

  return (
    <FooterContainer>
      <p>{`© 2025 ${fullName}. ${t("footer.copyright")}`}</p>
    </FooterContainer>
  );
};

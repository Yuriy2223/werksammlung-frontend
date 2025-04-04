import React, { useState, useEffect } from "react";
import { Language } from "../shared/locales";
import { Button } from "../shared/Button";

const languages: Language[] = ["EN", "UA", "DE"];

interface Props {
  onLanguageChange?: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<Props> = ({ onLanguageChange }) => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    return (localStorage.getItem("lang") as Language) || "EN";
  });

  const handleSwitchLanguage = () => {
    const currentIndex = languages.indexOf(currentLang);
    const nextLang = languages[(currentIndex + 1) % languages.length];
    setCurrentLang(nextLang);
    localStorage.setItem("lang", nextLang);
    onLanguageChange?.(nextLang);
  };

  useEffect(() => {
    onLanguageChange?.(currentLang);
  }, [currentLang, onLanguageChange]);

  return <Button onClick={handleSwitchLanguage}>Language:{currentLang}</Button>;
};
/************************************************************** */
// import React, { useState, useEffect } from "react";
// import { Language } from "../shared/locales";
// import { Button } from "../shared/Button";

// const languages: Language[] = ["EN", "UA", "DE"];

// interface Props {
//   onLanguageChange?: (lang: Language) => void;
// }

// export const LanguageSwitcher: React.FC<Props> = ({ onLanguageChange }) => {
//   const [currentLang, setCurrentLang] = useState<Language>(() => {
//     return (localStorage.getItem("lang") as Language) || "EN";
//   });

//   const handleSwitchLanguage = () => {
//     const currentIndex = languages.indexOf(currentLang);
//     const nextLang = languages[(currentIndex + 1) % languages.length];
//     setCurrentLang(nextLang);
//     localStorage.setItem("lang", nextLang);
//     onLanguageChange?.(nextLang);
//   };

//   useEffect(() => {
//     onLanguageChange?.(currentLang);
//   }, [currentLang, onLanguageChange]);

//   const getLanguageText = (lang: Language) => {
//     switch (lang) {
//       case "EN":
//         return "Language: EN";
//       case "UA":
//         return "Мова: UA";
//       case "DE":
//         return "Sprache: DE";
//       default:
//         return "Language";
//     }
//   };

//   return (
//     <Button onClick={handleSwitchLanguage}>
//       {getLanguageText(currentLang)}
//     </Button>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { Language } from "../shared/locales";
// import { Button } from "../shared/Button";

// interface Props {
//   onLanguageChange?: (lang: Language) => void;
// }

// export const LanguageSwitcher: React.FC<Props> = ({ onLanguageChange }) => {
//   const [currentLang, setCurrentLang] = useState<Language>(() => {
//     return (localStorage.getItem("lang") as Language) || "EN";
//   });

//   const handleSwitchLanguage = () => {
//     const currentIndex = languages.indexOf(currentLang);
//     const nextLang = languages[(currentIndex + 1) % languages.length];
//     setCurrentLang(nextLang);
//     localStorage.setItem("lang", nextLang);
//     onLanguageChange?.(nextLang);
//   };

//   useEffect(() => {
//     onLanguageChange?.(currentLang);
//   }, [currentLang, onLanguageChange]);

//   const getButtonLabel = (button: string) => {
//     return buttonLabels[currentLang][button];
//   };

//   return (
//     <div>
//       <Button onClick={handleSwitchLanguage}>
//         {getButtonLabel("language")}: {currentLang}
//       </Button>
//       <Button>{getButtonLabel("save")}</Button>
//       <Button>{getButtonLabel("cancel")}</Button>
//     </div>
//   );
// };

// import React from "react";
// import { Button } from "../shared/Button";

// export const LanguageSwitcher: React.FC = () => {
//   const { translate, changeLanguage, currentLang } = useTranslation();

//   const handleSwitchLanguage = () => {
//     const languages: Language[] = ["EN", "UA", "DE"];
//     const nextLang =
//       languages[(languages.indexOf(currentLang) + 1) % languages.length];
//     changeLanguage(nextLang);
//   };

//   return (
//     <div>
//       <Button onClick={handleSwitchLanguage}>
//         {translate("language")}: {currentLang}
//       </Button>
//       <h1>{translate("greeting")}</h1>
//       <p>{translate("description")}</p>
//       <Button>{translate("save")}</Button>
//       <Button>{translate("cancel")}</Button>
//     </div>
//   );
// };

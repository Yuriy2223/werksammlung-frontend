// import { useState } from "react";

// const useTranslation = () => {
//   const [currentLang, setCurrentLang] = useState<Language>(() => {
//     return (localStorage.getItem("lang") as Language) || "EN";
//   });

//   const changeLanguage = (lang: Language) => {
//     setCurrentLang(lang);
//     localStorage.setItem("lang", lang);
//   };

//   const translate = (key: string) => {
//     return translations[currentLang][key] || key;
//   };

//   return { translate, changeLanguage, currentLang };
// };

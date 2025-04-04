export type Language = "EN" | "UA" | "DE";

// export const translations: Record<
//   Languages,
//   {
//     home: string;
//     about: string;
//     projects: string;
//     contact: string;
//   }
// > = {
//   EN: {
//     home: "Home",
//     about: "About",
//     projects: "Projects",
//     contact: "Contact",
//   },
//   UA: {
//     home: "Головна",
//     about: "Про нас",
//     projects: "Проєкти",
//     contact: "Контакти",
//   },
//   DE: {
//     home: "Startseite",
//     about: "Über uns",
//     projects: "Projekte",
//     contact: "Kontakt",
//   },
// };

export const translations: Record<Language, Record<string, string>> = {
  EN: {
    language: "Language",
    save: "Save",
    cancel: "Cancel",
    greeting: "Hello, welcome to our website!",
    description: "Here you can find various pet adoption options.",
  },
  UA: {
    language: "Мова",
    save: "Зберегти",
    cancel: "Скасувати",
    greeting: "Привіт, ласкаво просимо на наш сайт!",
    description: "Тут ви можете знайти різні варіанти усиновлення тварин.",
  },
  DE: {
    language: "Sprache",
    save: "Speichern",
    cancel: "Abbrechen",
    greeting: "Hallo, willkommen auf unserer Website!",
    description: "Hier finden Sie verschiedene Optionen für die Tieradoption.",
  },
};

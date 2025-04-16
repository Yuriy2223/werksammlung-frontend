# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

    /* box-shadow: 0 0 20px #00bcd4; */
    /* text-shadow: 2px 2px 6px rgba(0, 188, 212, 0.7); */

return (
// Компонент модального оверлею з анімацією прозорості (fade-in/out)
<OverlayModal
as={motion.div} // Додає анімації від Framer Motion до компонента
onClick={closeHandler} // Закриває модалку при кліку на фон (оверлей)
initial={{ opacity: 0 }} // Початковий стан: прозорість 0 (невидимо)
animate={{ opacity: 1 }} // Анімація до: прозорість 1 (видимо)
exit={{ opacity: 0 }} // При закритті: анімація назад до прозорості 0
transition={{ duration: 0.3 }} // Тривалість анімації 0.3 секунди

>

    {/* Основний вміст модалки з анімацією масштабу та прозорості */}
    <ModalContent
      as={motion.div} // Анімація контенту також через motion.div
      onClick={(e) => e.stopPropagation()} // Зупиняє клік, щоб не закрити модалку при натисканні на її контент
      initial={{ scale: 0.8, opacity: 0 }} // Початковий стан: зменшений розмір і невидимість
      animate={{ scale: 1, opacity: 1 }} // Анімація до повного розміру і видимості
      exit={{ scale: 0.8, opacity: 0 }} // При закритті: зменшення і зникнення
      transition={{ type: "spring", stiffness: 300, damping: 25 }} // "Пружинна" анімація з певною жорсткістю та демпфінгом
    >
      {/* Кнопка закриття модалки */}
      <CloseButton onClick={closeHandler}>
        <X size={36} /> {/* Іконка "хрестика" для закриття */}
      </CloseButton>

      {/* Вміст, який рендериться динамічно залежно від контексту */}
      {renderModalContent()}
    </ModalContent>

  </OverlayModal>
);

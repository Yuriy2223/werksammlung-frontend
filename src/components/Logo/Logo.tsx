import React, { useEffect, useState } from "react";
import { LogoContainer } from "./Logo.styled";

export const Logo: React.FC = () => {
  const fullText = "Yuriy Shukan";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingTimeout: ReturnType<typeof setTimeout>;

    if (index <= fullText.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index));
        setIndex((prev) => prev + 1);
      }, 150);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 4000);
    }

    return () => clearTimeout(typingTimeout);
  }, [index, fullText]);

  return (
    <LogoContainer
      to="/"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <p>
        {displayedText}
        <span className="cursor">|</span>
      </p>
    </LogoContainer>
  );
};

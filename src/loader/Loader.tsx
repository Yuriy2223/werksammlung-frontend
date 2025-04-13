import React from "react";
import { Dot, LoaderWrapper, Ring, Title } from "./Loader.styled";

export const Loader: React.FC = () => (
  <LoaderWrapper>
    <Ring size={105} color="#00f0ff" duration={2.6} />

    <Ring size={85} color="#ff00f7" duration={2.2} reverse />

    <Ring size={65} color="#ffff00" duration={2} />

    <Ring size={40} color="#00ff41" duration={1.8} reverse />

    {/* <Ring size={130} color="#ff6a00" duration={2} /> */}

    <Dot />
    <Title>Завантаження портфоліо…</Title>
  </LoaderWrapper>
);
// <Ring size={100} color="#00f0ff" duration={2.2} />

// <Ring size={80} color="#ff00f7" duration={1.9} reverse />

// <Ring size={60} color="#ffff00" duration={1.6} />

// <Ring size={40} color="#00ff41" duration={1.4} reverse />

// <Ring size={130} color="#ff6a00" duration={2} />

import React from "react";
import { NavLink } from "react-router-dom";
import { NotFoundContainer } from "./NotFoundPage.styled";

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <p>Ooops! This page not found :(</p>

      <NavLink to="/">To home page</NavLink>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

/**************матриця************** */
import { useEffect, useRef } from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* color: #00ff41; */
  color: #00f0ffcc;
  font-family: monospace;
  overflow: hidden;
  position: relative;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

const Text = styled.div`
  z-index: 1;
  font-size: 1.5rem;
  margin-top: 20px;
`;

export const Loader = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters: number[] = Array(256).fill(0);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      /* ctx.fillStyle = "#0F0"; */
      ctx.fillStyle = "#00f0ffcc";
      letters.forEach((y_pos, index) => {
        const text = String.fromCharCode(0x30a0 + Math.random() * 96);
        const x_pos = index * 10;
        ctx.fillText(text, x_pos, y_pos);
        letters[index] = y_pos > 758 + Math.random() * 1e4 ? 0 : y_pos + 10;
      });
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoaderWrapper>
      <Canvas ref={canvasRef} />
      <Text>Ups... 404</Text>
    </LoaderWrapper>
  );
};

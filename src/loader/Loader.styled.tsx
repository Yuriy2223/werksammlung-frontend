import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 1; }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #0d0d0d;
  position: relative;
`;

export const Ring = styled.div<{
  $size: number;
  $color: string;
  $duration: number;
  $reverse?: boolean;
}>`
  position: absolute;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border: 4px solid transparent;
  border-top: 4px solid ${(props) => props.$color};
  border-radius: 50%;
  animation: ${rotate} ${(props) => props.$duration}s linear infinite;
  animation-direction: ${(props) => (props.$reverse ? "reverse" : "normal")};
  filter: drop-shadow(0 0 6px ${(props) => props.$color});
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border-radius: 50%;
  animation: ${pulse} 1.4s infinite ease-in-out;
  position: absolute;
`;

export const Title = styled.h1`
  margin-top: 170px;
  font-size: 1.2rem;
  color: #ffffffbb;
  font-family: "Courier New", Courier, monospace;
  animation: ${fadeInUp} 1.4s ease-out;
`;

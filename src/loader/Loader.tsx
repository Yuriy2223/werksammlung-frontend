import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;
const shimmer = keyframes`
  0% {
    background-position: -150%;
  }
  100% {
    background-position: 150%;
  }
`;
const blinkDots = keyframes`
  0%   { content: ''; }
  20%  { content: '.'; }
  40%  { content: '..'; }
  60%  { content: '...'; }
  80%  { content: '....'; }
  100% { content: ''; }
`;
const LoaderOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;
const Glow = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, #ffffff 30%, #ffffff00 70%);
  animation: ${fadeInOut} 1.4s ease-in-out infinite;
`;
const LoadingText = styled.div`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 400;
  margin-left: 8px;

  position: relative;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.85) 50%,
    rgba(255, 255, 255, 0.2) 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${shimmer} 6s linear infinite;

  &::after {
    content: "";
    animation: ${blinkDots} 2s steps(5, end) infinite;
    margin-left: 6px;
    display: inline-block;
    width: 13px;
    color: transparent;
  }
`;

export const Loader = () => (
  <LoaderOverlay>
    <LoaderContainer aria-label="Loading portfolio">
      <Glow />
      <LoadingText>Loading portfolio</LoadingText>
    </LoaderContainer>
  </LoaderOverlay>
);

/********************************** */

/* import { Dot, LoaderWrapper, Ring, Title } from "./Loader.styled";

export const Loader = () => (
  <LoaderWrapper>
    <Ring $size={105} $color="#00f0ff" $duration={2.6} />
    <Ring $size={85} $color="#ff00f7" $duration={2.2} $reverse />
    <Ring $size={65} $color="#ffff00" $duration={2} />
    <Ring $size={40} $color="#00ff41" $duration={1.8} $reverse />
    <Dot />
    <Title>Loading portfolio</Title>
  </LoaderWrapper>
); */

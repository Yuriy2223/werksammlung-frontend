import styled from "styled-components";
import { Container } from "../../shared/Container";
import { Button } from "../../shared/Button";

export const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #1a1a1a;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5); */
  /* background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2); */
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
  border: 1px solid red;
`;

export const WrapperImg = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    flex-shrink: 0;
    width: 400px;
    height: 400px;

    /* boxshadow: "0 10px 40px rgba(0,0,0,0.2)"; */
  }
`;
export const WrapperContext = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  font-size: 32px;
  font-weight: 800;
`;
export const AboutTitle = styled.h1`
  /* font-size: "32px";
  font-weight: 800; */
  /* background: "linear-gradient(90deg, #00bcd4, #007c91)";  */
  /* boxShadow: "0 5px 20px rgba(0,188,212,0.3)", */
`;
export const AboutSubTitle = styled.h2`
  /* font-size: "32px"; */
  /* color: #00bcd4; */
`;
export const AboutSlogan = styled.p`
  /* font-size: 32px;
  font-weight: 800; */
  p,
  h1 {
    box-shadow: 0 0 20px #00bcd4;
  }
`;
export const AboutBtn = styled(Button)`
  margin-top: 40px;
  display: flex;
  align-items: center;
  /* gap: 8px; */
  width: 116px;
`;

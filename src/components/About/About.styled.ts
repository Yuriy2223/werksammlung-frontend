import styled from "styled-components";
import { Container } from "../../shared/Container";
import { Button } from "../../shared/Button";

export const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.tertiary};
  /* background-color: ${({ theme }) => theme.bgBody}; */
  /* border: 1px solid red; */
`;
export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  gap: 40px;

  /* border: 1px solid red; */

  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 40px;
  }
`;
export const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* border: 1px solid red;  */

  img {
    flex-shrink: 0;
    width: 290px;
    height: 290px;

    @media (min-width: 768px) {
      width: 400px;
      height: 400px;
    }
  }
`;
export const WrapperContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* border: 1px solid red;  */
`;
export const Context = styled.div`
  line-height: 1.4;
  font-size: 36px;
  p {
    font-weight: 600;
    text-shadow: -3px 3px 30px ${({ theme }) => theme.colorText};
  }
  h1 {
    font-weight: 700;
    text-shadow: -3px 3px 30px ${({ theme }) => theme.colorText};
  }
`;
export const AboutBtn = styled(Button)`
  margin-top: 40px;
  margin: 50px 0;
  width: 140px;
  height: 46px;
  box-shadow: 0 0 10px ${({ theme }) => theme.colorText};

  svg {
    color: ${({ theme }) => theme.svg};
  }
`;

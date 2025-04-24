import styled from "styled-components";
import { Container } from "../../shared/Container";
import { Button } from "../../shared/Button";

export const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.tertiary};
`;
export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  border: 1px solid red; /** */
`;
export const AboutWrapTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  border: 1px solid red; /** */

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;
export const AboutWrapBottom = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 40px 0;
  gap: 40px;

  border: 1px solid red; /** */

  span {
    margin-left: 30px;
  }
`;
export const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid red; /** */

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

  border: 1px solid red; /** */
`;
export const ContextInner = styled.div`
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
export const ToContact = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  gap: 40px;
`;
export const AboutBtn = styled(Button)`
  width: 140px;
  height: 46px;
  box-shadow: 0 0 10px ${({ theme }) => theme.colorText};

  svg {
    color: ${({ theme }) => theme.svg};
  }
`;

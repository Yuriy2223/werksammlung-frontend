import styled from "styled-components";
import { Container } from "../../shared/Container";
import { Button } from "../../shared/Button";

export const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  border: 1px solid red; /*********** */
`;

export const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    flex-shrink: 0;
    width: 400px;
    height: 400px;
  }
`;
export const WrapperContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Context = styled.div`
  line-height: 1.4;
  font-size: 36px;
  p {
    font-weight: 600;
    text-shadow: -3px 3px 6px ${({ theme }) => theme.colorText};
  }
  h1 {
    font-weight: 700;
    text-shadow: -3px 3px 8px ${({ theme }) => theme.colorText};
  }
`;
export const AboutBtn = styled(Button)`
  margin-top: 40px;
  margin: 40px 30px;
  width: 120px;
  height: 46px;
`;

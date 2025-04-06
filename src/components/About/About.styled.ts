import styled from "styled-components";
import { Container } from "../../shared/Container";

export const AboutContainer = styled(Container)`
  display: flex;
  align-items: center;

  border: 1px solid white;
`;
export const WrapperImg = styled.div`
  flex: 1;
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
  flex: 1;
`;
// export const AboutSection = styled.section`

// `;
// export const AboutSection = styled.section`

// `;
// export const AboutSection = styled.section`

// `;

import styled from "styled-components";

export const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colorText};
  height: 40px;
`;

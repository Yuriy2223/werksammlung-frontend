import styled from "styled-components";
import { Button } from "../../shared/Button";

export const UserActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
export const BtnLogin = styled(Button)`
  text-transform: uppercase;

  span {
    /* color: ${({ theme }) => theme.accent}; */
    color: ${({ theme }) => theme.svg};
    transform: translateY(2px);
  }
`;

import styled from "styled-components";
import { Button } from "../shared/Button";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavList = styled.nav`
  display: flex;
  align-items: center;
`;
export const BtnLogin = styled(Button)`
  text-transform: uppercase;
`;

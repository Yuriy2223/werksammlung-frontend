import styled from "styled-components";
import { Button } from "../../shared/Button";
import { Container } from "../../shared/Container";

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondary};
`;
export const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 420px;

  a {
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${({ theme }) => theme.colorText};
    position: relative;

    &:hover {
      /* color: ${({ theme }) => theme.hover}; */
      transform: scale(1.1);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background-color: ${({ theme }) => theme.hover};
      transition: all 300ms ease;
    }

    &:hover::after {
      width: 100%;
    }

    &.active {
      /* color: ${({ theme }) => theme.hover}; */
      font-weight: bold;
      border-bottom: 3px solid ${({ theme }) => theme.hover};
      animation: activeLink 0.8s ease-in-out forwards;
    }
  }

  @keyframes activeLink {
    0% {
      transform: scale(1);
      color: ${({ theme }) => theme.colorText};
      border-bottom-width: 2px;
    }
    50% {
      transform: scale(1.2);
      border-bottom-width: 4px;
    }
    100% {
      transform: scale(1);
      border-bottom-width: 2px;
    }
  }
`;

export const BtnLogin = styled(Button)`
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.accent};
    font-size: 1px;
  }
`;
export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

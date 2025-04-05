import styled from "styled-components";
import { Button } from "../../shared/Button";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondary};
`;
// export const NavList = styled.nav`
//   display: flex;
//   align-items: center;
//   gap: 40px;

//   a {
//     padding: 4px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     color: ${({ theme }) => theme.colorText};
//     position: relative;
//     transition: color 0.3s ease, transform 0.3s ease;

//     &:hover {
//       color: ${({ theme }) => theme.hover};
//       transform: scale(1.1);
//     }

//     &::after {
//       content: "";
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 0;
//       height: 2px;
//       background-color: ${({ theme }) => theme.hover};
//       transition: width 0.3s ease;
//     }

//     &:hover::after {
//       width: 100%;
//     }
//   }
// `;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  a {
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${({ theme }) => theme.colorText};
    position: relative;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.hover};
      transform: scale(1.1);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.hover};
      transition: width 0.3s ease, height 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }

    &.active {
      color: ${({ theme }) => theme.hover};
      font-weight: bold;
      border-bottom: 2px solid ${({ theme }) => theme.hover};
      animation: activeLink 0.6s ease-in-out forwards;
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
    margin-left: 4px;
    color: ${({ theme }) => theme.hover};
    font-size: 4px;
  }
`;
export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

import styled from "styled-components";
import { Button } from "../../shared/Button";
import { Container } from "../../shared/Container";

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondary};
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

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 420px;

  a {
    position: relative;
    padding: 4px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-decoration: none;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colorText},
      ${({ theme }) => theme.colorText}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: transform 0.3s ease, background 0.4s ease;

    &:hover {
      transform: scale(1.05);
      background: linear-gradient(90deg, #ff8a00, #e52e71, #9b00ff);
      background-size: 200%;
      animation: textFlow 2s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: transparent;
      border-radius: 1px;
      transition: width 0.4s ease, background 0.4s ease;
    }

    &.active {
      background: linear-gradient(90deg, #ff8a00, #e52e71, #9b00ff);
      background-size: 300%;
      animation: textFlow 3s ease-in-out infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &::after {
        width: 50%;
        background: linear-gradient(90deg, #ff8a00, #e52e71, #9b00ff);
        animation: underlineGlow 1.2s ease-in-out forwards;
      }
    }
  }

  @keyframes textFlow {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }

  @keyframes underlineGlow {
    0% {
      opacity: 0;
      width: 0;
    }
    50% {
      opacity: 1;
      width: 120%;
    }
    100% {
      width: 100%;
    }
  }
`;
/*************************************** */
// export const NavList = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 420px;

//   a {
//     padding: 4px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     color: ${({ theme }) => theme.colorText};
//     position: relative;

//     &:hover {
//       transform: scale(1.1);
//     }

//     &::after {
//       content: "";
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 0;
//       height: 3px;
//       background-color: ${({ theme }) => theme.hover};
//       transition: all 300ms ease;
//     }

//     &:hover::after {
//       width: 100%;
//     }

//     &.active {
//       color: ${({ theme }) => theme.colorText};
//       font-weight: bold;
//       border-bottom: 3px solid ${({ theme }) => theme.colorText};
//       animation: activeLink 0.8s ease-in-out forwards;
//     }
//   }

//   @keyframes activeLink {
//     0% {
//       transform: scale(1);
//       color: ${({ theme }) => theme.colorText};
//       border-bottom-width: 2px;
//     }
//     50% {
//       transform: scale(1.2);
//       border-bottom-width: 4px;
//     }
//     100% {
//       transform: scale(1);
//       border-bottom-width: 2px;
//     }
//   }
// `;

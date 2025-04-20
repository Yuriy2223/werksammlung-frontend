import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;
export const Text = styled.div`
  z-index: 1;
  font-size: 34px;
  color: ${({ theme }) => theme.colorText};
  margin-bottom: 30px;
`;
export const ToNavLink = styled(NavLink)`
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colorText};
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.secondary};
  z-index: 1;

  &:hover,
  &:active {
    box-shadow: 0 0 20px ${({ theme }) => theme.colorText};
    background-color: ${({ theme }) => theme.bgBody};
  }
`;

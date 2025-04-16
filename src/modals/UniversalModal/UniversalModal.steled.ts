import styled from "styled-components";

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
export const ModalContent = styled.div`
  position: relative;
  border-radius: 12px;
  width: 315px;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.bgBody};
  border: 2px solid ${({ theme }) => theme.colorText};

  @media (max-width: 374px) {
    padding: 10px;
    max-width: 300px;
  }

  @media (min-width: 768px) {
    padding: 50px 60px;
    width: 500px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background: transparent;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colorText};
    transition: all 0.3s ease;
  }

  &:hover,
  &:active {
    svg {
      transform: rotate(3600deg) scale(1.2);
      opacity: 0.8;
      color: ${({ theme }) => theme.svg};
    }
  }
`;

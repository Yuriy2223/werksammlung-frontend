import styled from "styled-components";
import { Button } from "../../shared/Button";
import { Title } from "../../shared/Title";
import { motion } from "framer-motion";

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%;
  height: 100%; */
  background-color: ${({ theme }) => theme.bgBody};
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* text-align: center; */
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ModalTitle = styled(Title)`
  margin-bottom: 30px;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
export const CancelBtn = styled(Button)`
  flex: 1;
  font-size: 16px;
`;
export const LogBtn = styled(Button)`
  flex: 1;
  font-size: 16px;
`;
export const PasswordToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-46%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.svg};
`;
export const ModalMessage = styled(motion.div)`
  /* position: absolute; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ff5f5f;
  /* padding: 15px 25px; */
  width: 280px;
  height: 60px;
  border-radius: 12px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* white-space: nowrap; */
`;

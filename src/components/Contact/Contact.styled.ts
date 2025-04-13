import styled from "styled-components";
import { Container } from "../../shared/Container";
import { Button } from "../../shared/Button";
import { motion } from "framer-motion";

export const ContactSection = styled.section`
  background-color: ${({ theme }) => theme.bgBody};
`;
export const ContactContainer = styled(Container)`
  padding: 40px 20px 60px;
`;
export const ContactForm = styled(motion.form)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 2px solid ${({ theme }) => theme.colorText}; */
`;
export const InputWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  height: 220px;
  gap: 30px;
`;
export const InputGroup = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TextareaWrap = styled.div`
  flex: 1;
  /* height: 220px; */
  height: 224px; /** */
  display: flex; /** */
  flex-direction: column; /** */
  /* justify-content: space-between; */
`;
export const SubmitButton = styled(Button)`
  width: 300px;
  height: 48px;
  /* margin: 30px auto; */
  /* margin-top: 40px; */
  flex-shrink: 0; /** */
  margin: 40px auto 0;
`;
export const SuccessMessage = styled(motion.div)`
  color: #4caf50;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
`;

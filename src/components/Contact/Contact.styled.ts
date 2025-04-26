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
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
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
  height: 224px;
  display: flex;
  flex-direction: column;
`;
export const SubmitButton = styled(Button)`
  width: 300px;
  height: 48px;
  flex-shrink: 0;
  margin: 40px auto 0;
  gap: 14px;

  svg {
    color: ${({ theme }) => theme.svg};
  }
`;
export const SuccessMessage = styled(motion.div)`
  width: 300px;
  height: 60px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 16px;
  color: #4caf50;
  background-color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.svg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;

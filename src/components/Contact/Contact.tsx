import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../shared/Input";
import { Textarea } from "../../shared/Textarea";
import { Title } from "../../shared/Title";
import { SubTitle } from "../../shared/SubTitle";
import { contactSchema } from "../../validation/validation";
import {
  ContactContainer,
  ContactForm,
  ContactSection,
  InputGroup,
  InputWrapper,
  SubmitButton,
  SuccessMessage,
  TextareaWrap,
} from "./Contact.styled";
import { SocialBlock } from "../SocialBlock/SocialBlock";

export interface FormData {
  name: string;
  email: string;
  tel?: string | null;
  message: string;
}

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    trigger,
  } = useForm<FormData>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
    reset();

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Title>Contact Me</Title>
          <SubTitle>
            Drop a message for collaboration, freelancing or just to say hi!
          </SubTitle>
        </motion.div>

        <ContactForm
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <InputWrapper>
            <InputGroup>
              <Input
                {...register("name")}
                label="Name*"
                width="100%"
                onClearError={() => clearErrors("name")}
                onValidate={() => trigger("name")}
                error={errors.name?.message}
              />
              <Input
                {...register("email")}
                label="Email*"
                type="email"
                width="100%"
                onClearError={() => clearErrors("email")}
                onValidate={() => trigger("email")}
                error={errors.email?.message}
              />
              {/* <Input
                {...register("tel")}
                label="Phone"
                type="tel"
                width="100%"
                onClearError={() => clearErrors("tel")}
                onValidate={() => trigger("tel")}
                error={errors.tel?.message}
              /> */}
              <SocialBlock />
            </InputGroup>
            <TextareaWrap>
              <Textarea
                {...register("message")}
                label="Message*"
                onClearError={() => clearErrors("message")}
                onValidate={() => trigger("message")}
                error={errors.message?.message}
              />
              <SubmitButton type="submit">Send Message</SubmitButton>
            </TextareaWrap>
          </InputWrapper>
          {/* <SubmitButton type="submit">Send Message</SubmitButton> */}

          <AnimatePresence>
            {submitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                ✅ Your message has been sent!
              </SuccessMessage>
            )}
          </AnimatePresence>
        </ContactForm>
        {/* <SocialBlock /> */}
      </ContactContainer>
    </ContactSection>
  );
};

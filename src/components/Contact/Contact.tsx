import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
// import { MessageCircleHeart } from "lucide-react";
import { Input } from "../../shared/Input";
import { Textarea } from "../../shared/Textarea";
import { Title } from "../../shared/Title";
import { SubTitle } from "../../shared/SubTitle";
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
import { contactSchema } from "../../validation/contactSchema";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t, i18n } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    trigger,
  } = useForm<FormData>({
    resolver: yupResolver(contactSchema(t)),
  });

  useEffect(() => {
    const errorFields = Object.keys(errors) as (keyof FormData)[];
    if (errorFields.length > 0) {
      trigger(errorFields);
    }
  }, [i18n.language, errors, trigger]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
    reset();

    setTimeout(() => setSubmitted(false), 3000);
  };

  /******************************** */
  // console.time("loopTimer");

  // for (let i = 0; i <= 100; i += 1) {
  //   console.log(i);
  // }

  // console.timeEnd("loopTimer");
  /********************************** */
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Title>{t("contact.title")}</Title>
          <SubTitle>{t("contact.subtitle")}</SubTitle>
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
                label={t("contact.form.name")}
                width="100%"
                onClearError={() => clearErrors("name")}
                onValidate={() => trigger("name")}
                error={errors.name?.message}
              />
              <Input
                {...register("email")}
                label={t("contact.form.email")}
                type="email"
                width="100%"
                onClearError={() => clearErrors("email")}
                onValidate={() => trigger("email")}
                error={errors.email?.message}
              />
              <SocialBlock />
            </InputGroup>
            <TextareaWrap>
              <Textarea
                {...register("message")}
                label={t("contact.form.message")}
                onClearError={() => clearErrors("message")}
                onValidate={() => trigger("message")}
                error={errors.message?.message}
              />
              <SubmitButton type="submit">
                {t("contact.form.button")}
                {/* <MessageCircleHeart size={18} /> */}
              </SubmitButton>
            </TextareaWrap>
          </InputWrapper>

          <AnimatePresence>
            {submitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: -200 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
              >
                {t("contact.form.success")}
              </SuccessMessage>
            )}
          </AnimatePresence>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

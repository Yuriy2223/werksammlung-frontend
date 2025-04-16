import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import { useAppDispatch } from "../../redux/store";
import { toast } from "react-toastify";
import { closeModal } from "../../redux/modal/slice";
import { selectModalType } from "../../redux/modal/selectors";
import { Input } from "../../shared/Input";
import { singInSchema } from "../../validation/singInSchema";
import {
  BtnWrap,
  CancelBtn,
  LogBtn,
  ModalForm,
  ModalMessage,
  ModalTitle,
  ModalWrap,
  PasswordToggleButton,
} from "./SignIn.styled";

export interface FormData {
  email: string;
  password: string;
}

export const ModalSignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const modalType = useSelector(selectModalType);
  const { t, i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showAdminMessage, setShowAdminMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    trigger,
  } = useForm<FormData>({
    resolver: yupResolver(singInSchema(t)),
  });

  useEffect(() => {
    const errorFields = Object.keys(errors) as (keyof FormData)[];
    if (errorFields.length > 0) {
      trigger(errorFields);
    }
  }, [i18n.language, errors, trigger]);

  if (modalType !== "ModalSignIn") return null;

  const togglePassword = () => setShowPassword((prev) => !prev);

  const passwordToggleBtn = (
    <PasswordToggleButton type="button" onClick={togglePassword}>
      {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
    </PasswordToggleButton>
  );

  const onSubmit = async () => {
    toast.error(t("modal.login.message.no"));
    setShowAdminMessage(true);
    reset();
    clearErrors();

    setTimeout(() => {
      setShowAdminMessage(false);
    }, 3000);

    setTimeout(() => {
      dispatch(closeModal());
    }, 3500);
  };
  // const onSubmit = async (data: FormData) => {
  //   try {
  //     await dispatch(singInUser(data)).unwrap();
  //     toast.success("Login successful!");
  //     console.log(data);
  //     reset();
  //     dispatch(closeModal());
  //     clearErrors();
  //   } catch (error) {
  //     toast.error(
  //       error instanceof Error ? error.message : "Something went wrong"
  //     );
  //   }
  // };

  return (
    <ModalWrap onSubmit={handleSubmit(onSubmit)}>
      <ModalTitle>{t("modal.login.title")}</ModalTitle>

      <ModalForm>
        <Input
          {...register("email")}
          label={t("modal.form.email")}
          autoComplete="new-email"
          type="email"
          width="100%"
          onClearError={() => clearErrors("email")}
          onValidate={() => trigger("email")}
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          label={t("modal.form.password")}
          autoComplete="new-password"
          type={showPassword ? "text" : "password"}
          width="100%"
          onClearError={() => clearErrors("password")}
          onValidate={() => trigger("password")}
          error={errors.password?.message}
          button={passwordToggleBtn}
        />
        <BtnWrap>
          <CancelBtn type="button" onClick={() => dispatch(closeModal())}>
            {t("modal.login.cancel")}
          </CancelBtn>
          <LogBtn type="submit">{t("modal.login.login")}</LogBtn>
        </BtnWrap>
      </ModalForm>

      {showAdminMessage && (
        <ModalMessage
          initial={{ opacity: 0, transform: "translate(-50%, -150%)" }}
          animate={{ opacity: 1, transform: "translate(-50%, -50%)" }}
          exit={{ opacity: 0, transform: "translate(-50%, 50%)" }}
          transition={{ duration: 0.6 }}
        >
          {t("modal.login.message.no")}
        </ModalMessage>
      )}
    </ModalWrap>
  );
};

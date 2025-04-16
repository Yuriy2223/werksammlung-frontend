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
    toast.error("Access restricted: admin only.");
    setShowAdminMessage(true);
    reset();
    clearErrors();

    setTimeout(() => {
      setShowAdminMessage(false);
    }, 3000);

    setTimeout(() => {
      dispatch(closeModal());
    }, 5000);
  };

  return (
    <ModalWrap onSubmit={handleSubmit(onSubmit)}>
      <ModalTitle>Admin</ModalTitle>

      {showAdminMessage && (
        <ModalMessage
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          Access restricted: admin only.
        </ModalMessage>
      )}

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
            {t("modal.cancel")}
          </CancelBtn>
          <LogBtn type="submit">{t("modal.login")}</LogBtn>
        </BtnWrap>
      </ModalForm>
    </ModalWrap>
  );
};
/******************додаємо повідомлення*********************** */

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useTranslation } from "react-i18next";
// import { useAppDispatch } from "../../redux/store";
// import { toast } from "react-toastify";
// import { closeModal } from "../../redux/modal/slice";
// import { selectModalType } from "../../redux/modal/selectors";
// import {
//   BtnWrap,
//   CancelBtn,
//   // InputWrap,
//   LogBtn,
//   ModalForm,
//   ModalMessage,
//   ModalTitle,
//   ModalWrap,
//   PasswordToggleButton,
// } from "./SignIn.styled";

// import { Input } from "../../shared/Input";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { singInSchema } from "../../validation/singInSchema";
// import { Eye, EyeOff } from "lucide-react";

// // import { logoutUser } from "../../redux/auth/operations";

// export interface FormData {
//   email: string;
//   password: string;
// }

// // export const ModalSignIn: React.FC = () => {
// //   const dispatch = useAppDispatch();
// //   const modalType = useSelector(selectModalType);
// //   const { t, i18n } = useTranslation();
// //   const [showPassword, setShowPassword] = useState(false);
// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors },
// //     clearErrors,
// //     trigger,
// //   } = useForm<FormData>({
// //     resolver: yupResolver(singInSchema(t)),
// //   });

// //   useEffect(() => {
// //     const errorFields = Object.keys(errors) as (keyof FormData)[];
// //     if (errorFields.length > 0) {
// //       trigger(errorFields);
// //     }
// //   }, [i18n.language, errors, trigger]);

// //   if (modalType !== "ModalSignIn") return null;

// //   const togglePassword = () => setShowPassword((prev) => !prev);

// //   const passwordToggleBtn = (
// //     <PasswordToggleButton type="button" onClick={togglePassword}>
// //       {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// //     </PasswordToggleButton>
// //   );

// //   // const onSubmit = async (data: FormData) => {
// //   //   try {
// //   //     await dispatch(singInUser(data)).unwrap();
// //   //     toast.success("Login successful!");
// //   //     console.log(data);
// //   //     reset();
// //   //     dispatch(closeModal());
// //   //     clearErrors();
// //   //   } catch (error) {
// //   //     toast.error(
// //   //       error instanceof Error ? error.message : "Something went wrong"
// //   //     );
// //   //   }
// //   // };
// //   const onSubmit = async () => {
// //     toast.error("Access restricted: admin only.");
// //     reset();
// //     clearErrors();
// //   };

// //   return (
// //     <ModalWrap onSubmit={handleSubmit(onSubmit)}>
// //       <Title>Admin</Title>
// //       <ModalForm>
// //         <InputWrap>
// //           <Input
// //             {...register("email")}
// //             label={t("modal.form.email")}
// //             autoComplete="new-email"
// //             type="email"
// //             width="100%"
// //             onClearError={() => clearErrors("email")}
// //             onValidate={() => trigger("email")}
// //             error={errors.email?.message}
// //           />
// //           <Input
// //             {...register("password")}
// //             label={t("modal.form.password")}
// //             autoComplete="new-password"
// //             // type="password"
// //             type={showPassword ? "text" : "password"}
// //             width="100%"
// //             onClearError={() => clearErrors("password")}
// //             onValidate={() => trigger("password")}
// //             error={errors.password?.message}
// //             button={passwordToggleBtn}
// //           />
// //         </InputWrap>
// //         <BtnWrap>
// //           <CancelBtn type="button" onClick={() => dispatch(closeModal())}>
// //             {t("modal.cancel")}
// //           </CancelBtn>
// //           <LogBtn type="submit"> {t("modal.login")}</LogBtn>
// //         </BtnWrap>
// //       </ModalForm>
// //     </ModalWrap>
// //   );
// // };

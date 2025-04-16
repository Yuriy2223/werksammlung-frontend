import * as yup from "yup";
import { FormData } from "../components/Contact/Contact";

export const contactSchema = (
  t: (key: string) => string
): yup.ObjectSchema<FormData> =>
  yup.object({
    name: yup
      .string()
      .trim()
      .min(2, t("validation.name.tooShort"))
      .matches(/^[\p{L}' ]+$/u, t("validation.name.invalid"))
      .required(t("validation.name.required")),

    email: yup
      .string()
      .email(t("validation.email.invalid"))
      .max(254, t("validation.email.tooLong"))
      .required(t("validation.email.required")),

    tel: yup
      .string()
      .trim()
      .matches(/^[0-9()+\-\s]*$/, t("validation.tel.invalid"))
      .test("valid-digits-count", t("validation.tel.length"), (value) => {
        if (!value) return true;
        const digitsOnly = value.replace(/\D/g, "");
        return digitsOnly.length >= 7 && digitsOnly.length <= 15;
      })
      .notRequired()
      .nullable(),

    message: yup
      .string()
      .trim()
      .min(10, t("validation.message.tooShort"))
      .required(t("validation.message.required")),
  });

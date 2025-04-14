import * as yup from "yup";
import { FormData } from "../components/Contact/Contact";

export const contactSchema: yup.ObjectSchema<FormData> = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Name is too short.")
    .matches(/^[A-Za-zÀ-ÿ' ]+$/, "Name can only contain letters and spaces.")
    .required("Name is required."),

  email: yup
    .string()
    .email("Invalid email address.")
    .max(254, "Email is too long.")
    .required("Email is required."),

  // tel: yup
  //   .string()
  //   .trim()
  //   .matches(/^[0-9()+\-\s]*$/, "Phone can only contain numbers, +, -, and ().")
  //   .test(
  //     "valid-digits-count",
  //     "Phone number must contain between 7 and 15 digits.",
  //     (value) => {
  //       if (!value) return true;
  //       const digitsOnly = value.replace(/\D/g, "");
  //       return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  //     }
  //   )
  //   .notRequired()
  //   .nullable(),

  message: yup
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .required("Message is required."),
});

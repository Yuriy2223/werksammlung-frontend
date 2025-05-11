import { contactMeFormData } from "../App.type";
import { publicInstance } from "./Api";

export const sendMeContactApi = async (
  data: contactMeFormData
): Promise<void> => {
  await publicInstance.post("/api/contacts/me", data);
};

import { User } from "../App.type";
import { publicInstance } from "./Api";

export const fetchProfileApi = async (): Promise<User> => {
  const response = await publicInstance.get<User>("/api/users/profile");
  return response.data;
};

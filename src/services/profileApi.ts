import { Profile } from "../App.type";
import { Instance } from "./Api";

export const fetchProfileApi = async (): Promise<Profile> => {
  const response = await Instance.get<Profile>("/api/profile");
  return response.data;
};

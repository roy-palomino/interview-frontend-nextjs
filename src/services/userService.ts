import axiosInstance from "./axiosInstance";

import { User } from "../types";

export async function listUsers(count: number | string): Promise<Array<User>> {
  const response = await axiosInstance.get(`?results=${count}`);
  return response.data.results;
}

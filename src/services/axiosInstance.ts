import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://randomuser.me/api/",
  timeout: 5000,
});

export default axiosInstance;

import axios from "axios";
import { API_AUTH } from "./api-auth";

export const axiosInstans = axios.create({
  baseURL: API_AUTH,
});

axiosInstans.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.reload();
    }
    return Promise.reject(err);
  }
);

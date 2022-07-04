import axios from "axios";

export const stockApi = axios.create({
  baseURL: import.meta.env.VITE_LIVE_STOCK_API_URL,
});
stockApi.interceptors.request.use((req) => {
  return req;
});
stockApi.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log(error);
    throw error;
  }
);

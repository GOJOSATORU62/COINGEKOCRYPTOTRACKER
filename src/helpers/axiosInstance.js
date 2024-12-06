import axios from "axios";

const axiosInstance = axios.create({
  bseURL: COINGECKO_API_URL,
});

export default axiosInstance;

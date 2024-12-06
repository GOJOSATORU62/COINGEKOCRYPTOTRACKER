import axiosInstance from "../helpers/axiosInstance";

export async function fecthCoinData() {
  try {
    const response = await axiosInstance.get("/coins/markets?vs_currency=usd");
    console.log(response);
    return response;
  } catch (error) {}
}

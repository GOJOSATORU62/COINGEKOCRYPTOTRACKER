import axiosInstance from "../helpers/axiosInstance";

export async function fecthCoinDetails(id) {
  try {
    const response = await axiosInstance.get(`/coins/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

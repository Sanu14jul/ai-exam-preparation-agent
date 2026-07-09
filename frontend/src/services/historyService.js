import api from "../api/axios";

export const getHistory = async () => {
  const response = await api.get("/history");
  return response.data;
};
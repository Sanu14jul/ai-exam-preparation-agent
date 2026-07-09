import api from "../api/axios";

export const getDashboard = async () => {
  const response = await api.get("/ai/dashboard");
  return response.data;
};
import api from "../api/axios";

export const sendMessage = async (
  userId,
  message
) => {

  const response = await api.post(
    "/chat",
    {
      user_id: userId,
      message: message,
    }
  );

  return response.data;
};
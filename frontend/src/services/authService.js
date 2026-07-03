import api from "../api/axios";

// Register
export const registerUser = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

// Login
export const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};
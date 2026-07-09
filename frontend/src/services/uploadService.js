import api from "../api/axios";

export const uploadPDF = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  console.log("Uploading:", file);

  const response = await api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log("Server Response:", response);

  return response.data;
};
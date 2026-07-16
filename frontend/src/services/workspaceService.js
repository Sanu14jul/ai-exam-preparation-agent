import api from "./api";

class WorkspaceService {
  async uploadPDF(file) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Upload Error:", error);

      throw (
        error.response?.data || {
          message: "Failed to upload PDF",
        }
      );
    }
  }
}

export default new WorkspaceService();
import api from "../api/axios";

export async function startLearningSession() {

    const response = await api.post(
        "/learning/session"
    );

    return response.data.data;

}
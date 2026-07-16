import api from "../api/axios";

export async function generateQuiz(data) {

    const response = await api.post(
        "/quiz",
        data
    );

    return response.data.data;;

}
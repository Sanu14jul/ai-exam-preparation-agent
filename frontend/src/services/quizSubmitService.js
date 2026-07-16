import api from "../api/axios";

export async function submitQuiz(data) {

    const response = await api.post(

        "/quiz/submit",

        data,

    );

    return response.data.data;

}
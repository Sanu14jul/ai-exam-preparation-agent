import api from "../api/axios";

export async function teachTopic(topic) {

    const response = await api.post(

        "/tutor/teach",

        {

            topic,

        }

    );

    return response.data;

}
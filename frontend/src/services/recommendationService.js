import api from "../api/axios";

export async function getTodayRecommendation() {

    const response = await api.get(
        "/recommendation/today"
    );

    return response.data;
}
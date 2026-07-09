import api from "../api/axios";

export const getStudentProfile = async (
  userId
) => {

  const response = await api.get(
    `/student-profile/${userId}`
  );

  return response.data;

};

export const createStudentProfile = async (
  userId,
  profile
) => {

  const response = await api.post(

    `/student-profile/?user_id=${userId}`,

    profile

  );

  return response.data;

};
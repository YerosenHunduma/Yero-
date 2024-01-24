import axiosInstance from "./axiosInstance";

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/auths/register", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/auths/login", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const GetUser = async () => {
  try {
    const response = await axiosInstance.get("/api/auths/getUser");
    console.log("front user", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

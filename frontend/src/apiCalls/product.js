import axiosInstance from "./axiosInstance";

export const addProducts = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/products/addProducts",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/api/products/getProducts");
    console.log("66666666", response.data.products);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const updatedProduct = async (id, payload) => {
  try {
    const response = await axiosInstance.put(
      `/api/products/updateProduct/${id}`,
      payload
    );
    console.log("77777", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/api/products/deleteProduct/${id}`
    );
    console.log("rrrrrr", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// upload image
export const uploadImage = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/products/uploadImage",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

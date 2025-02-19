import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

const apiRequestCall = async (
  method,
  endpoint,
  data = null,
  params = {},
  requiredAuth = false
) => {
  try {
    // Default for JSON requests
    const headers = {
      "Content-Type": "application/json"
    };
    //if token is required
    if (requiredAuth) {
      headers.Authorization = `Bearer ${getTokenAsync()}`;
    }
    // Check if the request data is FormData (for file uploads)
    if (data instanceof FormData) {
      headers["Content-Type"] = "multipart/form-data";
    }
    const response = await apiClient({
      method,
      url: endpoint,
      data,
      params,
      headers
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

const getTokenAsync = () => {
  return Cookies.get("accessToken");
};

// Specific API calls

// category endPoints
export const getCagetories = async () => {
  return await apiRequestCall("GET", "/category/get-categorys");
};
export const addCategoryAsync = async (category) => {
  return await apiRequestCall(
    "POST",
    "/category/create-category",
    { category: category },
    {},
    true
  );
};

export const deleteCategoryAsync = async (id) => {
  return await apiRequestCall(
    "DELETE",
    `/category/remove-category/${id}`,
    {},
    {},
    true
  );
};

//sub category Endpoints
export const getSubCategoriesAsync = () =>
  apiRequestCall("GET", "/subcategory/get-all-subcategory");

//product Endpoints
export const getProducts = async () => {
  return apiRequestCall("GET", "/product/get-products");
};
export const addItemAsync = (data) =>
  apiRequestCall("POST", "/product/create-product", data, {}, true);

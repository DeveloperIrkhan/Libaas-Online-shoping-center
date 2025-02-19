import axios from "axios";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_BACKEND_URL;
const getTokenAsync = () => {
  return Cookies.get("accessToken");
};

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

const apiRequestCall = async (
  method,
  endPoint,
  data = null,
  requireAuth = false
) => {
  try {
    // Default for JSON requests
    const headers = {
      "Content-Type": "application/json"
    };
    //if token is required
    if (requireAuth) {
      headers.Authorization = `Bearer ${getTokenAsync()}`;
    }
    // Check if the request data is FormData (for file uploads)
    if (data instanceof FormData) {
      headers["Content-Type"] = "multipart/form-data";
    }

    const response = await apiClient({
      method,
      url: endPoint,
      data,
      headers
    });
    console.log(data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};
//cash on delivary
export const saveCartOrderCOD = (orderData) => {
  return apiRequestCall("POST", "userOrder/Place-Order-cod", orderData, false);
};
// payment using stripe
export const saveCartOrderstripe = (orderData) => {
  return apiRequestCall(
    "POST",
    "userOrder/Place-Order-stripe",
    orderData,
    false
  );
};
//payment using RazorPay
export const saveCartOrderRazorpay = (orderData) => {
  return apiRequestCall(
    "POST",
    "userOrder/Place-Order-razorpay",
    orderData,
    false
  );
};

// cartRouter.route("/Place-Order-cod").post(PlaceOrderCODController);
// cartRouter.route("/Place-Order-stripe").post(PlaceOrderStripeController);
// cartRouter.route("/Place-Order-razorpay").post(PlaceOrderRazorPayController);
// cartRouter.route("/get-order/:id").get(verifyJWT, GetOneOrderByIdController);
// cartRouter.route("/get-orders").get(verifyJWT, IsAdmin, GetAllOrdersController);
// cartRouter.route("/update-orders-status").get(verifyJWT, IsAdmin, updateOrdersController);

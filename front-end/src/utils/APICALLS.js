import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export const submitHandlerForAddingItems = async ({
  data,
  _url,
  setIsLoading,
  resetFileds = () => {}
}) => {
  try {
    setIsLoading(true);
    const tokenKey = Cookies.get("accessToken");
    const _formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined && value !== null) {
        _formData.append(
          key,
          typeof value === "object" ? JSON.stringify(value) : value
        );
      }
    }

    const response = await axios.post(_url, _formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${tokenKey}`
      }
    });
    const { success, message } = response.data;
    success ? toast.success(message) : toast.error(message);
  } catch (error) {
    console.error(error);
    toast.error("An error occurred while submitting the form.");
  } finally {
    setIsLoading(false);
    resetFileds();
  }
};

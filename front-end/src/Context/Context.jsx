import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL } from "../App.jsx";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [role, setRole] = useState("");
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [loggedInUser, setloggedInUser] = useState(null);
  const [products, setProduct] = useState([]);
  const [getCategory, setCategory] = useState([]);
  const [getSubCategory, setSubCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const currency = "Rs/-";
  const delivery_Fee = 200;

  const getProductAsync = async () => {
    try {
      const getProductResponse = await axios.get(`${API_URL}/product/get-products`);
      setProduct(getProductResponse.data.products ? getProductResponse.data.products : []);
    } catch (error) {
      console.log("Error while getting products", error);
      toast.error("Failed to load products");
    }
  };

  const getCategories = async () => {
    try {
      const getCategoriesResponse = await axios.get(`${API_URL}/category/get-categorys`);
      if (getCategoriesResponse.data.success) {
        setCategory(getCategoriesResponse.data.categories ? getCategoriesResponse.data.categories : []);
      }
    } catch (error) {
      console.log("Error while getting categories", error);
    }
  };

  const getSubCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/subcategory/get-all-subcategory`);
      if (response.data.success) {
        const { subcategories } = response.data;
        setSubCategory(subcategories ? subcategories : []);
      }
    } catch (error) {
      console.log("Error while getting subcategories", error);
    }
  };

  const setWithExpiry = (key, value, timeInHours) => {
    const timeNow = new Date();
    const items = {
      value: value,
      expiry: timeNow.getTime() + timeInHours * 60 * 60 * 1000
    };
    localStorage.setItem(key, JSON.stringify(items));
  };

  const getWithExpiry = (key) => {
    const items = localStorage.getItem(key);
    if (!items) return null;

    const item = JSON.parse(items);
    const timeNow = new Date();

    if (timeNow.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  };

  function getCartData() {
    const storedCart = getWithExpiry("cartItems");
    return storedCart ? JSON.parse(storedCart) : {};
  }

  useEffect(() => {
    const storedCart = getCartData();
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  useEffect(() => {
    getProductAsync();
    // console.log(products)
    getCategories();
    getSubCategories();
    const storedUser = JSON.parse(getWithExpiry("loggedIn"));
    if (storedUser) {
      setloggedInUser(storedUser);
    }
    const userRole = getWithExpiry("role");
    setRole(userRole);
    const accessToken = Cookies.get('accessToken');
    setToken(accessToken);
    setWithExpiry("cartItems", JSON.stringify(cartItems), 7);
  }, [cartItems, role, token]);

  const addToCart = (itemId, productSize) => {
    if (!productSize) {
      toast.error("Please select a product size");
      return;
    }

    const cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][productSize]) {
        cartData[itemId][productSize] += 1;
      } else {
        cartData[itemId][productSize] = 1;
      }
    } else {
      cartData[itemId] = { [productSize]: 1 };
    }

    toast.success("Item added!");
    setCartItems(cartData);
    console.log("cartItems", cartData);
    setWithExpiry("cartItems", JSON.stringify(cartData), 7);
  };

  const getCartCount = () => {
    let count = 0;
    for (const items in cartItems)
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            count += cartItems[items][item];
          }
        } catch (error) {
          console.log("Error", error);
        }
      }
    return count;
  };

  const updateCartItems = (itemId, size, quantity) => {
    let cartData = { ...cartItems };
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let productInfo = products.find((product) => product._id === items);
      if (!productInfo) {
        // console.warn(`Product with ID ${items} not found in products array.`);
        continue; // Skip this item
      }
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            if (productInfo.discountPrice) {
              totalAmount += productInfo.discountPrice * cartItems[items][item];
            }
            else {
              totalAmount += productInfo.originalPrice * cartItems[items][item];
            }
          }
        } catch (error) {
          console.log("Error", error);
        }
      }
    }
    return totalAmount;
  };

  const values = {
    getCartCount,
    getCartAmount,
    addToCart,
    updateCartItems,
    currency,
    delivery_Fee,
    products,
    isLoading, setIsLoading,
    selectedProduct, setSelectedProduct,
    getCategory, setCategory,
    getSubCategory, setSubCategory,
    openSearchBox, setOpenSearchBox,
    IsModelOpen, setIsModelOpen,
    cartItems, setCartItems,
    search, setSearch,
    token, setToken,
    role, setRole,
    loggedInUser, setloggedInUser,
    setWithExpiry,
    getWithExpiry,
    getProductAsync
  };

  return (
    <ShopContext.Provider value={values}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);

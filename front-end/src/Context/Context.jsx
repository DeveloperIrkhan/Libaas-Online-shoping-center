import { createContext, useContext, useEffect, useState } from "react";
import { product } from "../DummyData/product.js"
import { toast } from "react-toastify";
import axios from 'axios';
import Cookies from 'js-cookie'
const ShopContext = createContext();
export const ShopProvider = ({ children }) => {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [role, setRole] = useState("");
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("")
  const [loggedInUser, setloggedInUser] = useState(null)
  const currency = "Rs/-";
  const delivery_Fee = 200;
  const products = product;

  //saving & getting item in localstorage with time expiry
  const setWithExpiry = (key, value, timeInHours) => {
    const TimeNow = new Date();
    const items = {
      value: value,
      expiry: TimeNow.getTime() + timeInHours * 60 * 60 * 1000
    }

    localStorage.setItem(key, JSON.stringify(items));
  }
  const getWithExpiry = (key) => {
    const items = localStorage.getItem(key)
    if (!items) return null;
    // If the item doesn’t exist, return null
    const item = JSON.parse(items)
    const TimeNow = new Date();

    if (TimeNow.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = getWithExpiry("cartItems")
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // this is used for to check cartitems in localstorage else create  a new array
  useEffect(() => {
    const storedUser = JSON.parse(getWithExpiry("loggedIn"))
    if (storedUser) {
      setloggedInUser(storedUser);
    }
    const userRole = getWithExpiry("role")
    setRole(userRole)
    const accessToken = Cookies.get('accessToken')
    setToken(accessToken)
    setWithExpiry("cartItems", JSON.stringify(cartItems), 7)
    console.log(cartItems, role, token)
  }, []);
 useEffect(()=>{},[token,role])

  // adding to cart
  const addToCart = async (itemId, productSize) => {
    if (!productSize) {
      toast.error("please select any product size")
      return;
    }
    let cartdata = structuredClone(cartItems)
    //    let cartdata = { ...cartItems }

    if (cartdata[itemId]) {
      if (cartdata[itemId][productSize]) {
        cartdata[itemId][productSize] += 1
      }
      else {
        cartdata[itemId][productSize] = 1
      }
    }
    else {
      cartdata[itemId] = {};
      cartdata[itemId][productSize] = 1
    }
    toast.success("Item added!")
    setCartItems(cartdata)
    // localStorage.setItem("cartItems", JSON.stringify(cartdata))

  }

  // get count of the cart
  const getCartCount = () => {
    let count = 0;
    for (const items in cartItems)
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            count += cartItems[items][item];
          }
        } catch (error) {
          console.log("error", error)
        }
      }
    return count;
  }
  // Updating Cart items
  const updateCartItems = async (itemId, size, quantity) => {
    let cartdata = { ...cartItems }
    cartdata[itemId][size] = quantity;
    setCartItems(cartdata)
  }
  //Getting Cart Amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let productInfo = products.find((product) => product._id === Number(items))
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += productInfo.price * cartItems[items][item]
          }
        } catch (error) {

        }
      }
    }
    return totalAmount;

  }








  const values =
  {
    getCartCount,
    getCartAmount,
    addToCart,
    updateCartItems,
    currency,
    delivery_Fee,
    products,
    //states
    openSearchBox, setOpenSearchBox,
    IsModelOpen, setIsModelOpen,
    cartItems, setCartItems,
    search, setSearch,
    token, setToken,
    role, setRole,
    loggedInUser, setloggedInUser,
    setWithExpiry,
    getWithExpiry,
  }
  return (
    <ShopContext.Provider value={values}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShopContext = () => useContext(ShopContext);

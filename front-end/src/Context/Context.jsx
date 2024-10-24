import { createContext, useContext, useEffect, useState } from "react";
import { product } from "../DummyData/product.js"
import { toast } from "react-toastify";
const ShopContext = createContext();
export const ShopProvider = ({ children }) => {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const [search, setSearch] = useState("");
  const currency = "Rs/-";
  const delivery_Fee = 200;
  const products = product;

  // this is used for to check cartitems in localstorage else create  a new array
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : {};
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
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
    cartItems,
    setCartItems,
    IsModelOpen,
    setIsModelOpen,
    openSearchBox,
    setOpenSearchBox,
    search,
    setSearch,
    currency,
    delivery_Fee,
    products,
  }
  return (
    <ShopContext.Provider value={values}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShopContext = () => useContext(ShopContext);

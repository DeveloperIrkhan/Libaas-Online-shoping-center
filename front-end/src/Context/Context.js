import { createContext, useContext } from "react";
/////////////METHOD ONE/////////////////////
export const shopContext = createContext({
  currency: String,
  delivery_Fee: Number,
  products: [],
  addNew: (items) => {}
});
export const useShopContext = () => {
  return useContext(shopContext);
};
export const ShopProvider = shopContext.Provider;

// now in App.jsx rape everything in ShopProvider and pass the values = {{cart, addNew}}
// /////////////METHOD TWO/////////////////////
// const shopContextProvider = (props) => {
//   const delivery_Fee = 5;
//   const currency = "$";
//   const values = {
//     products
//   };
//   return (
//     <ShopContext.Provider value={values}>{props.children}</ShopContext.Provider>
//   );
// };

// export default shopContextProvider;

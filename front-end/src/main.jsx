import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShopProvider } from './Context/Context'
import { product } from "./DummyData/product.js";

const currency = "Rs/-";
const delivery_Fee = 5;
const products = product;
createRoot(document.getElementById('root')).render(
  <ShopProvider value={{ currency, delivery_Fee, products }}>
    <App />
  </ShopProvider>

)

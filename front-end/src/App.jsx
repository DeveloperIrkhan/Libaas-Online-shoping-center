import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import './CustomTostify.css'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import MyOrders from './Pages/MyOrders'
import PlaceOrder from './Pages/PlaceOrder'
import Product from './Pages/Product'
import SummerSale from './Pages/SummerSale'
import Footwear from './Pages/Footwear'
import Layout from './Components/Layout/Layout'
import NewArrivals from './Pages/NewArrivals'
import BestSellers from "./Pages/BestSellers"
import Clothing from "./Pages/Clothing"
import Accessories from "./Pages/Accessories"
import ReturnRefundPolicy from "./Pages/ReturnRefundPolicy/ReturnRefundPolicy"
import Auth from './Pages/Auth'
import ProductDetails from './Pages/ProductDetails'
import Perfumes from './Pages/Perfumes'
import { ShopProvider } from './Context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayout from './Components/Layout/AdminLayout'
import AddItem from './Pages/AdminPanel/pages/AddItem'
import ListOrder from './Pages/AdminPanel/pages/ListOrder'
import AddCategory from './Pages/AdminPanel/pages/AddCategory'
import AddSubCategory from './Pages/AdminPanel/pages/AddSubCategory'
import ListProduct from './Pages/AdminPanel/pages/ListProduct'
function App() {


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/collections' element={<Collection />} />
          <Route path='/summer-sale' element={<SummerSale />} />
          <Route path='/Footwear' element={<Footwear />} />
          <Route path='/perfumes' element={<Perfumes />} />
          <Route path='/new-arrivals' element={<NewArrivals />} />
          <Route path='/best-sellers' element={<BestSellers />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/Clothing' element={<Clothing />} />
          <Route path='/Accessories' element={<Accessories />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/refund-policy' element={<ReturnRefundPolicy />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/products' element={<Product />} />
          <Route path='/product-details/:_id' element={<ProductDetails />} />
        </Route>
        <Route path='/admin-panel/' element={<AdminLayout />}>
          <Route path='add-item' element={<AddItem />} />
          <Route path='add-category' element={<AddCategory />} />
          <Route path='add-sub-category' element={<AddSubCategory />} />
          <Route path='list-products' element={<ListProduct />} />
          <Route path='list-orders' element={<ListOrder />} />
        </Route>
      </>
    )
  )


  return (
    <ShopProvider>
      <ToastContainer />
      <div>
        <RouterProvider router={routes} />
      </div>
    </ShopProvider>
  )
}

export default App

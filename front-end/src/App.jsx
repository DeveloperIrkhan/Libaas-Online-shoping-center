import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
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
import Activewear from "./Pages/Activewear"
import Auth from './Pages/Auth'
import ProductDetails from './Pages/ProductDetails'
function App() {


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/collections' element={<Collection />} />
            <Route path='/summer-sale' element={<SummerSale />} />
            <Route path='/Footwear' element={<Footwear />} />
            <Route path='/activewear' element={<Activewear />} />
            <Route path='/new-arrivals' element={<NewArrivals />} />
            <Route path='/best-sellers' element={<BestSellers />} />
            <Route path='/place-order' element={<PlaceOrder />} />
            <Route path='/Clothing' element={<Clothing />} />
            <Route path='/Accessories' element={<Accessories />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/my-orders' element={<MyOrders />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/products' element={<Product />} />
            <Route path='/product-details/:_id' element={<ProductDetails />} />
          </Route>
      </>
    )
  )


  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App

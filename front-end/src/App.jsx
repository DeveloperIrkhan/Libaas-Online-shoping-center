import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
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
function App() {


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Footwear' element={<Footwear />} />
          <Route path='/activewear' element={<Activewear />} />
          <Route path='/summer-sale' element={<SummerSale />} />
          <Route path='/new-arrivals' element={<NewArrivals />} />
          <Route path='/best-sellers' element={<BestSellers />} />
          <Route path='/collections' element={<Collection />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/Clothing' element={<Clothing />} />
          <Route path='/Accessories' element={<Accessories />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Product />} />
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

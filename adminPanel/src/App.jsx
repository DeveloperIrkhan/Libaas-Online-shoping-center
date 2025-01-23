import React, { useEffect, useState } from 'react'
import Layout from './Components/Layouts/Layout'
import Auth from './Components/Auth/Auth'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import Cookies from "js-cookie"
import AddItem from './Pages/AdminPanel/AddItem'
import AddCategory from './Pages/AdminPanel/AddCategory'
import AddSubCategory from './Pages/AdminPanel/AddSubCategory'
import ListOrder from './Pages/AdminPanel/ListOrder'
import ListProduct from './Pages/AdminPanel/ListProduct'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, useNavigate } from 'react-router-dom'
import { useAdminContext } from './oontext/AdminContext'
export const API_URL = import.meta.env.VITE_BACKEND_URL
const App = () => {

  const { setloggedInUser, setWithExpiry, setToken, setRole } = useAdminContext();
  const [refreshToken, setRefreshToken] = useState(Cookies.get("refreshToken") ? Cookies.get("refreshToken") : null)
  const [accessToken, setAccessToken] = useState(Cookies.get("accessToken") ? Cookies.get("accessToken") : null)
  useEffect(() => {
    if (refreshToken && (!accessToken || accessToken === null)) {
      getUserUsingRefreshToken()
    }
  }, [])

  const getUserUsingRefreshToken = async () => {
    try {
      const response = await axios.get(`${API_URL}/auth/get-refresh-token`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${refreshToken}`
            // Send refreshToken as part of the headers if needed
          }
        },)
      console.log("getting Access Token on basis of rereshToken", response)
      if (response.data.success) {
        const { message } = response.data;
        toast.success(message);

        const { accessToken, refreshToken, loggedIn } = response.data;
        setToken(accessToken);
        setRefreshToken(refreshToken)
        setAccessToken(accessToken)
        setWithExpiry("loggedIn", JSON.stringify(loggedIn), 7)
        if (loggedIn.UserRole === 2) {
          setRole("Admin")
          setWithExpiry("role", "Admin", 7)
          toast.success("Admin login successfully")
          setloggedInUser(loggedIn)
        }
        else {
          toast.success("access denied!");
        }
      }
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data.message === "refresh token is expired") {
        toast.error("Your session has expired. Please log in again.");
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        Cookies.remove('loggedIn')
        Cookies.remove('user')
      }
    }
  }



  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path='' element={<Auth />} /> */}
        <Route path='auth' element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route path="add-item" element={<AddItem />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="add-sub-category" element={<AddSubCategory />} />
          <Route path="list-orders" element={<ListOrder />} />
          <Route path="list-products" element={<ListProduct />} />
        </Route>
      </>
    )
  )


  return (
    <div>
      <ToastContainer />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
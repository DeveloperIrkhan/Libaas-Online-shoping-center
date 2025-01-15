import React from 'react'
import Layout from './Components/Layouts/Layout'
import Auth from './Components/Auth/Auth'
import { ToastContainer } from 'react-toastify'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, useNavigate } from 'react-router-dom'
const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout />}>
        <Route path='' element={<Auth />} />
      </Route>
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
import React, { Children } from 'react'
import Unauthorized from '../pages/unauthorized'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import PageNotFound from '../pages/PageNotFound'
import Layout from '../layouts/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactUs from '../pages/ContactUs'
import Category from '../pages/Category'
import Blog from '../pages/Blog'
import Dashboard from '../pages/admin/Dashboard'
import AdminLayout from '../layouts/AdminLayout'
import BlogDetail from '../pages/BlogDetail'
// import Manage from '../pages/admin/Manage'




const router =  createBrowserRouter([

  {
    path: "/",
    element: <Layout/>,
    children: [
      {index: true, element: <Home/> },
      {path: "about", element: <About /> },
      {path: "blog", element: <Blog />  },
      {path: "blog/:blogId", element: <BlogDetail />  },
      {path: "category", element: <Category />},
      {path: "contactUs", element: <ContactUs/>},
      {path: "register", element: <Register /> },
      {path: "login", element: <Login /> },
      {path: "unauthorized", element: <Unauthorized/> },
      {path: "*", element: <PageNotFound/> },
    ],
  },

  {
    path: "/admin",
    // element: <ProtectRoute element = {<AdminLayout/>} allow={["ADMIN"]}/>, รอมี ProtectRoute
    element: <AdminLayout/>,
    children: [
      { index: true, element: <Dashboard /> },
      // { path: "manage", element: <Manage /> },
    ],
  },

])


export default function AppRoute() {
  return (
    <div>
         <RouterProvider router={router} />
    </div>
  )
}


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
import CategoryDetail from '../pages/CategoryDetail'
import AddBlog from '../pages/admin/addBlog'
import BlogUpdate from '../pages/admin/BlogUpdate'
import BlogAdmin from '../pages/admin/BlogAdmin'
import CategoryAdmin from '../pages/admin/CategoryAdmin'
import ProductAdmin from '../pages/admin/ProductAdmin'
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
      {path: "category/snakeDetail/:snakeId", element: <CategoryDetail />}, 
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
      {index: true, element: <Dashboard /> },
      {path: "blogAdmin", element: <BlogAdmin/> }, 
      {path: "blogAdd", element: <AddBlog/> }, 
      {path: "blogUpdate", element: <BlogUpdate/> }, 
      {path: "categoryAdmin", element: <CategoryAdmin/> }, 
      {path: "productAdmin", element: <ProductAdmin/> }, 
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


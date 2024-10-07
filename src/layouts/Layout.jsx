import React from 'react'
import { Outlet } from "react-router-dom"
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div>
        <MainNav/>
        <hr />
        <Outlet />
        <Footer />
    </div>
  )
}

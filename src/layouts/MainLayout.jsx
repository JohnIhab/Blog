import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

export default function MainLayout({ children }) {
  return (
    <div>

        <Navbar />
        <Outlet />
        <main>{children}</main>
    </div>
  )
}

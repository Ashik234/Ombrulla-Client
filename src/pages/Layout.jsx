import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import './styles.css';
function Layout() {
  return (
    <div className="flex min-h-screen outer">
    <div className="flex flex-col flex-grow ">
      <NavBar />
      <div className="flex-grow mt-4">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Layout
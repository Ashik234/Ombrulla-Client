import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import "./styles.css";
import Footer from "../components/Footer/Footer";
function Layout() {
  return (
    <div className="flex min-h-screen">  
    <div className="flex flex-col flex-grow">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="flex flex-col">
        <Outlet />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </div>
  );
}

export default Layout;

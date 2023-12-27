import React, { useState } from "react";
import Ombrulla from "../../assets/OmbrullaLogo.svg";
import Arrow from "/arrow_drop_down.svg";
import "./NavBar.css";

function NavBar() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);

  return (
    <div className="md:px-14 px-0 p-4 flex flex-row justify-between items-center md:mx-10 mx-6">
      <img src={Ombrulla} className="h-12 md:h-8" alt="" />
      <div className="md:flex flex-row hidden gap-x-6 mr-11">
        <h1 className="font-bold text-blue-700">Home</h1>
        <div
          className="relative group"
          onMouseEnter={() => setIsServicesHovered(true)}
          onMouseLeave={() => setIsServicesHovered(false)}
        >
          <div className="flex flex-row">
            <h1 className="font-bold group-hover:text-blue-700 cursor-pointer">
              Services
            </h1>
            <img src={Arrow} alt="" />
          </div>

          {isServicesHovered && (
            <div className="absolute top-full left-0 bg-white p-4  border border-gray-300">
              <p>Service 1</p>
              <hr />
              <p>Service 2</p>
            </div>
          )}
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setIsProductHovered(true)}
          onMouseLeave={() => setIsProductHovered(false)}
        >
          <div className="flex flex-row">
            <h1 className="font-bold group-hover:text-blue-700 cursor-pointer">
              Product
            </h1>
            <img src={Arrow} alt="" />
          </div>
          {isProductHovered && (
            <div className="absolute top-full left-0 bg-white p-4 border border-gray-300">
              <p>Product 1</p>
              <hr />
              <p>Product 2</p>
            </div>
          )}
        </div>

        <h1 className="font-bold hover:text-blue-700 cursor-pointer">About</h1>
        <h1 className="font-bold hover:text-blue-700 cursor-pointer">Blog</h1>
        <h1 className="font-bold hover:text-blue-700 cursor-pointer">
          Contact
        </h1>
      </div>
    </div>
  );
}

export default NavBar;

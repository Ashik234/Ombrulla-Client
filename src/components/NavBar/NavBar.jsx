import React, { useState } from "react";
import Ombrulla from "../../assets/OmbrullaLogo.svg";
import Arrow from "/arrow_drop_down.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  const handleServicesHover = () => {
    setShowServicesDropdown(true);
    setShowProductDropdown(false);
  };

  const handleProductHover = () => {
    setShowProductDropdown(true);
    setShowServicesDropdown(false);
  };

  const handleDropdownLeave = () => {
    setShowServicesDropdown(false);
    setShowProductDropdown(false);
  };

  return (
    <div className="navbar-container" onMouseLeave={handleDropdownLeave}>
      <img src={Ombrulla} className="logo" alt="" />
      <div className="navbar-menu">
        <h1 className="content">Home</h1>
        <div className="menu-item-dropdown" onMouseEnter={handleServicesHover}>
          <h1 className="heading">Services</h1>
          {showServicesDropdown && (
            <div className="dropdown visible">
              <ul className="bg-white">
                <Link
                  to="/ai-visual-inspection"
                  className="block"
                  previewlistener="true"
                >
                  <li className="">AI Visual Inspection</li>
                </Link>
                <Link
                  to="/ai-visual-inspection"
                  className="block"
                  previewlistener="true"
                >
                  <li className="list-item">AI Visual Inspection</li>
                </Link>
                <Link
                  to="/ai-visual-inspection"
                  className="block"
                  previewlistener="true"
                >
                  <li className="list-item">AI Visual Inspection</li>
                </Link>
                <Link
                  to="/ai-visual-inspection"
                  className="block"
                  previewlistener="true"
                >
                  <li className="list-item">AI Visual Inspection</li>
                </Link>
              </ul>
            </div>
          )}
          <img src={Arrow} alt="" className="arrow" />
        </div>
        <div className="menu-item-dropdown" onMouseEnter={handleProductHover}>
          <h1 className="heading">Product</h1>
          {showProductDropdown && (
            <div className="dropdown visible">
              <ul className="bg-white">
                <Link
                  to="/ai-visual-inspection"
                  className="block"
                  previewlistener="true"
                >
                  <li className="list-item">Asset performance</li>
                </Link>
              </ul>
            </div>
          )}
          <img src={Arrow} alt="" className="arrow" />
        </div>
        <h1 className="heading">About</h1>
        <h1 className="heading">Blog</h1>
        <h1 className="heading">Contact</h1>
      </div>
    </div>
  );
}

export default NavBar;

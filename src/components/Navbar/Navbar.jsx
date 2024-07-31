import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("about");
  const storeContext = useContext(StoreContext);
  const getTotal = storeContext.getTotal;

  return (
    <div className='navbar'>
     <Link to='/cart'><img src={assets.logo} alt="Logo" className="logo" /></Link> 
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</li>
        <li className={menu === "about" ? "active" : ""} onClick={() => setMenu("about")}>About</li>
        <li className={menu === "contact" ? "active" : ""} onClick={() => setMenu("contact")}>Contact Us</li>
      </ul>
      <div className="navbar-right">
    
        <div className="navbar-search-icon">
        <Link to='/cart'> <img src={assets.cart} alt="Cart Icon" /></Link>
        <div className={getTotal() === 0 ? "" : "dot"}></div>

        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;

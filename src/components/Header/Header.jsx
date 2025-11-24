import "../Header/header.scss";
import logo from "../../assets/header/logo.png";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping,faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const[menuOpen, setMenuOpen] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <img className="logoImg" src={logo} alt="logo" />

      <ul className={menuOpen? "menu open" : "menu"}>
        <li>LOOKS</li>
        <li>LANÇAMENTOS</li>
        <li>NOVIDADES</li>
        <li>NOVIDADES</li>
        <li>NOVIDADES</li>
        <li>NOVIDADES</li>
        <li>NOVIDADES</li>
        <li>NOVIDADES</li>
        </ul>

        <div className="icons">       
          <FontAwesomeIcon 
          icon={darkMode ? faMoon : faSun} 
          className="icon" 
          onClick={toggleTheme}
          />


          <FontAwesomeIcon icon={faCartShopping} className="icon" />
          <FontAwesomeIcon icon={faUser} className="icon" />
          
          <FontAwesomeIcon 
          icon={faBars} 
          className="icon menu-icon"
          onClick={toggleMenu} 
          />        
      </div>
    </header>
  );
}

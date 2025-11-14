import React from "react";
import logo from "../assets/logo.png";


const Header =() =>{
    return(
        <nav className="navbar">
            <div className="logo">

                <img src={logo} alt="Bastian Logo" />

            </div>

            <div className="navigation_links">

                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#essence">Essence</a></li>    
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </div>

            <div className="btns">

                <button className="bookbtn"> Book Now</button>

            </div>

        </nav>



    );
};

export default Header;
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
                    <li><a href="#about">Home</a></li>
                    <li><a href="#menu">Our Story</a></li>
                    <li><a href="#essence">The Buzz</a></li>    
                    <li><a href="#contact">Careers</a></li>
                </ul>

            </div>

            <div className="btns">

                <button className="bookbtn"> Book Now</button>

            </div>

        </nav>



    );
};

export default Header;
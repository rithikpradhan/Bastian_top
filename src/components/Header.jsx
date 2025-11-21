import React from "react";
import logo from "../assets/logo.png";
import { Link }  from "react-router-dom";


const Header =({onBookClick}) =>{
    return(
        <nav className="navbar">
            <div className="logo">

                <img src={logo} alt="Bastian Logo" />

            </div>

            <div className="navigation_links">

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ourstory">Our Story</Link></li>
                    <li><a href="#essence">The Buzz</a></li>    
                    <li><a href="#contact">Careers</a></li>
                </ul>

            </div>

            <div className="btns">

                <button className="bookbtn" onClick={onBookClick}> Book Now</button>

            </div>

        </nav>



    );
};

export default Header;
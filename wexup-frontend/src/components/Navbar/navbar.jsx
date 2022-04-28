import React from "react";
import './navbar.css'
import logo from '../images/navbar-logo.png'

const Navbar = () => {
    return (
       <div className="navbar">
           <div className="navbar-logo">
               <img src={logo} alt="logo" className="navbar-logo-img" />
           </div>
           <div className="navbar-students"><a className="navbar-students">Студентам</a></div>
           <div className="navbar-companies"><a>Карьерным центрам</a></div>
           <div className="navbar-companies"><a>Компаниям</a></div>
           <div className="navbar-faq"><a>FAQ</a></div>
           <div className="navbar-entrance"><a>Войти</a></div>
           <div className="navbar-registration">
               <a className="navbar-registration-btn" href="/registration/step1">
                   Регистрация
               </a>
           </div>
       </div>

    )
}

    export default  Navbar;
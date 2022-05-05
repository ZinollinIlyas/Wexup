import React, {useState} from "react";
import './navbar.css'
import logo from '../images/navbar-logo.png'
import Modal from "../Modal/Modal";
import Modal2 from "../Modal2/Modal2";

const Navbar = () => {
    const [modalActive,setModalActive] = useState(false)
    const [modalActive2,setModalActive2] = useState(false)

    return (
       <div className="navbar">
           <div className="navbar-logo">
               <img src={logo} alt="logo" className="navbar-logo-img" />
           </div>
           <div className="navbar-students"><a className="navbar-link">Студентам</a></div>
           <div className="navbar-companies"><a className="navbar-link">Карьерным центрам</a></div>
           <div className="navbar-companies"><a className="navbar-link">Компаниям</a></div>
           <div className="navbar-faq"><a className="navbar-link">FAQ</a></div>
           <div className="navbar-entrance">
               <a className="navbar-link"
                  onClick={()=>setModalActive2(true)}>
                   Войти
               </a>
           </div>
           <div className="navbar-registration">
               <button type={"button"} className="navbar-registration-btn"
                       onClick={()=>setModalActive(true)}>
                       Регистрация
               </button>
           </div>
           <Modal active={modalActive} setActive={setModalActive}/>
           <Modal2 active={modalActive2} setActive={setModalActive2}/>

       </div>

    )
}

    export default  Navbar;
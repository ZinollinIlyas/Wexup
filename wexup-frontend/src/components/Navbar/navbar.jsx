import React, {useState} from "react";
import './navbar.css'
import logo from '../images/navbar-logo.png'
import acc from '../images/account.svg'
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
           <div className="navbar-faq">
               <a className="navbar-link"
                  href="/favor">
                   Избранное
               </a>
           </div>
            <div className="navbar-students">
               <a className="navbar-link"
                  href="/">
                   Вакансии
               </a>
           </div>
           <div className="navbarAcc">
               <div className="navbar-entrance">
                   <a className="navbar-link"
                      onClick={()=>setModalActive2(true)}>
                       Войти
                       <img src={acc} className="navAcc"/>
                   </a>
               </div>
               <div className="navbar-registration">
                   <button type={"button"} className="navbar-registration-btn"
                           onClick={()=>setModalActive(true)}>
                           Регистрация
                   </button>
               </div>
           </div>
           <Modal active={modalActive} setActive={setModalActive}/>
           <Modal2 active={modalActive2} setActive={setModalActive2}/>

       </div>

    )
}

    export default  Navbar;
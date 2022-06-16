import React, {Fragment, useContext, useEffect, useState} from "react";
import './navbar.css'
import logo from '../images/navbar-logo.png'
import acc from '../images/account.svg'
import Modal from "../Modal/Modal";
import Modal2 from "../Modal2/Modal2";
import {UserContext} from "../../UserContext";

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState({})
    const [modalActive,setModalActive] = useState(false)
    const [modalActive2,setModalActive2] = useState(false)

    const parseJwt = token => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    const get_user = async () => {
        const access = localStorage.getItem("access");
        if (!access) {
            return {}
        } else {
            const decoded_token = parseJwt(access);
            let response = await fetch(`http://localhost:8000/api/students/${decoded_token.user_id}`)
            let data =  await response.json();
            setCurrentUser(data);
        }
    };

    useEffect(() => {
        get_user();
    }, []);

    const renderauthOptions = () => {
        return (
           <Fragment>
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
           </Fragment>
        )
    };
    const renderUserCircle = () => {
        return (
             <div className="navbar-avatar">
                   <a className="navbar-avatar-link">
                     <img className="avatar-link-img"/>
                   </a>
               </div>
        )
    }
    return (
       <div className="navbar">
           <a href={'/'} className="navbar-logo">
               <img src={logo} alt="logo" className="navbar-logo-img" />
           </a>
           <div className="navbar-students">
               <a className="navbar-link"
                  href="/">
                   На Главную
               </a>
           </div>
           <div className="navbar-companies">
               <a className="navbar-link"
               href="/forCareer">
                   Карьерным центрам
               </a>
           </div>
           <div className="navbar-companies">
               <a className="navbar-link"
               href="/forCompanies">
                   Компаниям
               </a>
           </div>
           <div className="navbar-faq">
               <a className="navbar-link"
                  href="/faq">
                   FAQ
               </a>
           </div>
           <div className="navbarAcc">
               {Object.keys(currentUser).length === 0 ? renderauthOptions() : renderUserCircle()}
           </div>
           <Modal active={modalActive} setActive={setModalActive}/>
           <Modal2 active={modalActive2} setActive={setModalActive2}/>

       </div>

    )
}

    export default  Navbar;
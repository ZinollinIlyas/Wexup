import React from "react";
import './Modal2.css'
import man from '../images/picture-man.png'
import s from "../registration/Registration.css";
import google from "../images/google.png";
import line from "../images/Line 14.png";
import or from "../images/or.png";
import linedown from "../images/Line2.png";



const Modal2 = ({active,setActive}) => {

    const login = async (e) => {
        e.preventDefault();

        console.log("asdfasdf");
        const email = document.getElementById("user_email").value;
        const password = document.getElementById("user_password").value;

        let formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        const response = await fetch("http://localhost:8000/api/token/", {
            method: "POST",
            body: formdata
        })
        const data = await response.json();
        if (response.status === 200) {
            localStorage.setItem("access", data.access)
            localStorage.setItem("refresh", data.refresh)
            window.location.replace("/");
        }
    };
    return (
        <div className={active ? "modal2 active":"modal2"} onClick={() => setActive(false)}>
            <div className={active ? "modalContent2 active":"modalContent2"} onClick={e =>e.stopPropagation()}>
                <form className="modal_form">
                        <div className="modal_google-btn">
                            <a href='/' className="modal_google-link">
                                <img src={google} alt="google" className="modal-google-img"/>
                                Продолжить с Google
                            </a>
                        </div>
                        <div className="modal_form-or">
                            <div className="modal_form-or-content">
                                <img src={line} alt="line" className="form-or-line"/>
                            </div>
                            <div className="modal_form-or-content">
                            <img src={or} alt="or"/>
                            </div>
                            <div className="modal_form-or-content">
                            <img src={line} alt="line" className="form-or-line"/>
                            </div>
                        </div>
                            <div className="modal_form-name">
                                <div className="modal_name-desc">
                                    Адрес электронной почты
                                </div>
                                <div className="modal_name-input">
                                    <input id={"user_email"} placeholder="Введите ваш email" className="modal_name-input-content"/>
                                </div>
                            </div>
                             <div className="modal_form-name modal_form-name-password">
                                <div className="modal_name-desc">
                                    Пароль
                                </div>
                                <div className="modal_name-input">
                                    <input id={"user_password"} type="password" placeholder="Введите пароль" className="modal_name-input-content"/>
                                </div>
                            </div>
                        <div className="modal_form-button">
                                <a onClick={login} className="modal_form-button-content">
                                    Войти
                                </a>
                        </div>
                    </form>

            </div>

        </div>

    )
}
export default Modal2;

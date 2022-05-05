import React from "react";
import './Registration.css'
import logoform from '../images/logo-form.png'
import emptyreg from '../images/empty-reg.png'
import completereg from '../images/complete-reg.png'
import man from '../images/picture-man.png'
import google from '../images/google.png'
import line from '../images/Line 14.png'
import or from '../images/or.png'
import linedown from '../images/Line2.png'
import s from "../registration2/Registration2.module.css";



const Registration = () =>
{
    const submitStepOne = (e) => {
        e.preventDefault();

        const name_field = document.getElementById("student_name").value;
        const email_field = document.getElementById("student_email").value;
        const password_field = document.getElementById("student_password").value;

        localStorage.setItem("first_name", name_field);
        localStorage.setItem("email", email_field);
        localStorage.setItem("password", password_field);
        window.location.replace("/registration/step2");
    };
    return (
        <div>
            <div className="header">
                <div>
                    <img src={logoform} alt="logo-form" className="img-logo" />
                </div>
                <div>
                    <img src={completereg} alt="complete-reg" className="logo-complete"/>
                    <img src={emptyreg} alt="empty-reg" className="logo-empty"/>
                    <img src={emptyreg} alt="empty-reg" className="logo-empty"/>
                    <img src={emptyreg} alt="empty-reg" className="logo-empty"/>
                    <img src={emptyreg} alt="empty-reg" className="logo-empty"/>
                    <img src={emptyreg} alt="empty-reg" className="logo-empty"/>
                </div>
            </div>
            <div className="form">
                <div>
                    <img src={man} alt="man" className="img-person"/>
                </div>
                <div className="form-content">
                    <form onSubmit={submitStepOne}>
                        <div className="google-btn">
                            <div className="google-img">
                                <img src={google} alt="google"/>
                            </div>
                            <a href='/' className="google-link">
                                Продолжить с Google
                            </a>
                        </div>
                        <div className="form-or">
                            <div className="form-or-content">
                                <img src={line} alt="line" className="form-or-line"/>
                            </div>
                            <div className="form-or-content">
                            <img src={or} alt="or"/>
                            </div>
                            <div className="form-or-content">
                            <img src={line} alt="line" className="form-or-line"/>
                            </div>
                        </div>
                        <div className="form-name">
                            <div className="name-desc">
                                Ваше полное имя
                            </div>
                            <div className="name-input">
                                <input id="student_name" placeholder="Введите вашe Имя и Фамилию" className="name-input-content"/>
                            </div>
                        </div>
                        <div className="second-form">
                            <div className="form-name">
                                <div className="name-desc">
                                    Адрес электронной почты
                                </div>
                                <div className="name-input">
                                    <input id="student_email"placeholder="Введите ваш email" className="name-second-content name-email"/>
                                </div>
                            </div>
                            <div className="form-name form-name-password">
                                <div className="name-desc">
                                    Пароль
                                </div>
                                <div className="name-input">
                                    <input id="student_password" type="password" placeholder="Введите пароль" className="name-second-content"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-button">
                                <a href="/registration/step3" className={s.secondButtonContent} onClick={submitStepOne}>
                                        ДАЛЕЕ
                                </a>
                        </div>
                        <div className="line-down">
                            <img src={linedown} alt="line-down"/>
                        </div>
                        <div className="form-down-text">
                            Регистрируясь, вы соглашаетесь с <a className="down-link">пользовательским соглашением</a>
                        </div>
                        <div className="form-come">
                            Уже есть аккаунт? <a className="down-link">Войти</a>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
export  default Registration;
import React from 'react'
import "./ErrorPage.css"
import logo from "../images/ErrorLogoImg.png"
import error from "../images/404.png"


const ErrorPage = () => {

    return (
        <div className="errorPage">
            <div className="errorContent">
                <img className="errorImg" src={error}/>
                <div className="errorDesc">Что-то пошло не так!</div>
                 <a className="errorLink"
                  href="/">
                   Главнaя
               </a>
            </div>
            <div className="errorLogoPage">
                <img className="errorLogo" src={logo}/>
            </div>

        </div>
    )
}

export default ErrorPage;
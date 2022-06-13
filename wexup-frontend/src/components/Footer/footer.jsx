import React from "react";
import './footer.css'
import logo from '../images/navbar-logo.png'
import instagram from '../images/instagram.svg'
import wpp from '../images/whatsapp.svg'
import telegram from '../images/telegram.svg'

const Footer = () => {


    return (
       <div className="footer">
           <div className="footerFirst">
               <a href="/faq" className="footerFaq">FAQ</a>
               <div className="footerImg">
                   <a><img src={instagram}/></a>
                   <a href="https://api.whatsapp.com/send/?phone=87714088661"><img src={wpp}/></a>
                   <a href="https://t.me/wexupfind"><img src={telegram}/></a>
               </div>
           </div>
           <div className="footerSecond">

               Алматы 2022
           </div>
           <div className="footerThird">

               <img className="footerLogo" src={logo}/>
               <p className="footerDesc">Work Experience Up</p>
           </div>
       </div>

    )
}

    export default  Footer;
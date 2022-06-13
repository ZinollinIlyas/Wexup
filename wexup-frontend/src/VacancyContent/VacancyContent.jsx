import React from "react";
import "./VacancyContent.css"
import heart from "../components/images/heart.svg"
const VacancyContent = () => {

    return (
        <div className="vacancyPage">

            <div className="vacancyContentPage">
                <div className="vacancyContentHeader">
                    <h1 className="vacancyCompanyName">
                        <img /> Sanzhaar
                    </h1>
                    <div className="vacancyCompanyDesc">
                        <h1 className="vacancyCompanyJob">Junior web-developer</h1>
                        <div className="vacancyCompanyTerms">
                            <button className="vacancyTermsBlock">Разработка</button>
                            <button className="vacancyTermsBlock">Алматы</button>
                            <button className="vacancyTermsBlock">Полный день</button>
                        </div>
                    </div>
                    <div className="vacancyCompanyFav">
                            <img className="vacancyCompanyImg" src={heart}/>
                            <button className="vacancyBtn">Откликнуться</button>
                    </div>
                </div>
                <div className="vacancyContentBody">
                    <div className="contentBodyBlock">
                        <h1 className="contentBodyTitle">Требования:</h1>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="vacancyContentBody">
                    <div className="contentBodyBlock">
                        <h1 className="contentBodyTitle">Обязанности:</h1>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="vacancyContentBody">
                    <div className="contentBodyBlock">
                        <h1 className="contentBodyTitle">Мы предлагаем:</h1>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default VacancyContent;
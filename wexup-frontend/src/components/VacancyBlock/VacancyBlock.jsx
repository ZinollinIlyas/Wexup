import React from "react";
import "./VacancyBlock.css"
import  star from "../images/heart.svg"


const VacancyBlock = props => {

    return (
        <div className="vacancies">
            <div className="vacancyBlock">
                <div className="vacancyTitleContent">
                        <h1 className="vacancyTitle">{props.vacancy.title}</h1>
                        <img src={star} className="titleStar"/>
                </div>
                <div className="vacancyPlace">
                    {props.company}
                </div>
                <div className="vacancyCity">
                    {props.vacancy.city}
                </div>
                <div className="vacancyDesc">
                    {props.vacancy.description}
                </div>
                <div className="vacanciesButton">
                    <button className="vacancyBtn">
                        Откликнуться
                    </button>
                    <button className="vacancyBtn">
                        Позвонить
                    </button>
                </div>
            </div>
        </div>


    )
}
export  default VacancyBlock;
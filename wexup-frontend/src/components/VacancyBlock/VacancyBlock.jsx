import React from "react";
import "./VacancyBlock.css"
import  heart from "../images/heart2.svg"
import {useNavigate} from "react-router-dom";

const VacancyBlock = props => {
    const navigate = useNavigate();
    const goVacancyPage = () => navigate('/VacancyPage')
    return (
        <div className="vacancies">
            <div onClick={goVacancyPage} className="vacancyBlock">
                <div className="vacancyFirst">
                    <div className="vacancyTitleContent">
                            <h2 className="vacancyTitle">{props.title}</h2>
                    </div>
                    <div className="vacancyPlace">
                        {props.company}
                    </div>
                    <div className="vacancyDesc">
                        <div className="vacancyDescBlocks">
                            Разработка
                        </div>
                         <div className="vacancyDescBlocks">
                            Алматы
                        </div>
                         <div className="vacancyDescBlocks">
                            Полный день
                        </div>

                    </div>
                </div>
                <div className="vacancySecond">
                    <div className="vacancyImg">
                        <img src={heart} className="titleHeart"/>
                    </div>
                    <div className="vacanciesButton">
                        <button className="vacancyBtn">
                            Откликнуться
                        </button>
                    </div>
                </div>
            </div>

        </div>


    )
}
export  default VacancyBlock;
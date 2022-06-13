import React,{useState} from "react";
import "./VacancyBlock.css"
import  heart from "../images/heart2.svg"
import {useNavigate} from "react-router-dom";
import heart2 from "../images/Polygon 5.svg"

const VacancyBlock = props => {
        const [show2,setShow2] = useState(false);
        const [show3,setShow3] = useState(false);

    const navigate = useNavigate();
    const goVacancyPage = () => navigate('/VacancyPage')
    return (
        <div className="vacancies">
            <div className="vacancyBlock">
                <div  onClick={goVacancyPage} className="vacancyFirst">
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
                       {
                                            show2 ?
                                        <img onClick={()=> setShow2(!show2)}  src={heart2}/>:
                                        <img onClick={()=> setShow2(!show2)}  src={heart}/>
                                    }
                    </div>
                    <div className="vacanciesButton">
                        {
                            show3 ?
                                <button onClick={()=> setShow3(show3)}  className="vacancyBtnSecond"> Вы откликнулись!</button>:
                                <button onClick={()=> setShow3(!show3)} className="vacancyBtn" > Откликнуться </button>
                                    }
                    </div>
                </div>
            </div>

        </div>


    )
}
export  default VacancyBlock;
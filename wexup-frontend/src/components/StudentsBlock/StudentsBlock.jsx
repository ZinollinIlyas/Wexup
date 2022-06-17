import  React from "react"
import "./StudentsBlock.css"
import heart from "../images/normalHeart.svg";
import heart2 from "../images/heart.svg";

const StudentsBlock = () => {
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
                                        <img onClick={()=> setShow2(!show2)}  src={heart}/>:
                                        <img onClick={()=> setShow2(!show2)}  src={heart2}/>
                                    }
                    </div>
                    <div className="vacanciesButton">
                        {
                            show3 ?
                                <button onClick={()=> setShow3(show3)}  className="vacancyBtnSecond"> Вы откликнулись!</button>:
                                <button onClick={respondVacancy} className="vacancyBtn" > Откликнуться </button>
                                    }
                    </div>
                </div>
            </div>
        </div>


        )
}
export default StudentsBlock;
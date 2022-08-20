import  React from "react"
import "./StudentsBlock.css"
import heart from "../images/normalHeart.svg";
import heart2 from "../images/heart.svg";

const StudentsBlock = props => {
    return (
        <div className="vacancies">
            <div className="vacancyBlock">
                <div className="vacancyFirst">
                    <div className="vacancyTitleContent">
                            <h2 className="vacancyTitle">{props.first_name} {props.second_name}</h2>
                    </div>
                    <div className="vacancyPlace">
                        {props.university}
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
                        <img src={heart2}/>
                    </div>
                    <div className="vacanciesButton">
                        <a href={`http://${process.env.REACT_APP_API_URL}${props.resume}`} className="vacancyBtn" > Резюме </a>
                    </div>
                </div>
            </div>
        </div>


        )
}
export default StudentsBlock;
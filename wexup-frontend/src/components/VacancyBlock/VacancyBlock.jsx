import React, {useEffect, useState} from "react";
import "./VacancyBlock.css"
import  heart from "../images/normalHeart.svg"
import {useNavigate} from "react-router-dom";
import heart2 from "../images/heart.svg"

const VacancyBlock = props => {
    const [show2,setShow2] = useState(false);
    const [show3,setShow3] = useState(false);
    const navigate = useNavigate();
    const goVacancyPage = () => navigate(`/VacancyPage/${props.id}`);

    const respondVacancy = async () => {
        setShow3(!show3)
        let formdata = new FormData();
        console.log(props.id);
        console.log(props.currentUser)
        formdata.append("students", [props.currentUser.id])
        let response = await fetch(`http://localhost:8000/api/vacancies/update/${props.id}`, {
            method: "PUT",
            body: formdata
        })
        let data = await response;
        console.log(data);
    }

    const check_students = () => {
        props.students.map(student => {
            if (student.id === props.currentUser.id) {
                setShow3(true);
            }
        })
    }

    useEffect(() => {
        check_students();
    }, [show3]);
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
export  default VacancyBlock;
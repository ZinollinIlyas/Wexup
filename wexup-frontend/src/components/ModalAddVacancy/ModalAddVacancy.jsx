import React from "react"
import "./ModalAddVacancy.css"
import cross from "../images/x.svg"



const ModalAddVacancy = ({active,setActive}) => {

    return (
        <div className={active ? "modalAdd active" :"modalAdd"} onClick={()=> setActive(false)}>
            <div className="modalAddContent" onClick={e => e.stopPropagation()}>
                <div className="addContentList">
                    <div className="modalAddTitle">
                        <h1 className="addTitleContent">Создание вакансии</h1>
                        <img className="addTitleImg" src={cross} onClick={()=> setActive(false)}/>
                    </div>
                    <div className="addContentBody">
                        <div className="modalAddInputs">
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Название вакансии</h2>
                                <input placeholder="Например: Junior web - разработчик" className="inputContentBlock"/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Оклад</h2>
                                <input placeholder="Например: 100 000тг" className="inputContentBlock"/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Требование</h2>
                                <input placeholder="Опишите требования к кандидату" className="inputContentBlock inputContentBlockSecond "/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Обязанности</h2>
                                <input placeholder="Опишите обязанности будущего сотрудника" className="inputContentBlock inputContentBlockSecond"/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Условия</h2>
                                <input placeholder="Условия работы в вашей компании" className="inputContentBlock inputContentBlockSecond"/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Адрес</h2>
                                <input placeholder="Например: г. Алматы, ул. Толе би, 59" className="inputContentBlock"/>
                            </div>
                            <div>
                                <button className="inputContentBtn">Опубликовать</button>
                            </div>
                        </div>
                        <div className="modalAddAttention">
                        <h1>Внимание!</h1>
                        <div className="addContentAttention">
                            При публикации вакансии запрещается размещать информацию,
                            содержащую требования дискриминационного характера в сфере труда
                            (ограничения в зависимости от пола, возраста, места жительства
                            и иных обстоятельств, не связанных с деловыми качествами и спецификой
                            трудовой функции кандидата). Согласно п. 2 Ст. 6. Трудового Кодекса РК
                            от 23 ноября 2015 года № 414-V и п. 3-.2 Ст. 14 Закона РК от 23 июля 1999 года
                            № 451-I "О средствах массовой информации".
                        </div>

                        </div>
                    </div>
                 </div>

            </div>
        </div>
    )
}

export  default ModalAddVacancy;
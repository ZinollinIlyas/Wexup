import React, {useEffect, useState} from "react"
import "./ModalAddVacancy.css"
import cross from "../images/x.svg"



const ModalAddVacancy = ({active,setActive, current_user}) => {
    const createVacancy = async (e) => {
        e.preventDefault();

        const title = document.getElementById("vacancy_title").value;
        const company = document.getElementById("vacancy_company").value;
        const wage = document.getElementById("vacancy_wage").value;
        const description = document.getElementById('vacancy_description').value;
        const requirements_fields = document.getElementById("vacancy_requirements").value;
        const duties = document.getElementById("vacancy_duties").value;
        const conditions = document.getElementById("vacancy_conditions").value;
        const address = document.getElementById("vacancy_address").value;
        const contact = document.getElementById("vacancy_contact").value
        let formdata = new FormData();
        formdata.append("title", title);
        formdata.append("company", company)
        formdata.append("wage", wage);
        formdata.append("description", description)
        formdata.append("requirements", requirements_fields);
        formdata.append("duties", duties);
        formdata.append("conditions", conditions);
        formdata.append("address", address);
        formdata.append("recruiter", current_user.id)
        formdata.append("contact", contact)
        console.log(contact)

        let response = await fetch(`http://${process.env.REACT_APP_API_URL}/api/vacancies/`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`
            },
            body: formdata,
        })
        let data = await response.json();
        console.log(data)
        if (response.status === 200) {
            console.log(data);
            setActive(false);
        } else {
            console.log("dasfas")
        }
    }


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
                                <input id={'vacancy_title'} placeholder="Например: Junior web - разработчик" className="inputContentBlock"/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Компания</h2>
                                <input id={'vacancy_company'} placeholder="Например: Prime Source" className="inputContentBlock"/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Оклад</h2>
                                <input id={'vacancy_wage'} placeholder="Например: 100 000тг" className="inputContentBlock"/>
                            </div>
                             <div className="addContentInput">
                                <h2 className="addInputTitle">Описание</h2>
                                <input id={'vacancy_description'} placeholder="Например: Мы занимаемся тем, что..." className="inputContentBlock"/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Требование</h2>
                                <input id={'vacancy_requirements'} placeholder="Опишите требования к кандидату через запятую" className="inputContentBlock inputContentBlockSecond "/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Обязанности</h2>
                                <input id={"vacancy_duties"} placeholder="Опишите обязанности будущего сотрудника через запятую" className="inputContentBlock inputContentBlockSecond"/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Условия</h2>
                                <input id={"vacancy_conditions"} placeholder="Условия работы в вашей компании через запятую" className="inputContentBlock inputContentBlockSecond"/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Адрес</h2>
                                <input id={"vacancy_address"} placeholder="Например: г. Алматы, ул. Толе би, 59" className="inputContentBlock"/>
                            </div>
                            <div className="addContentInput">
                                <h2 className="addInputTitle">Контакты</h2>
                                <input id={"vacancy_contact"} placeholder="Телефон или почтовый адрес" className="inputContentBlock"/>
                            </div>
                            <div>
                                <button onClick={createVacancy} className="inputContentBtn">Опубликовать</button>
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
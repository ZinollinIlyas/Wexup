import React, {useEffect, useState} from 'react';
import "./OfficeCompany.css"
import pencil from "../images/reductPencil.svg"
import ModalWay from "../ModalAddWay/ModalWay";
import ModalAddVacancy from "../ModalAddVacancy/ModalAddVacancy";
import VacancyBlock from "../VacancyBlock/VacancyBlock";


const OfficeCompany = () => {


    const [modalAddActive,setModalAddActive] = useState(false)
    const [modalActive,setModalActive] = useState(false)
    const [current_user, setCurrentUser] = useState({});
    const [vacancies, setVacancies] = useState([]);


    const parseJwt = token => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    const get_user = async () => {
        const access = localStorage.getItem("access");
        if (!access) {
            return {}
        } else {
            const decoded_token = parseJwt(access);
            let response = await fetch(`http://${process.env.REACT_APP_API_URL}/api/users/recruiters/${decoded_token.user_id}`)
            let data =  await response.json();
            console.log(data);
            setCurrentUser(data);
        }
    };

    const get_vacancies = async () => {
        const access = localStorage.getItem("access");
        const decoded_token = parseJwt(access);
        const response = await fetch(`http://${process.env.REACT_APP_API_URL}/api/vacancies/`);
        const data = await response.json();
        const filtered_vacancies = data.filter(vacancy => vacancy.recruiter === decoded_token.user_id);
        console.log(filtered_vacancies)
        setVacancies(filtered_vacancies);
    }

    const update_avatar = async () => {
        const access = localStorage.getItem("access");
        const decoded_token = parseJwt(access);
        const avatar = document.getElementById("company-avatar").files[0];
        let formData = new FormData();
        formData.append("avatar", avatar);

        let options = {
            method: "PUT",
            header: {
                "Content-Type": "application/json"
            },
            body: formData
        }

        const response = await fetch(`http://${process.env.REACT_APP_API_URL}/api/users/recruiters/update/${decoded_token.user_id}`, options);
        if (response.status === 200) {
            window.location.reload();
        }
    }

    useEffect(() => {
        get_user();
        get_vacancies();
    }, []);
    return (
        <form onSubmit={update_avatar}>
                    <div className="company-content">
            <div className="company-first">
                <div className="company-first-head">
                    <div className="company-head-img">
                        <img src={current_user.avatar} alt="avatar" className="comapany-photo"/>
                    </div>
                    <input type="file" className="company-profile-photo" id="company-avatar"/>
                    <div className="company-head-desc">
                        <h1 className="company-head-name">{current_user.company}</h1>
                        <div className="company-head-age">www.p-s.kz</div>
                        <div className="company-head-number">+7(771)408-86-61</div>
                    </div>
                    <div className="company-head-redact">
                        <button type={"submit"} className="company-redact-btn">Редактировать</button>
                    </div>
                </div>

                    <div className="company-first-body">
                        <div  className="body-company">
                            <h2 className="company-body-title">О Компании</h2>
                            <input className="company-body-input" placeholder="Расскажите немного о компании,направлении"/>
                            <a> +Добавить информацию о Компании</a>
                        </div>
                    </div>
                <div className="company-first-body">
                        <div  className="body-company">
                            <h2 className="company-body-title">Направления</h2>
                            <input className="company-body-way"/>
                            <button onClick={()=>setModalActive(true)} className="company-pencil">
                                <img src={pencil}/>
                            </button>

                        </div>
                    </div>
            </div>
            <div className="company-second">
                    <div className="company-second-head">
                        <h1 className="company-second-title">Активные вакансии</h1>
                        <a onClick={()=> setModalAddActive(true)} className="company-add-vacancy"> +Добавить вакансию</a>
                    </div>
                {vacancies.map(vacancy => (
                    <VacancyBlock key={vacancy.id} id={vacancy.id} title={vacancy.title} company={vacancy.company} students={vacancy.students}/>
                ))}
            </div>


            <ModalWay active={ modalActive} setActive={setModalActive}/>
            <ModalAddVacancy active={modalAddActive} setActive={setModalAddActive} current_user={current_user}/>
        </div>
        </form>

    )

}

export default OfficeCompany
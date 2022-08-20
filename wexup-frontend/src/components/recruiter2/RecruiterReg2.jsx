import React, {useState} from "react";
import s from './RecruiterReg2.module.css'
import logoform from '../images/logo-form.png'
import emptyreg from '../images/empty-reg.png'
import completereg from '../images/complete-reg.png'
import woman from '../images/recruiterMan.png'
import linedown from '../images/Line2.png'
import Modal2 from "../Modal2/Modal2";
const RecruiterReg2 = () =>
{
    const [modalActive2,setModalActive2] = useState(false);
    const submitRecruiterReg2 = async (e) => {
        e.preventDefault();


        const company_field = document.getElementById("recruiter_company").value;
        const position = document.getElementById("recruiter_position").value;
        const first_name = localStorage.getItem("first_name");
        const second_name = localStorage.getItem("second_name");
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        let formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("first_name", first_name);
        formdata.append("second_name", second_name);
        formdata.append("company", company_field);
        formdata.append("position", position);
        formdata.append("role", "recruiter");
        let options = {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: formdata
        }
        let response = await fetch(`http://${process.env.REACT_APP_API_URL}:8000/api/users/recruiters/`, options);
        let data = await response.json();
        if (response.status === 200) {
            console.log(data);
            let another_formData = new FormData();
            another_formData.append("email", data.email)
            another_formData.append("password", localStorage.getItem("password"))
            let another_response = await fetch(`http://${process.env.REACT_APP_API_URL}/api/token/`, {
                method: "POST",
                header: {
                "Content-Type": "application/json"
                },
                body: another_formData
            })
            let another_data = await another_response.json();
            if (another_response.status === 200) {
                localStorage.setItem("access", another_data.access);
                localStorage.setItem("refresh", another_data.refresh);
                window.location.replace("/")
            } else {
                alert("Could not get tokens");
            }
        } else {
            alert("Something went wrong, try again");
        }

    }

    return (
        <div>
            <div className={s.header}>
                <div>
                    <img src={logoform} alt="logo-form" className={s.imgLogo} />
                </div>
                <div>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>

                </div>
            </div>
            <div className={s.form}>
                <div>
                    <img src={woman} alt="woman" className={s.imgPerson}/>
                </div>
                <div className={s.formContent}>
                    <form>
                        <div className={s.formName}>
                            <div className={s.nameDesc}>
                                Компания/Название организации
                            </div>
                            <div className={s.nameInput}>
                                <input id={'recruiter_company'} placeholder="Введите название компании" className={s.nameInputContent}/>
                            </div>
                        </div>
                             <div className={s.formName}>
                                <div className={s.nameDesc}>
                                    Должность
                                </div>
                                <div className={s.nameInput}>
                                    <input id={'recruiter_position'} placeholder="Введите вашу должность" className={s.nameInputContent}/>
                                </div>
                             </div>
                        <div className={s.formBtns}>
                            <div className={s.firstButton}>
                                <a href="/recruiterReg/step1" className={s.firstButtonContent}>
                                    НАЗАД
                                </a>
                            </div>
                            <div className={s.secondButton}>
                                    <a onClick={submitRecruiterReg2} className={s.secondButtonContent}>
                                        Завершить регистрацию
                                    </a>
                            </div>
                        </div>
                        <div className={s.lineDown}>
                            <img src={linedown} alt="line-down"/>
                        </div>
                        <div className="form-down-text">
                            Регистрируясь, вы соглашаетесь с <a className={s.downLink}>пользовательским соглашением</a>
                        </div>
                        <div className={s.formCome}>
                            Уже есть аккаунт? <a className={s.downLink}
                            onClick={()=>setModalActive2(true)}>
                                Войти
                            </a>
                        </div>
                    </form>

                </div>
            </div>
                        <Modal2 active={modalActive2} setActive={setModalActive2}/>


        </div>
    )
}
export  default RecruiterReg2;
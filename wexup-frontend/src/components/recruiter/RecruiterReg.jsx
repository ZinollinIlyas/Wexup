import React, {useState} from "react";
import s from'./RecruiterReg.module.css'
import logoform from '../images/logo-form.png'
import emptyreg from '../images/empty-reg.png'
import completereg from '../images/complete-reg.png'
import woman from '../images/recruiterMan.png'
import linedown from '../images/Line2.png'
import Modal2 from "../Modal2/Modal2";
const RecruiterReg1 = () =>
{
    const [modalActive2,setModalActive2] = useState(false);

    const submitRecruiterRegStep1 = (e) => {
        e.preventDefault();

        const name_field = document.getElementById("recruiter_name").value;
        const first_name = name_field.split(' ')[0];
        const second_name = name_field.split(' ')[1];
        const email_field = document.getElementById("recruiter_email").value;
        const password_field = document.getElementById("recruiter_password").value;
        localStorage.setItem("first_name", first_name);
        localStorage.setItem("second_name", second_name);
        localStorage.setItem("email", email_field);
        localStorage.setItem("password", password_field);
        window.location.replace("/recruiterReg/step2");
    }
    return (
        <div>
            <div className={s.header}>
                <div>
                    <img src={logoform} alt="logo-form" className={s.imgLogo} />
                </div>
                <div>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={emptyreg} alt="empty-reg" className={s.logoEmpty}/>
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
                                Ваше полное имя
                            </div>
                            <div className={s.nameInput}>
                                <input id={'recruiter_name'} placeholder="Введите ваше Имя и Фамилию" className={s.nameInputContent}/>
                            </div>
                        </div>
                             <div className={s.formName}>
                                <div className={s.nameDesc}>
                                    Адрес  электронной почты
                                </div>
                                <div className={s.nameInput}>
                                    <input id={'recruiter_email'} placeholder="Введите ваше адрес элетронной почты" className={s.nameInputContent}/>
                                </div>
                             </div>
                        <div className={s.formName}>
                            <div className={s.nameDesc}>
                                Пароль
                            </div>
                            <div className={s.nameInput}>
                                <input id={'recruiter_password'} type="password" placeholder="Введите пароль" className={s.nameInputContent}/>
                            </div>
                        </div>
                        <div className={s.formBtns}>
                            <div className={s.firstButton}>
                                <a href="/" className={s.firstButtonContent}>
                                    НАЗАД
                                </a>
                            </div>
                            <div className={s.secondButton}>
                                    <a onClick={submitRecruiterRegStep1} className={s.secondButtonContent}>
                                        ДАЛЕЕ
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
                            Уже есть аккаунт?
                            <a className={s.downLink}
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
export  default RecruiterReg1;
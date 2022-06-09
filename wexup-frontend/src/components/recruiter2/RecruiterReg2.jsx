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
                                <input placeholder="Введите название компании" className={s.nameInputContent}/>
                            </div>
                        </div>
                             <div className={s.formName}>
                                <div className={s.nameDesc}>
                                    Должность
                                </div>
                                <div className={s.nameInput}>
                                    <input placeholder="Введите вашу должность" className={s.nameInputContent}/>
                                </div>
                             </div>
                        <div className={s.formBtns}>
                            <div className={s.firstButton}>
                                <a href="/recruiterReg/step1" className={s.firstButtonContent}>
                                    НАЗАД
                                </a>
                            </div>
                            <div className={s.secondButton}>
                                    <a href="/" className={s.secondButtonContent}>
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
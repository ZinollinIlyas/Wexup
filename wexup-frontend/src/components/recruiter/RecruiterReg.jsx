import React from "react";
import s from'./RecruiterReg.module.css'
import logoform from '../images/logo-form.png'
import emptyreg from '../images/empty-reg.png'
import completereg from '../images/complete-reg.png'
import woman from '../images/recruiterMan.png'
import linedown from '../images/Line2.png'
const RecruiterReg1 = () =>
{
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
                                <input placeholder="Введите ваше Имя и Фамилию" className={s.nameInputContent}/>
                            </div>
                        </div>
                             <div className={s.formName}>
                                <div className={s.nameDesc}>
                                    Адрес  электронной почты
                                </div>
                                <div className={s.nameInput}>
                                    <input placeholder="Введите ваше адрес элетронной почты" className={s.nameInputContent}/>
                                </div>
                             </div>
                          <div className={s.formName}>
                            <div className={s.nameDesc}>
                                Адрес рабоочей электронной почты(не обязательно)
                            </div>
                            <div className={s.nameInput}>
                                <input placeholder="Введите ваше адрес элетронной почты" className={s.nameInputContent}/>
                            </div>
                        </div>
                        <div className={s.formName}>
                            <div className={s.nameDesc}>
                                Пароль
                            </div>
                            <div className={s.nameInput}>
                                <input type="password" placeholder="Введите пароль" className={s.nameInputContent}/>
                            </div>
                        </div>
                        <div className={s.formBtns}>
                            <div className={s.firstButton}>
                                <a href="/" className={s.firstButtonContent}>
                                    НАЗАД
                                </a>
                            </div>
                            <div className={s.secondButton}>
                                    <a href="/recruiterReg/step2" className={s.secondButtonContent}>
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
                            Уже есть аккаунт? <a className={s.downLink}>Войти</a>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
export  default RecruiterReg1;
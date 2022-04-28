import React from "react";
import s from'./Registration2.module.css'
import logoform from '../images/logo-form.png'
import emptyreg from '../images/empty-reg.png'
import completereg from '../images/complete-reg.png'
import woman from '../images/picture-women.png'
import linedown from '../images/Line2.png'
const Registration2 = () =>
{
    return (
        <div>
            <div className={s.header}>
                <div>
                    <img src={logoform} alt="logo-form" className={s.imgLogo} />
                </div>
                <div>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={emptyreg} alt="empty-reg" className={s.logoEmpty}/>
                    <img src={emptyreg} alt="empty-reg" className={s.logoEmpty}/>
                    <img src={emptyreg} alt="empty-reg" className={s.logoEmpty}/>
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
                                Учебное заведение
                            </div>
                            <div className={s.nameInput}>
                                <input placeholder="Введите название вашего учебного заведения" className={s.nameInputContent}/>
                            </div>
                        </div>
                            <div className={s.secondForm}>
                                <div className={s.formName}>
                                    <div className={s.nameDesc}>
                                        Город
                                    </div>
                                    <div className={s.nameInput}>
                                        <select name="color" className={s.secondInput}>
                                            <option>Алматы</option>
                                            <option>Астана</option>
                                            <option>Караганда</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={s.formName}>
                                    <div className={s.nameDesc}>
                                        Период обучения
                                    </div>
                                    <div className={s.nameInput}>
                                        <input type="" placeholder="__ /____ — __ /____" className={s.secondInput}/>
                                    </div>
                                </div>
                            </div>
                          <div className={s.formName}>
                            <div className={s.nameDesc}>
                                Специальность
                            </div>
                            <div className={s.nameInput}>
                                <input placeholder="Введите вашу специальность" className={s.nameInputContent}/>
                            </div>
                        </div>
                        <div className={s.formBtns}>
                            <div className={s.firstButton}>
                                <a href="/registration/step1" className={s.firstButtonContent}>
                                    НАЗАД
                                </a>
                            </div>
                            <div className={s.secondButton}>
                                    <a href="/registration/step3" className={s.secondButtonContent}>
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
export  default Registration2;
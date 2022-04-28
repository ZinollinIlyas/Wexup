import React from "react";
import s from'./Registration3.module.css'
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
                    <a href="/registration/step2" className={s.firstButtonContent}>
                        НАЗАД
                    </a>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={emptyreg} alt="empty-reg" className={s.logoEmpty}/>
                    <img src={emptyreg} alt="empty-reg" className={s.logoEmpty}/>
                    <img src={emptyreg} alt="empty-reg" className={s.logoEmpty}/>
                     <a href="/registration/step4" className={s.secondButtonContent}>
                         ДАЛЕЕ
                     </a>
                </div>
            </div>
            <div className={s.main}>
                <div className={s.male}>
                        <div className={s.maleTitle}>
                            Ваш пол *
                        </div>
                        <div className={s.maleInput}>
                            <input type="button" value="Мужской" className={s.malePerson}/>
                            <input type="button" value="Женский" className={s.malePerson}/>
                        </div>

                </div>
                <div>
                    <div className={s.profile}>
                        <div className={s.profileTitle}>
                            Фото профиля
                        </div>
                        <div className={s.profileDesc}>
                            Загрузите фото профиля, чтобы у рекрутеров было представление о вас
                        </div>
                        <div className={s.inputFile}>
                            <input type="file" className={s.inputFileContent}/>
                        </div>

                        <div className={s.profileTitle}>
                           Резюме
                        </div>
                        <div>
                            <input type="file" className={s.inputFileContent}/>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export  default Registration2;
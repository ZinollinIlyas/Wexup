import React from "react";
import s from'./Registration4.module.css'
import logoform from '../images/logo-form.png'
import emptyreg from '../images/empty-reg.png'
import completereg from '../images/complete-reg.png'
const Registration2 = () =>
{
    return (
        <div>
            <div className={s.header}>
                <div>
                    <img src={logoform} alt="logo-form" className={s.imgLogo} />
                </div>
                <div>
                    <a href="/registration/step3" className={s.firstButtonContent}>
                        НАЗАД
                    </a>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={completereg} alt="complete-reg" className={s.logoComplete}/>
                    <img src={emptyreg} alt="empty-reg" className={s.logoEmpty}/>
                    <img src={emptyreg} alt="empty-reg" className={s.logoEmpty}/>
                     <a href="/registration/step3" className={s.secondButtonContent}>
                         ДАЛЕЕ
                     </a>
                </div>
            </div>

            <div className={s.main}>
                <div className={s.title}>
                    <div className={s.titleContent}> Предпочитаемая роль </div>
                    <div className={s.titleDesc}>Выберите роли в которых ты заинтересован? До 4 профессий</div>
                </div>
                    <form>
                        <div className={s.form}>
                        <div className={s.formContent}>
                                <div className={s.formContentFirst} onClick={() =>{} }>
                                    Product Manager
                                </div>
                                <div className={s.formContentFirst}>
                                    Маркетинг
                                </div>
                                <div className={s.formContentFirst}>
                                    HR
                                </div>
                            </div>
                             <div className={s.formContent}>
                                <div className={s.formContentFirst}>
                                    Product дизайнер
                                </div>
                                <div className={s.formContentFirst}>
                                    Консалтинг
                                </div>
                                <div className={s.formContentFirst}>
                                    Рекрутер
                                </div>
                             </div>
                            <div className={s.formContent}>
                                <div className={s.formContentFirst}>
                                    Full stack
                                </div>
                                <div className={s.formContentFirst}>
                                    Frontend
                                </div>
                                <div className={s.formContentFirst}>
                                    Backend
                                </div>
                             </div>
                            <div className={s.formContent}>
                                <div className={s.formContentFirst}>
                                    Копирайтинг
                                </div>
                                <div className={s.formContentFirst}>
                                    Специалист по данным
                                </div>
                                <div className={s.formContentFirst}>
                                    Контент Стратег
                                </div>
                             </div>
                            <div className={s.formContent}>
                                <div className={s.formContentFirst}>
                                    Инженер Данных
                                </div>
                                <div className={s.formContentFirst}>
                                    ML инженер
                                </div>
                                <div className={s.formContentFirst}>
                                    Специалист по безопастности
                                </div>
                             </div>
                            <div className={s.formContent}>
                                <div className={s.formContentFirst}>
                                   Финансист
                                </div>
                                <div className={s.formContentFirst}>
                                    Системный Администратор
                                </div>
                                <div className={s.formContentFirst}>
                                    Devops Разработчик
                                </div>
                             </div>
                            <div className={s.formContent}>
                                <div className={s.formContentFirst}>
                                   Продажи
                                </div>
                                <div className={s.formContentFirst}>
                                    Кординатор по Логистике
                                </div>
                                 <div className={s.formContentFirst}>
                                   Android Разработчик
                                </div>
                             </div>
                            <div className={s.formContent}>
                                <div className={s.formContentFirst}>
                                   IOS Разработчик
                                </div>
                                  <div className={s.formContentFirst}>
                                   Еще не определился
                                </div>
                             </div>
                        </div>
                        <div>
                            <input type="text" placeholder="Другое(напишите,что именно)" className={s.formLast}/>
                        </div>
                    </form>

            </div>


        </div>
    )
}
export  default Registration2;
import React from 'react';
import "./PrivateOffice.css"


const PrivateOffice = () => {

    return (
        <div className="office-content">
            <div className="office-first">
                <div className="office-first-head">
                    <div className="head-img">
                        <input type="file" className="office-profile-photo"/>
                    </div>
                    <div className="head-desc">
                        <h1 className="head-name">Исмагулова Альбина</h1>
                        <div className="head-age">21 год</div>
                        <div className="head-number">+7(771)408-86-61</div>
                    </div>
                    <div className="head-redact">
                        <button className="head-redact-btn">Редактировать</button>
                    </div>
                </div>

                    <div className="office-first-body">
                        <div  className="body-first">
                            <h2 className="body-titles">Обо мне</h2>
                            <input className="body-input" placeholder="Расскажите немного о себе, чтобы мы могли предложить вам лучшие возможности!"/>
                            <a> +Добавить информацию о себе</a>
                        </div>
                        <div  className="body-first">
                            <h2 className="body-titles" >Опыт работы</h2>
                            <input className="body-input" placeholder="Добавьте свой опыт, а если его нет - не страшно"/>
                            <a> +Добавить опыт работы</a>
                        </div>
                        <div  className="body-first">
                            <h2 className="body-titles">Образование</h2>
                            <input className="body-input" placeholder="Добавьте своё место обучения"/>
                            <a> +Добавить ВУЗ</a>
                        </div>
                        <div  className="body-first">
                            <h2 className="body-titles">Квалификация</h2>
                            <input className="body-input" placeholder="Какие курсы вам понравились и в которых вы преуспели"/>
                            <a> +Добавить курс</a>
                        </div>
                        <div  className="body-first">
                            <h2 className="body-titles">Хоби,интересы</h2>
                            <input className="body-input" placeholder="Чем вы занимаетесь в свободное время?"/>
                            <a> +Добавить курс</a>
                        </div>
                    </div>
            </div>
            <div className="office-second">
                <div className="office-second-head">
                    <h1 className="second-head-title">Резюме</h1>
                    <input className="second-head-input" type="file"/>
                </div>
            </div>

        </div>
    )
}

export default PrivateOffice
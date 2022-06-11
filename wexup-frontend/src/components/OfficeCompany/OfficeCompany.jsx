import React, {useState} from 'react';
import "./OfficeCompany.css"
import pencil from "../images/reductPencil.svg"
import ModalWay from "../ModalAddWay/ModalWay";


const OfficeCompany = () => {

    const [modalActive,setModalActive] = useState(false)
    return (
        <div className="company-content">
            <div className="company-first">
                <div className="company-first-head">
                    <div className="company-head-img">
                        <input type="file" className="company-profile-photo"/>
                    </div>
                    <div className="company-head-desc">
                        <h1 className="company-head-name">TOO Prime Source</h1>
                        <div className="company-head-age">www.p-s.kz</div>
                        <div className="company-head-number">+7(771)408-86-61</div>
                    </div>
                    <div className="company-head-redact">
                        <button className="company-redact-btn">Редактировать</button>
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
                        <a className="company-add-vacancy"> +Добавить вакансию</a>
                    </div>
            </div>


            <ModalWay active={ modalActive} setActive={setModalActive}/>
        </div>

    )

}

export default OfficeCompany
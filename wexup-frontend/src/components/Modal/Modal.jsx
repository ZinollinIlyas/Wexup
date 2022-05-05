import React from "react";
import './Modal.css'
import man from '../images/picture-man.png'




const Modal = ({active,setActive}) => {
    return (
        <div className={active ? "modal active":"modal"} onClick={() => setActive(false)}>
            <div className={active ? "modalContent active":"modalContent"} onClick={e =>e.stopPropagation()}>
                <div className="modal-content-include">
                    <div className="modal-img">
                        <img src={man} className="modal-img-content"/>
                    </div>
                    <div>
                        <div className="modal-title">
                            <h1>
                                Выберите роль
                            </h1>
                        </div>
                            <div className="modal-content-form">
                                <div className="modal-recruiter">
                                        <a href="/recruiterReg/step1" className="modal-button">
                                            Я рекрутер
                                        </a>
                                </div>
                                <div className="modal-student">
                                    <a href= "/registration/step1" className="modal-button">

                                        Я студент
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </div>

    )
}
export default Modal;

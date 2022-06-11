import React from 'react'
import "./ModalWay.css"

const ModalWay = ({active,setActive}) => {
    return (
        <div className={active ? "modalWay active" : "modalWay"} onClick={()=> setActive(false)}>
            <div className="modalWayContent" onClick={e =>e.stopPropagation()}>
                    <button className="wayBlockBtn">Data аналитика</button>
                    <button className="wayBlockBtn">Frontend разработка</button>
                    <button className="wayBlockBtn">Backend разработка</button>
                    <button className="wayBlockBtn">Бизнес аналитика</button>
                    <button className="wayBlockBtn">Web разработка</button>
                    <button className="wayBlockBtn">PL/SQL разработка</button>
                    <button className="wayBlockBtn">Project Management</button>
                    <button className="wayBlockBtn">UX/UI Дизайн</button>









            </div>

        </div>
    )
}

export default ModalWay;
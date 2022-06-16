import  "./ModalResponce.css"
import React from "react"

const ModalResponce = ( {active,setActive}) => {

    return (
        <div className={active ? "modalResponce active":"modalResponce"} onClick={() => setActive(false)}>
            <div className="modalResponceContent" onClick={e => e.stopPropagation()}>

            </div>


        </div>
    )
}
export default ModalResponce;
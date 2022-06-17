import React from "react"
import "./Responces.css"


const Responces = () => {
    return (
        <div>

            <div className="responses">

                <h1 className="responseTitle">
                    Junior web -разработчик
                </h1>

                    <div className="responseContentBlock">
                        <input className="responseBlockAva"/>
                        <div className="responseDesc">
                            <h3 className="responseBlockName">Исмагулова Альбина</h3>
                            <div className="responseBlockUni">Казахстанско-Британский университет</div>
                        </div>
                        <div className="responseResume">
                            <button className="responseResumeBtn">Резюме</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export  default Responces
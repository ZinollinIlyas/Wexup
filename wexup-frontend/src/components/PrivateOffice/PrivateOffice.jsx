import React, {useState} from 'react';
import "./PrivateOffice.css"
import pencil from "../images/reductPencil.svg"


const PrivateOffice = () => {
    const [change,setChange] = useState();
    const [show2,setShow2] = useState(false);
    const [data,setData] = useState({
        about:'',
        experience:[],
        education:'',
        courses:'',
        hobby:'',


    })
    function aboutMe () {
        fetch(`http://${process.env.REACT_APP_API_URL}/api/profile/`, {method:"POST",data})
    }
    function makeInput() {
        const textArea =document.createElement('input')
       return document.querySelector('.head-name').replaceWith(textArea)
    }
    function makeInput2() {
        const textArea =document.createElement('input')
       return document.querySelector('.head-age').replaceWith(textArea)
    }
    function makeInput3() {
        const textArea =document.createElement('input')
       return document.querySelector('.head-number').replaceWith(textArea)
    }
    console.log(data);
    return (
        <div className="office-content">
            <div className="office-first">
                <div className="office-first-head">
                    <div className="head-img">
                        <input type="file" className="office-profile-photo"/>
                    </div>
                    <div className="head-desc">
                        <h1  className="head-name">Исмагулова Альбина <img className="head-pencil" onClick={makeInput} src={pencil} /></h1>
                        <div  className="head-age">21 год <img className="head-pencil" onClick={makeInput2} src={pencil} /></div>
                        <div className="head-number">+7(771)408-86-61 <img className="head-pencil" onClick={makeInput3} src={pencil} /></div>
                    </div>
                    <div className="head-redact">
                        <button  className="head-redact-btn">Сохранить</button>
                    </div>
                </div>

                    <div className="office-first-body">
                        <div  className="body-first">
                            <h2 className="body-titles">Обо мне</h2>
                            <input className="body-input"
                                   placeholder="Расскажите немного о себе, чтобы мы могли предложить вам лучшие возможности!"
                                   onChange={(event)=>setData({
                                       ...data,about:event.target.value
                                   })}
                                />
                            <a
                            onClick={aboutMe}
                            > +Добавить информацию о себе</a>
                        </div>
                        <div  className="body-first">
                            <h2 className="body-titles" >Опыт работы</h2>
                            <input className="body-input"
                                   placeholder="Добавьте свой опыт, а если его нет - не страшно"
                                   onChange={(event)=>setData({
                                       ...data,experience:event.target.value
                                   })}
                            />
                            <a onClick={aboutMe}>+Добавить опыт работы</a>
                        </div>
                        <div  className="body-first">
                            <h2 className="body-titles">Образование</h2>
                            <input className="body-input"
                                   placeholder="Добавьте своё место обучения"
                                   onChange={(event)=>setData({
                                       ...data,education:event.target.value
                                   })}
                            />
                            <a onClick={aboutMe}> +Добавить ВУЗ</a>
                        </div>
                        <div  className="body-first">
                            <h2 className="body-titles">Квалификация</h2>
                            <input className="body-input"
                                   placeholder="Какие курсы вам понравились и в которых вы преуспели"
                                    onChange={(event)=>setData({
                                       ...data,courses:event.target.value
                                   })}
                            />
                            <a onClick={aboutMe}> +Добавить курс</a>
                        </div>
                        <div  className="body-first">
                            <h2 className="body-titles">Хоби,интересы</h2>
                            <input className="body-input"
                                   placeholder="Чем вы занимаетесь в свободное время?"
                                   onChange={(event)=>setData({
                                       ...data,hobby:event.target.value
                                   })}
                            />
                            <a onClick={aboutMe}> +Добавить курс</a>
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
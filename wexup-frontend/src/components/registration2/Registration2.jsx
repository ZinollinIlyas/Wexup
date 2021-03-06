import React, {useState} from "react";
import s from'./Registration2.module.css'
import logoform from '../images/logo-form.png'
import emptyreg from '../images/empty-reg.png'
import completereg from '../images/complete-reg.png'
import woman from '../images/picture-women.png'
import linedown from '../images/Line2.png'
import Modal2 from "../Modal2/Modal2";
const Registration2 = () =>
{
    const submitStepTwo = (e) => {
        e.preventDefault();

        const university_field = document.getElementById("student_university").value;
        const city_field = document.getElementById("student_city").value;
        const study_period_field = document.getElementById("student_study_period").value;
        const specialty_field = document.getElementById("student_specialty").value;

        localStorage.setItem("university", university_field);
        localStorage.setItem("city", city_field);
        localStorage.setItem("study_period", study_period_field);
        localStorage.setItem("specialty", specialty_field);

        window.location.replace("/registration/step3");

    }
        const [modalActive2,setModalActive2] = useState(false);

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
                                ?????????????? ??????????????????
                            </div>
                            <div className={s.nameInput}>
                                <input id="student_university" placeholder="?????????????? ???????????????? ???????????? ???????????????? ??????????????????" className={s.nameInputContent}/>
                            </div>
                        </div>
                            <div className={s.secondForm}>
                                <div className={s.formName}>
                                    <div className={s.nameDesc}>
                                        ??????????
                                    </div>
                                    <div className={s.nameInput}>
                                        <select id={"student_city"} name="color" className={s.secondInput}>
                                            <option>????????????</option>
                                            <option>????????????</option>
                                            <option>??????????????????</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={s.formName}>
                                    <div className={s.nameDesc}>
                                        ???????????? ????????????????
                                    </div>
                                    <div className={s.nameInput}>
                                        <input id={"student_study_period"} type="" placeholder="__ /____ ??? __ /____" className={s.secondInput}/>
                                    </div>
                                </div>
                            </div>
                          <div className={s.formName}>
                            <div className={s.nameDesc}>
                                ??????????????????????????
                            </div>
                            <div className={s.nameInput}>
                                <input id={"student_specialty"} placeholder="?????????????? ???????? ??????????????????????????" className={s.nameInputContent}/>
                            </div>
                        </div>
                        <div className={s.formBtns}>
                            <div className={s.firstButton}>
                                <a href="/registration/step1" className={s.firstButtonContent}>
                                    ??????????
                                </a>
                            </div>
                            <div className={s.secondButton}>
                                    <a className={s.secondButtonContent} onClick={submitStepTwo}>
                                        ??????????
                                    </a>
                            </div>
                        </div>
                        <div className={s.lineDown}>
                            <img src={linedown} alt="line-down"/>
                        </div>
                        <div className="form-down-text">
                            ??????????????????????????, ???? ???????????????????????? ?? <a className={s.downLink}>???????????????????????????????? ??????????????????????</a>
                        </div>
                        <div className={s.formCome}>
                            ?????? ???????? ??????????????? <a className="down-link"
                            onClick={()=>setModalActive2(true)}>
                                ??????????
                            </a>
                        </div>
                    </form>

                </div>
            </div>
            <Modal2 active={modalActive2} setActive={setModalActive2}/>

        </div>
    )
}
export  default Registration2;
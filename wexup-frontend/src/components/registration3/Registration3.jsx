import React from "react";
import s from'./Registration3.module.css'
import logoform from '../images/logo-form.png'
import emptyreg from '../images/empty-reg.png'
import completereg from '../images/complete-reg.png'
import woman from '../images/picture-women.png'
import linedown from '../images/Line2.png'

const Registration3 = () =>
{
    const submitStepThree = async (e) => {
        e.preventDefault();

        const image_field = document.getElementById("student_avatar").files[0];
        const resume_field = document.getElementById("student_resume").files[0];

        let formData = new FormData();
        formData.append("first_name", localStorage.getItem("first_name"));
        formData.append("second_name", localStorage.getItem("second_name"));
        formData.append("email", localStorage.getItem("email"));
        formData.append("password", localStorage.getItem("password"));
        formData.append("role", "student");
        formData.append("university", localStorage.getItem("university"));
        formData.append("city", localStorage.getItem("city"));
        formData.append("study_period", localStorage.getItem("study_period"));
        formData.append("specialty", localStorage.getItem("specialty"));
        formData.append("avatar", image_field);
        formData.append("resume", resume_field);

        let options = {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: formData
        }
        let response = await fetch(`http://${process.env.REACT_APP_API_URL}/api/users/students/`, options);
        let data = await response.json();
        if (response.status === 200) {
            console.log(data);
            let another_formData = new FormData();
            another_formData.append("email", data.email)
            another_formData.append("password", localStorage.getItem("password"))
            let another_response = await fetch(`http://${process.env.REACT_APP_API_URL}/api/token/`, {
                method: "POST",
                header: {
                "Content-Type": "application/json"
                },
                body: another_formData
            })
            let another_data = await another_response.json();
            if (another_response.status === 200) {
                localStorage.setItem("access", another_data.access);
                localStorage.setItem("refresh", another_data.refresh);
                window.location.replace("/")
            } else {
                alert("Could not get tokens");
            }
        } else {
            alert("Something went wrong, try again");
        }

    }
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
                     <a href="/registration/step4" className={s.secondButtonContent} onClick={submitStepThree}>
                         Завершить
                     </a>
                </div>
            </div>
            <div className={s.main}>
                <div>
                    <div className={s.profile}>
                        <div className={s.profileTitle}>
                            Фото профиля
                        </div>
                        <div className={s.profileDesc}>
                            Загрузите фото профиля, чтобы у рекрутеров было представление о вас
                        </div>
                        <div className={s.inputFile}>
                            <input id={"student_avatar"} type="file" className={s.inputFileContent}/>
                        </div>

                        <div className={s.profileTitle}>
                           Резюме
                        </div>
                        <div>
                            <input id={"student_resume"} type="file" className={s.inputFileContent}/>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export  default Registration3;
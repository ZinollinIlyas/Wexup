import React, {Fragment, useEffect, useState} from "react"
import "./Responces.css"
import {get} from "react-hook-form";


const Responces = () => {
    const [current_user, setCurrentUser] = useState({})
    const [vacancies, setVacancies] = useState([])

    const parseJwt = token => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    const get_user = async () => {
        const access = localStorage.getItem("access");
        if (!access) {
            return {}
        } else {
            const decoded_token = parseJwt(access);
            let response = await fetch(`http://${process.env.REACT_APP_API_URL}/api/users/${decoded_token.user_id}`)
            let data =  await response.json();
            setCurrentUser(data);
        }
    };

    const get_vacancies = async () => {
        let response = await fetch(`http://${process.env.REACT_APP_API_URL}/api/vacancies/`)
        let data = await response.json();
        if (response.status === 200) {
            setVacancies(data.filter(vacancy => vacancy.recruiter === current_user.id))
        }
    };

    useEffect(() => {
        get_user();
    }, []);

    useEffect(() => {
        get_vacancies();
    }, [current_user])

    console.log(vacancies);
    return (
        <div>

            <div className="responses">
                {vacancies.map(vacancy => (
                    <Fragment>
                        <h1 key={vacancy.id} className="responseTitle">
                        {vacancy.title}
                        </h1>
                        {vacancy.students.map(student => (
                            <div key={student.id} className="responseContentBlock">
                                <img src={`http://${process.env.REACT_APP_API_URL}${student.avatar}`} className="responseBlockAva"/>
                                <div className="responseDesc">
                                    <h3 className="responseBlockName">{student.second_name} {student.first_name}</h3>
                                    <div className="responseBlockUni">{student.university}</div>
                                    <a href={`mailto:${student.email}`}>{student.email}</a>
                                </div>
                                <div className="responseResume">
                                    <a href={`http://${process.env.REACT_APP_API_URL}${student.resume}`} className="responseResumeBtn" target={"_blank"}>Резюме</a>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export  default Responces
import React, {useState, useEffect} from "react";
import VacancyBlock from "../VacancyBlock/VacancyBlock";
import "./Vacancies.css";
import vector from "../images/Vector.svg";
import Banner from "../BannerAdvertisement/Banner";
import {get} from "react-hook-form";

const Vacancies = () => {
    const [vacancies, setVacancies] = useState([]);
    const [currentUser, setCurrentUser] = useState({})


    useEffect(() => {
        fetch('http://localhost:8000/api/vacancies/', {crossDomain:true,method: "GET",mode: 'cors', header: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}})
        .then(res => res.status === 200 ? res.json() : "")
        .then(data => setVacancies(data));
    }, [])



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
            let response = await fetch(`http://localhost:8000/api/users/${decoded_token.user_id}`)
            let data =  await response.json();
            setCurrentUser(data);
        }
    };

    useEffect(() => {
        get_user()
    }, [])
    console.log(currentUser)
    return (
        <div>
            <div className="main_page">
                  <div className="sidebar_search">
                        <input
                            className="sidebar_search_input"
                            placeholder="Поиск по стажировкам"
                        />
                      <button className="search_btn"> <img className="img_btn" src={vector}/></button>
                    </div>
            </div>
            <Banner/>
            {vacancies.map(vacancy => (
                <VacancyBlock key={vacancy.id} id={vacancy.id} title={vacancy.title} company={vacancy.company} currentUser={currentUser} students={vacancy.students}/>
            ))}
        </div>
    )
}
export default Vacancies
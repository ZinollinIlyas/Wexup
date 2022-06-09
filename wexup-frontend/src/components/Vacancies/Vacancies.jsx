import React, {useState, useEffect} from "react";
import VacancyBlock from "../VacancyBlock/VacancyBlock";
import "./Vacancies.css";
import vector from "../images/Vector.svg"
import Banner from "../BannerAdvertisement/Banner";

const Vacancies = () => {
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/vacancies', {crossDomain:true,method: "GET",mode: 'cors', header: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}})
        .then(res => console.log(res))
        .then(data => console.log('asdfasdf', data));
    }, [])
    console.log(vacancies);
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
            <VacancyBlock/>
        </div>

    )
}
export default Vacancies
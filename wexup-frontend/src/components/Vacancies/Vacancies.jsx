import React, {useState, useEffect} from "react";
import VacancyBlock from "../VacancyBlock/VacancyBlock";


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
            {vacancies.map(vacancy => {
                return <VacancyBlock vacancy={vacancy}/>
            })}
        </div>

    )
}
export default Vacancies
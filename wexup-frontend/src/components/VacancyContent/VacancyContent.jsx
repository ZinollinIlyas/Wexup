import React, {useEffect, useState} from "react";
import { useParams } from 'react-router';
import "./VacancyContent.css"
import  heart from "../images/normalHeart.svg"
import Footer from "../Footer/footer";
import heart2 from "../images/heart.svg"


const VacancyContent = () => {
    const [show2,setShow2] = useState(false);
    const [vacancy, setVacancy] = useState({
        title: '',
        wage: '',
        company: '',
        description: '',
        duties: [''],
        conditions: [''],
        requirements: ['']
    });
    const {vacancy_id} = useParams();

    const get_vacancy = async () => {
      let response = await fetch(`http://localhost:8000/api/vacancies/${vacancy_id}`);
      let data = await response.json();
      if (response.status === 200) {
          setVacancy(data);
      }
    };

    useEffect(() => {
        get_vacancy();
    }, [])
    console.log(vacancy);
    const requirements = vacancy.requirements[0].split(",");
    const conditions = vacancy.conditions[0].split(",");
    const duties = vacancy.duties[0].split(",");
    console.log(requirements)
    return (
        <div>
            <div className="vacancyPage">
            <div className="vacancyContentPage">
                <div className="vacancyContentHeader">
                    <h1 className="vacancyCompanyName">
                        <img/> {vacancy.company}
                    </h1>
                    <div className="vacancyCompanyDesc">
                        <h1 className="vacancyCompanyJob">{vacancy.title}</h1>
                        <div className="vacancyCompanyTerms">
                            <button className="vacancyTermsBlock">Разработка</button>
                            <button className="vacancyTermsBlock">Алматы</button>
                            <button className="vacancyTermsBlock">Полный день</button>
                        </div>
                    </div>
                    <div className="vacancyCompanyFav">
                            {
                                            show2 ?
                                        <img onClick={()=> setShow2(!show2)}  src={heart}/>:
                                        <img onClick={()=> setShow2(!show2)}  src={heart2}/>
                                    }
                            <button className="vacancyBtn">Откликнуться</button>
                    </div>
                </div>
                <div className="vacancyContentBody">
                    <div className="contentBodyBlock">
                        <h2 className="contentBodyTitle">Требования:</h2>
                        <ul className="contentBodyList">
                            {requirements.map(requirement => (
                                <li>{requirement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="vacancyContentBody">
                    <div className="contentBodyBlock">
                        <h2 className="contentBodyTitle">Обязанности:</h2>
                        <ul className="contentBodyList">
                            {duties.map(dutie => (
                                <li>{dutie}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="vacancyContentBody">
                    <div className="contentBodyBlock">
                        <h2 className="contentBodyTitle">Мы предлагаем:</h2>
                        <ul className="contentBodyList">
                            {conditions.map(condition => (
                                <li>{condition}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            </div>
            <Footer/>
        </div>
    )
}

export  default VacancyContent;
import React,{useState} from "react";
import "./VacancyContent.css"
import  heart from "../images/normalHeart.svg"
import Footer from "../Footer/footer";
import heart2 from "../images/heart.svg"


const VacancyContent = () => {
    const [show2,setShow2] = useState(false);
    return (
        <div>
            <div className="vacancyPage">
            <div className="vacancyContentPage">
                <div className="vacancyContentHeader">
                    <h1 className="vacancyCompanyName">
                        <img/> Prime Source
                    </h1>
                    <div className="vacancyCompanyDesc">
                        <h1 className="vacancyCompanyJob">Junior web-developer</h1>
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
                            <li>HTML5, CSS3, адаптивная кросс браузерная верстка, Flex/Grid;</li>
                            <li>Обязательное знание применения SASS/SCSS;</li>
                            <li> Опыт работы с JavaScript/jQuery;</li>
                            <li> Опыт отладки JS кода; Опыт работы с асинхронным client/server взаимодействием AJAX, JSON;</li>
                            <li>пыт работы с MVC;</li>
                            <li>Знание систем контроля версий Git;</li>
                            <li>Будет плюсом опыт работы с JS фреймворками Vue, React;</li>
                            <li>Будет плюсом опыт работы с PHP, MYSQL.</li>
                        </ul>
                    </div>
                </div>
                <div className="vacancyContentBody">
                    <div className="contentBodyBlock">
                        <h2 className="contentBodyTitle">Обязанности:</h2>
                        <ul className="contentBodyList">
                            <li>Верстка сайта/страниц;</li>
                            <li> Разработка нового и существующего функционала;</li>
                            <li> Оптимизация и рефакторинг кода, снижение времени отклика страниц;</li>
                            <li> Предложения по оптимизации работы и перехода на новые технологии;</li>
                        </ul>
                    </div>
                </div>
                <div className="vacancyContentBody">
                    <div className="contentBodyBlock">
                        <h2 className="contentBodyTitle">Мы предлагаем:</h2>
                        <ul className="contentBodyList">
                            <li>Команда профессионалов, с которыми будут по плечу любые задачи;</li>
                            <li> Завтрак: кофе, чай, печенье, шоколад, витамины;</li>
                            <li> Корпоративные мероприятия (игры в настольный теннис, настольный футбол).</li>
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
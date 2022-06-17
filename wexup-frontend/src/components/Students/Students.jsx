import  React from "react"
import "./Students.css"
import vector from "../images/Vector.svg";
import Banner from "../BannerAdvertisement/Banner";
import VacancyBlock from "../VacancyBlock/VacancyBlock";


const Students = () => {
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
export default Students;
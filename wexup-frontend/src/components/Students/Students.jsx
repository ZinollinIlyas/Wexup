import React, {useEffect, useState} from "react"
import "./Students.css"
import vector from "../images/Vector.svg";
import Banner from "../BannerAdvertisement/Banner";
import VacancyBlock from "../VacancyBlock/VacancyBlock";
import StudentsBlock from "../StudentsBlock/StudentsBlock";


const Students = () => {
    const [students, setStudents] = useState([]);

    const get_students = async () => {
      let response = await fetch("http://localhost:8000/api/users/students/")
      let data = await response.json();
      if (response.status === 200) {
          setStudents(data);
      }
    };

    useEffect(() => {
        get_students()
    }, []);
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
            {students.map(student => (
                <StudentsBlock key={student.id} first_name={student.first_name} second_name={student.second_name} university={student.university} resume={student.resume}/>
            ))}
        </div>
    )
}
export default Students;
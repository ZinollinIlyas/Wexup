import {React, useState} from "react";
import Navbar from "./components/Navbar/navbar";
import Registration from "./components/registration/Registration";
import Registration2 from "./components/registration2/Registration2";
import Registration3 from "./components/registration3/Registration3";
import Registration4 from "./components/registration4/Registration4";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RecruiterReg1 from "./components/recruiter/RecruiterReg";
import RecruiterReg2 from "./components/recruiter2/RecruiterReg2";
import Home from "./components/Home/Home";
import Career from "./components/forCareer/Career";
import Companies from "./components/ForCompanies/Companies";
import Faq from "./components/Faq/Faq";
import PrivateOffice from "./components/PrivateOffice/PrivateOffice";
import OfficeCompany from "./components/OfficeCompany/OfficeCompany";
import VacancyContent from "./components/VacancyContent/VacancyContent";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {UserContext} from "./UserContext";
import VacancyPage from "./components/VacancyPage/VacancyPage";
import Responces from "./components/Responces/Responces";


export const App = () => {
    const [currentUser, setCurrentUser] = useState({})

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
            let response = await fetch(`http://localhost:8000/api/users/students/${decoded_token.user_id}`)
            let data =  await response.json();
            console.log(data)
        }
    };


    return (
         <BrowserRouter>
             <Navbar />
               <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/registration/step1" element={<Registration />} />
                   <Route path="/registration/step2" element={<Registration2 />} />
                   <Route path="/registration/step3" element={<Registration3 />} />
                   <Route path="/registration/step4" element={<Registration4 />} />
                   <Route path="/recruiterReg/step1" element={<RecruiterReg1 />} />
                   <Route path="/recruiterReg/step2" element={<RecruiterReg2 />} />
                   <Route path="/forCareer" element={<Career/>} />
                   <Route path="/forCompanies" element={<Companies/>} />
                   <Route path="/favor" element={<Faq/>} />
                   <Route path="/vacancyPage" element={<VacancyPage/>}>
                       <Route path={":vacancy_id"} element={<VacancyContent/>}/>
                   </Route>
                   <Route path="/privateOffice" element={<PrivateOffice/>} />
                   <Route path="/privateOffice/Company" element={<OfficeCompany/>} />
                   <Route path="/responses" element={<Responces/>} />

                   <Route path="*" element={<ErrorPage/>}/>
               </Routes>
           </BrowserRouter>
    )

}



import {React, useState, useEffect} from "react";
import Navbar from "./components/Navbar/navbar";
import Registration from "./components/registration/Registration";
import Registration2 from "./components/registration2/Registration2";
import Registration3 from "./components/registration3/Registration3";
import Registration4 from "./components/registration4/Registration4";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RecruiterReg1 from "./components/recruiter/RecruiterReg";
import RecruiterReg2 from "./components/recruiter2/RecruiterReg2";
import Home from "./components/Home/Home";
import Students from "./components/ForStudents/Students";
import Career from "./components/forCareer/Career";
import Companies from "./components/ForCompanies/Companies";
import Faq from "./components/Faq/Faq";
import VacancyPage from "./components/VacancyPage/VacancyPage";
import PrivateOffice from "./PrivateOffice/PrivateOffice";
import OfficeCompany from "./components/OfficeCompany/OfficeCompany";
import Footer from "./components/Footer/footer";



export const App = () => {
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
                   <Route path="/forStudents" element={<Students/>} />
                   <Route path="/forCareer" element={<Career/>} />
                   <Route path="/forCompanies" element={<Companies/>} />
                   <Route path="/faq" element={<Faq/>} />
                   <Route path="/vacancyPage" element={<VacancyPage/>} />
                   <Route path="/privateOffice" element={<PrivateOffice/>} />
                   <Route path="/privateOffice/Company" element={<OfficeCompany/>} />
                   <Route path="*" element={<Navbar />}/>
               </Routes>
           </BrowserRouter>
    )

}



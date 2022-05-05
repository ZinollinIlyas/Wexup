import {React, useState, useEffect} from "react";
import Navbar from "./components/Navbar/navbar";
import Registration from "./components/registration/Registration";
import Registration2 from "./components/registration2/Registration2";
import Registration3 from "./components/registration3/Registration3";
import Registration4 from "./components/registration4/Registration4";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => {
    return (
         <BrowserRouter>
             <Navbar />
               <Routes>
                   <Route path="/registration/step1" element={<Registration />} />
                   <Route path="/registration/step2" element={<Registration2 />} />
                   <Route path="/registration/step3" element={<Registration3 />} />
                   <Route path="/registration/step4" element={<Registration4 />} />
               </Routes>
           </BrowserRouter>
    )

}



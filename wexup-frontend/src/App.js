import {useState, useEffect} from "react";
import Navbar from "./components/Navbar/navbar";
import Registration from "./components/registration/Registration";
import Registration2 from "./components/registration2/Registration2";
import Registration3 from "./components/registration3/Registration3";
import Registration4 from "./components/registration4/Registration4";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "@types/react/package.json";

export const App = () => {
    return (
         <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Navbar />}/>
                   <Route path="/registration/step1" element={<Registration />} />
                   <Route path="/registration/step2" element={<Registration2 />} />
                   <Route path="/registration/step3" element={<Registration3 />} />
                   <Route path="/registration/step4" element={<Registration4 />} />

                   <Route path="*" element={<Navbar />}/>
               </Routes>
           </BrowserRouter>
    )

}



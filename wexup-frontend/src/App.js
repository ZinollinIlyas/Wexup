import {useState, useEffect} from "react";
import Navbar from "./components/Navbar/navbar";
import Registration from "./components/registration/Registration";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "@types/react/package.json";

export const App = () => {
    return (
         <BrowserRouter>
               <Routes>
                   <Route path="/" element={<navbar />}/>
                   <Route path="/registration" element={<Registration />} />
                   <Route path="*" element={<Navbar />}/>
               </Routes>
           </BrowserRouter>
    )

}



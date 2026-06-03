//Aquí vamos a definir la navegación de nuestro portafolio
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "../App";
import FAQ from "../pages/FAQ/FAQ";
import Contacto from "../pages/Contactos/Contacto";


export default function Navigation(){
    return(
        <BrowserRouter>
          
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
            </Routes>
           
        </BrowserRouter>
    )
}

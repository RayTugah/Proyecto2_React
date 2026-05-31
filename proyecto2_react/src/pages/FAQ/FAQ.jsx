//Vamos a empezar con el componente de FAQ
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useState,useEffect} from "react";

import "./FAQ.css";

const FAQ=()=>{
    //Primero vamos a definir un estado que se encarge de mostrar cada una de las repuestas de las preguntas frecuentes,para esto vamos a usar el hook de UseState,que nos permite definir un estado dentro de un componente funcional,este estado puede ser cualquier tipo de dato,como un string,un numero,un array o un objeto
    const [isOpen,setIsOpen] = useState(false);

    const handleFAQ=()=>{
        setIsOpen(!isOpen);
        //Aquí vamos a incluir la lógica para mostrar cada una de las repuestas de las preguntas frecuentes,para esto vamos a usar el estado que hemos definido anteriormente,que se encarga de mostrar cada una de las repuestas de las preguntas frecuentes,cuando el estado es true,mostramos la repuesta,cuando el estado es false,ocultamos la repuesta
    }
   //Dentro del componente la lógica es simple,tenemos que definir que tiene que hacer cierto componente en cierto estado,los Usestate es para poder renderizar o transformar cada uno de los vcompoinentes usando condicionales
    return(
        <>
        <Header />
        <main className="faq-main">
            <h1>Preguntas Frecuentes</h1>
            <div className="faq-container">
                <div className="faq-item">
                    <h2 onClick={handleFAQ}>¿Por qué usar GoFight antes que otras opciones y qué es lo que destacarías de Go?</h2>
                    {isOpen && <p>Puedes contactarnos a través de nuestro formulario de contacto,que se encuentra en la sección de contacto de nuestro sitio web, o también puedes enviarnos un correo electrónico a la dirección de correo electrónico que se encuentra en la sección de contacto de nuestro sitio web.</p>}
                </div>
                <div className="faq-item">
                    <h2 onClick={handleFAQ}>¿Qué servicios ofrece GoFight?</h2>
                    {isOpen && <p>GoFight ofrece una amplia gama de servicios relacionados con el desarrollo web,como diseño web,desarrollo web,marketing digital,SEO,SEM,redes sociales y
mucho más.Para obtener más información sobre nuestros servicios,puedes visitar la sección de servicios de nuestro sitio web.</p>}
                </div>
                <div className="faq-item">
                    <h2 onClick={handleFAQ}>¿Cuánto cuesta contratar los servicios de GoFight?</h2>
                    {isOpen && <p>El costo de contratar los servicios de GoFight depende del tipo de servicio que deseas contratar,del alcance del proyecto y de otros factores.Para obtener una cotización personalizada,puedes contactarnos a través de nuestro formulario de contacto o enviarnos un correo electrónico a la dirección de correo electrónico que se encuentra en la sección de contacto de nuestro sitio web.</p>}
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}
export default FAQ;
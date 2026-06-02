import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useState,useEffect} from "react";

import "./FAQ.css";

const FAQ=()=>{
    //Primero vamos a definir un estado que se encarge de mostrar cada una de las repuestas de las preguntas frecuentes,para esto vamos a usar el hook de UseState,que nos permite definir un estado dentro de un componente funcional,este estado puede ser cualquier tipo de dato,como un string,un numero,un array o un objeto
    const [isOpen,setIsOpen] = useState(false);
        
    const handleFAQ=(index)=>{
        setIsOpen(isOpen===index?null:index);
        //Esto nos permite abrir y cerrar cada una de las repuestas de las preguntas frecuentes,cuando el estado es igual al index de la pregunta frecuente,mostramos la repuesta,cuando el estado es diferente al index de la pregunta frecuente,ocultamos la repuesta
        //Aquí vamos a incluir la lógica para mostrar cada una de las repuestas de las preguntas frecuentes,para esto vamos a usar el estado que hemos definido anteriormente,que se encarga de mostrar cada una de las repuestas de las preguntas frecuentes,cuando el estado es true,mostramos la repuesta,cuando el estado es false,ocultamos la repuesta
    }
   //Dentro del componente la lógica es simple,tenemos que definir que tiene que hacer cierto componente en cierto estado,los Usestate es para poder renderizar o transformar cada uno de los vcompoinentes usando condicionales
    return(
        <>
        <Header />
        <main className="faq-main">
            <h1>Preguntas Frecuentes</h1>
            <div className="faq-container">
                <div className={`faq-item${isOpen === 0 ? ' faq-item--open' : ''}`}>
                    <h2 onClick={() => handleFAQ(0)}>¿Por qué usar GoFight antes que otras opciones y qué es lo que destacarías de Go?</h2>
                    {isOpen === 0 && <p>Por qué GoFight se enfoca en un nicho en especifico como el boxeo y también logra atraer al público más joven.</p>}
                </div>
                <div className={`faq-item${isOpen === 1 ? ' faq-item--open' : ''}`}>
                    <h2 onClick={() => handleFAQ(1)}>¿De cuantas tablas consta la BD de GoFight?</h2>
                    {isOpen === 1 && <p>La base de datos de GoFight consta de 5 tablas, incluyendo tablas como la de usuarios,gamificaciones,sesiones,rutinas,ejercicios o también tablas intermedias de N:M como la de rutinas_usuarios,donde se registraba el tiempo de duración y descanso de cada uno de los ejercicios.</p>}
                </div>
                <div className={`faq-item${isOpen === 2 ? ' faq-item--open' : ''}`}>
                    <h2 onClick={() => handleFAQ(2)}>¿Cual es vuestro plan a futuro?</h2>
                    {isOpen === 2 && <p>Ampliar nuestro nicho a más artes marciales,ya sea Teakwondo, Judo o Karate, y seguir mejorando nuestra plataforma para ofrecer la mejor experiencia a nuestros usuarios.</p>}
                </div>
                  <div className={`faq-item${isOpen === 3 ? ' faq-item--open' : ''}`}>
                    <h2 onClick={() => handleFAQ(3)}>¿Qué es lo que más destaca de vuestro proyecto?</h2>
                    {isOpen === 3 && <p>Lo que más destaca de nuestro proyecto es nuestra dedicación a ofrecer una experiencia única a la hora de aparender a bpxear,ya que por el momento no existe como tal una app,que cuente cuente con varias rutinas y ejercicios de distintas categorias</p>}
                </div>
                   <div className={`faq-item${isOpen === 4 ? ' faq-item--open' : ''}`}>
                    <h2 onClick={() => handleFAQ(4)}>¿Qué es lo que más destaca de vuestro proyecto?</h2>
                    {isOpen === 4 && <p>Lo que más destaca de nuestro proyecto es nuestra dedicación a ofrecer una experiencia única a la hora de aparender a bpxear,ya que por el momento no existe como tal una app,que cuente cuente con varias rutinas y ejercicios de distintas categorias</p>}
                </div>
                   <div className={`faq-item${isOpen === 5 ? ' faq-item--open' : ''}`}>
                    <h2 onClick={() => handleFAQ(5)}>¿De qué se ha encargado cada uno?</h2>
                    {isOpen === 5 && <p>Cada uno se ha encargado de diferentes partes cruciales de la app.Ayoub se ha encargado del Backend y la consulatas API,Agustin se ha encargado de diferentes de aspectos comola documentación y de diferentes pantallas de frontend,ya se la de perfil de usuario y la de progreso.Mario se ha encargado de la parte del diseño de la app,dandole ese toque de rojo neon con una tonalidad oscura.</p>}
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default FAQ;
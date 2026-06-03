//Para poder cumplir con los requisitos tendríamos que crear un formulario para el usuario,este formulario será un feedback del portafolio
import React, { useEffect, useRef, useState,useContext} from 'react';
import { createPortal } from 'react-dom';
import { FeedbackContext } from '../../context/FormularioContext';//Importamos el contexto del formulario para poder usarlo en este componente,además de esto,este contexto también se va a usar para mostrar los feedbacks en otro componente llamado "review"
import './formulario.css';
//Lo que nos vamos a traer también,es el contexto del formulario,es decir las opniones del usuario a otro componente llamado "review"

//Nosotros vamos a traer el contexto del formulario,es decir opiniones de los usuarios a otro componente
const Formulario = () => {  
    //En este formulario vamos a usar un UseRef para obtener los datos del formulario,ya que estos no se van a renderizar sino,que solo van a aparecer en una librería local
     const nameFeed=useRef();//Para guardar el valor del nameFeed,useRef se usa principalmente para poder tener acceso a la lógica del formulario,sin renderizar el componente cada vez que se cambie el valor del nameFeed,ya que esto no es necesario,ya que solo queremos guardar el nameFeed en la localstorage y mostrarlo en un modal,es decir que useRef actua desde dentro
    const feedbackRef = useRef();//Para guardar el valor del feedback,useRef se usa principalmente para poder tener acceso a la lógica del formulario,sin renderizar el componente cada vez que se cambie el valor del feedback,ya que esto no es necesario,ya que solo queremos guardar el feedback en la localstorage y mostrarlo en un modal
    //Es decir que useRef actua desde dentro
    const [showModal, setShowModal] = useState(false);//Para mostrar el modal con los feedbacks guardados en la localstorage
    
    const {addFeedback,feedbacks} = useContext(FeedbackContext);//Para poder usar la función de añadir feedbacks al contexto,es decir para poder añadir los feedbacks al contexto y mostrarlos en el modal,además de esto,este contexto también se va a usar para mostrar los feedbacks en otro componente llamado "review"
    //Traemos todo el contexto del formulario,es decir las funciones y los estados del formulario,para poder usarlos en este componente,además de esto,este contexto también se va a usar para mostrar los feedbacks en otro componente llamado "review"
    

    //Definimos también el estado del modal para mostrar los feedbacks guardados en la localstorage
    
   const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameFeed.current.value || "Usuario Anónimo";
        const feedback = feedbackRef.current.value;

        if (feedback.trim() !== "") {
            // 1. Llamamos a la función del contexto. 
            // Ella maneja el setFeedbacks y el localStorage.
            addFeedback(name, feedback);
            
            // 2. Limpiamos campos
            feedbackRef.current.value = "";
            nameFeed.current.value = "";
        }
    };
    //Una vez terminado con la lógica,vamos a crear un modal para mostrar los feedbacks guardados en la localstorage
     const handleShowModal=()=>{
        setShowModal(true);//Mostramos el modal

     }
        const handleCloseModal=()=>{
        setShowModal(false);//Cerramos el modal

     }
     //Una vez que hayamos definido esta lógica,vamos a crear el modal para mostrar los feedbacks guardados en la localstorage
     return (
        <div className='formulario-container' id='formulario'>
            <h2>Deja tu opinión, nos importa mucho</h2>
            <form onSubmit={handleSubmit}>
                <input ref={nameFeed} type='text' placeholder='Escribe tu nombre aquí...'/>
                <textarea ref={feedbackRef} placeholder='Escribe tu feedback aquí...'></textarea>
                <button type='submit'>Enviar</button>
            </form>
            <button type='button' onClick={handleShowModal}>Ver feedbacks guardados</button>
            {showModal && createPortal(
                <div className='modal' role='dialog' aria-modal='true' aria-label='Feedbacks guardados'>
                    <div className='modal-content'>
                        <h3>Feedbacks guardados</h3>
                        <ul>
                            {feedbacks.map((fb,index)=>(
                                <li key={index}><strong>{fb.name}:</strong> {fb.feedback}</li>
                                //Aquí nos van a mostrar todos los feedbacks guardados en la localStorage
                         
                            ))}
                            {feedbacks.length === 0 && <li>No hay feedbacks guardados</li>}
                        </ul>
                        <button type='button' onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            , document.body)}
        </div>
     )
}
export default Formulario;
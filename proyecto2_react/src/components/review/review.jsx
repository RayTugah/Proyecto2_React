//Aquí vamos a usar UseContext para traer la información de las reviewsla cuales se encuentran guardadas en una localstorage
import React, { useContext } from 'react';
import { useFeedback } from '../../context/FormularioContext';//Importamos el contexto del formulario para poder usarlo en este componente,además de esto,este contexto también se va a usar para mostrar los feedbacks en otro componente llamado "review"
import './review.css';

const Review =()=>{
     //Vamos a crear un componente para mostrar las opiniones publicadas por los usuarios,para esto vamos a usar el contexto del formulario,es decir las opiniones de los usuarios que se encuentran guardadas en la localstorage,además de esto,este contexto también se va a usar para mostrar los feedbacks en otro componente llamado "review"
        const {feedbacks} = useFeedback();//Traemos el contexto del formulario para poder mostrar las opiniones de los usuarios que se encuentran guardadas en la localstorage,además de esto,este contexto también se va a usar para mostrar los feedbacks en otro componente llamado "review"
        //Traemos el contexto del formulario para poder mostrar las opiniones de los usuarios que se encuentran guardadas en la localstorage,además de esto,este contexto también se va a usar para mostrar los feedbacks en otro componente llamado "review"
    return(
        <div className='review-container' id='review'>
            <h2>Opiniones de los usuarios</h2>
            <div className='review-list'>
                {feedbacks.length === 0 ? (
                    <p className='review-empty'>No hay opiniones aún. ¡Sé el primero en dejar la tuya desde la página de Contacto!</p>
                ) : (
                    feedbacks.map((feedback, index) => (
                        <div
                            key={index}
                            className='review-item'
                            data-initial={(feedback.name?.[0] ?? '?').toUpperCase()}
                        >
                            <h3>{feedback.name || 'Anónimo'}</h3>
                            <p>{feedback.feedback}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )

}
export default Review;
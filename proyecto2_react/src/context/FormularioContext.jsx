//Aquí vamos a meter la lógica del formulario,es decir,vamos a crear un contexto para guardar los feedbacks de los usuarios,pero feedbacks que se encuentran en la localstorage,es decir que cada vez que un usuario deje un feedback,este se va a guardar en la localstorage y se va a mostrar en un modal,además de esto,este contexto también se va a usar para mostrar los feedbacks en otro componente llamado "review"
import { createContext, useState, useEffect, useRef } from "react";

export const FeedbackContext = createContext();

export const FeedbackProvider=({children})=>{
     const [feedbacks, setFeedbacks] = useState([]);//Para guardar los feedbacks en un estado
     //Guardamos los feedbacks en una array para poder mostrarlos en el modal,ya que la localstorage solo guarda strings,por eso tenemos que convertirlo a un array para poder mostrarlo en el modal
     useEffect(() => {
        const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");
        if (Array.isArray(storedFeedbacks)) {
            setFeedbacks(storedFeedbacks);
        }
    }, []);     
     
   

    const addFeedback=(name,feedback)=>{
        const newFeedback={name,feedback};
        setFeedbacks((prevFeedbacks) => {
            const updatedFeedbacks = [...prevFeedbacks, newFeedback];
            localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
            return updatedFeedbacks;
            //Guardamos el feedback en la localstorage
        });
    }
    return(
        <FeedbackContext.Provider value={{feedbacks,addFeedback}}>
            {children}
        </FeedbackContext.Provider>

    )
}

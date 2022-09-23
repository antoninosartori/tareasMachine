import React from "react";
import './CrearTarea.css';

function CrearTarea(props){
    const onClickButton = (mensaje) => {
        alert(mensaje);
        console.log(mensaje);
    }

    return(
        <button
            className="CrearTareaBtn"
            onClick={() => onClickButton('aqui se deberia abrir el modal')}
            >
                Crear tarea</button>
    );
}

export { CrearTarea };
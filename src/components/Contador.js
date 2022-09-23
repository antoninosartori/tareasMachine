import React from 'react';
import './Contador.css';
function Contador({total, completed}){
    

    return(
        <h2 className='Contador-titulo'>Has completado {completed} de tus {total} tareas</h2>
    );
}

export { Contador };
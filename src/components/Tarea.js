import React from "react";
import './Tarea.css';

function Tarea(props){


    return(
        <li className="Tarea-lista">
            <span
            className={`tareaIcon iconComplete ${props.completed && 'iconComplete-checkActive'}`}
            onClick={props.onComplete}
            >✔</span>      
            <p className={`tareaText ${props.completed && 'tareaText-completed'}`}>{props.text}</p>
            <span
            className="tareaIcon iconDelete"
            onClick={props.onDelete}
            >X</span>      
        </li>
    );
}

export { Tarea };
import React from "react";
import './ListaDeTareas.css';

function ListaDeTareas(props){
    return(
        <ul className="ListaTareas-container">
            <div className="listaTareas">{props.children}</div>
        </ul>
    );
}

export { ListaDeTareas };
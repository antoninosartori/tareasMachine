import React from 'react';
import './Buscador.css';

function Buscador({ searchValue, setSearchValue }){
    //Para actualizar los elementos, se puede usar React.useState.
    //  Para esto se puede crear un array con los dos elementos, uno es la variable actual del elemento
    // y la otra es la que genera el cambio
    // ej const [searchValue, setSearchValue] = React.useState('');
    //          variable In.  variable actualizadora        valor inicial    
    // en este caso cuando se escribe algo, gracias a la funcion onChange, llama a la funcion onSearch, que llama a la 
    // funcion actualizadora "setSearchValue" para modificar el contenido de "searchValue"
    // de esa manera el valor de "searchValue" es la ultima palabra escrita por el usuario
    //const [searchValue, setSearchValue] = React.useState(''); 

    const onSearch = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input
        className='Buscador-searchInput'
        placeholder="Busca una tarea"
        value={searchValue} 
        onChange={onSearch}
        />
    );
}

export { Buscador };
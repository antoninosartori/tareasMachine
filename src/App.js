import React from 'react';
//import './App.css';
import { Contador } from './components/Contador';
import { Buscador } from './components/Buscador';
import { ListaDeTareas } from './components/ListaDeTareas';
import { CrearTarea } from './components/CrearTarea';
import { Tarea } from './components/Tarea';

const arrayTareas = [
  {text: 'Terminar el curso de React', completed: false},
  {text: 'Mirar un episodio de The Office', completed: false},
  {text: 'Ir a buscar a Jesica a Urdinarrain', completed: false},
];

function App() {
  const [arrayDeTareas, setArrayDeTareas] = React.useState(arrayTareas);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTareas = arrayDeTareas.filter(tarea => !!tarea.completed).length;
  const totalTareas = arrayDeTareas.length;

  let searchedTareas = [];

  if(!searchValue.length >= 1){
    searchedTareas = arrayDeTareas;
  } else {
    searchedTareas = arrayDeTareas.filter(tarea => {
      const tareaText = tarea.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return tareaText.includes(searchText);
    });
  }

  const completarTarea = (text) => {
    const indiceTarea = arrayDeTareas.findIndex(tarea => tarea.text === text);
    const newArrayDeTareas = [...arrayDeTareas];
    newArrayDeTareas[indiceTarea].completed = true;
    setArrayDeTareas(newArrayDeTareas);
  };

  const eliminarTarea = (text) => {
    const indiceTarea = arrayDeTareas.findIndex(tarea => tarea.text === text);
    const newArrayDeTareas = [...arrayDeTareas];
    newArrayDeTareas.splice(indiceTarea, 1);
    setArrayDeTareas(newArrayDeTareas);
  }

  return (
    <React.Fragment>

      <Contador 
      total={totalTareas}
      completed={completedTareas}
      />

      <Buscador 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <ListaDeTareas>
        {searchedTareas.map(tarea => (
          <Tarea 
            key={tarea.text}
            text={tarea.text} 
            completed={tarea.completed} 
            onComplete={() => completarTarea(tarea.text)}
            onDelete={() => eliminarTarea(tarea.text)}
            />
        ))}
      </ListaDeTareas>
      
      <CrearTarea/>

    </React.Fragment>
  );
}

export default App;

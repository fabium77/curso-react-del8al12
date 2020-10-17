import React from 'react';
import { NavLink } from 'react-router-dom';

// import './styles.css';


var proyectos = [{clave:1, valor:'useState',to:'/counterApp'}, 
    {clave:2, valor:'usesEffect',to:'/simpleForm'}, 
    {clave:3, valor: 'examples',to:'/MultipleCustomHooks'},
    {clave:4, valor: 'useRef',to:'/RealExampleRef'},
    {clave:5, valor: 'useLayoutEffect',to:'/Layout'},
    {clave:6, valor: 'memos',to:'/Memorize'},
    {clave:7, valor: 'tarea-memos',to:'/Padre'},
    {clave:8, valor: 'useReduce',to:'/TodoApp'},
    {clave:9, valor: 'MainApp',to:'/MainApp'},

];





export const Ejercicios = () => {
    return (
        <>

        <div className="card"  style={{padding:'10px', margin:'10px'}}>

            <div className="card-group" >

                {proyectos.map(indice => (


                <NavLink className="card text-white bg-secondary mb-3" style={{cursor: "pointer", margin: "5px"}} exact activeClassName="active" to={indice.to} >
                <div className="card-header" style={{fontSize:"1.2em"}}>Ejercicio {indice.clave} </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"0.9em"}} >{indice.valor}</h5>

                    </div>
                </NavLink>

                ))}


            </div>

        </div>

        </>
        
    )
}

import React from 'react'
import  '../css/tareas.css'


export const TaskForm = ({settareas}) => {


  const agregarTarea = (e) => {
    console.log(e.target.nombre.value)
    console.log(e.target.Numtarea.value)
    const NuevasTareas = { 
    nombre : e.target.nombre.value,
    Numtarea : e.target.Numtarea.value
    }
    settareas( tareas => ([...tareas, NuevasTareas]))
    e.preventDefault();
    e.stopPropagation
   }

  return (

  

    <>

     <div className='formulario'>
      <form className='tareas' onSubmit={agregarTarea}>
      <h1>Tareas</h1>
   
   <input 
   className='input'
   placeholder='Ingrese su tarea'
   type= "text"
   name = "nombre"
/>
<input 
placeholder='Numero de tarea'
className='input2'
   type= "number"
   name = "Numtarea"
/>




 <button
 variant = "contained"
className='buttonadd'
 type = "submit">Agregar Tarea</button>
 </form>
 </div>
      
      </>
  )
}

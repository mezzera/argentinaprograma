






import React, { useEffect, useState } from 'react'
import { TaskForm } from './TaskForm'
import { TaskItem } from './TaskItem';


export const TaskList = () => {






  const [tareas, settareas] = useState(
    
    [
  
    {

    nombre : 'Descargar Javascript',
    Numtarea : 1,


  },
  {

    nombre : 'Descargar Python',
    Numtarea : 2 ,


    },
  ]
)

 

   useEffect(() => {
  
    console.log(tareas)
 
   }, [tareas])
   
  

  return (


    <div>


 <TaskForm settareas = {settareas}/>
  <TaskItem  tareas = {tareas}/> 

     

 
     </div>
      
      
      
  )
}

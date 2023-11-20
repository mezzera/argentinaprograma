import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import React, { useEffect, useState } from 'react';

import '../css/cards.css';

export const TaskItem = ({ tareas }) => {
  const [listatareas, setListatareas] = useState([]);


  useEffect(() => {
   
    const GuardarLocalStorage = JSON.parse(localStorage.getItem('tareas')) || [];
    setListatareas([...GuardarLocalStorage]);
  }, []);

  useEffect(() => {
  
    localStorage.setItem('tareas', JSON.stringify(listatareas));
  }, [listatareas]);









  useEffect(() => {
    setListatareas([...tareas]);
  }, [tareas]);

  const Borrar = (Numtarea) => {
    setListatareas(listatareas.filter((t) => t.Numtarea !== Numtarea));
  };

  const Completado = (Numtarea) => {
    setListatareas(
      listatareas.map((t) =>
        t.Numtarea === Numtarea ? { ...t, completada: !t.completada } : t
      )
    );
  };

  return (
    <div>
      <div className='cards'>
        {listatareas.map((tarea, index) => (
          <Card
            key={index}
            className={`card ${tarea.completada ? 'completada' : ''}`}
            sx={{ Width: 345 }}
          >
            <CardMedia sx={{ height: 140 }} image="./public/imagenes/tareas.jpg" title="tareas" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {tarea.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tarea.Numtarea}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant={tarea.completada ? 'contained' : 'outlined'}
                color={tarea.completada ? 'success' : 'error'}
                onClick={() => Completado(tarea.Numtarea)}
              >
                {tarea.completada ? 'Tarea Completada' : 'Completar Tarea'}
              </Button>
              <Button size="small" onClick={() => Borrar(tarea.Numtarea)}>
                Borrar
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
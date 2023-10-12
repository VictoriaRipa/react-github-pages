import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Noticias from './components/Noticias';
import Comentarios from './components/Comentarios';
import FormularioComentarios from './components/FormularioComentarios';
import Aside from './components/Aside';
import './estilos.css';


function App() {
  const comentariosPredefinidos = [
    {
      id: 1,
      nombre: 'Martina',
      texto: '¡Muy bueno el curso!',
      usuarioAgrego: false, 
    },
    {
      id: 2,
      nombre: 'Juan',
      texto: 'Aprendí tanto que me llamaron a trabajar en Google',
      usuarioAgrego: false, 
    },
    {
      id: 3,
      nombre: 'Victoria',
      texto: 'Aguante el HTML',
      usuarioAgrego: false, 
    },
  ];

  const [comentarios, setComentarios] = useState(comentariosPredefinidos);
  const [comentarioId, setComentarioId] = useState(comentariosPredefinidos.length + 1);

  const agregarComentario = (comentario) => {
    setComentarios([...comentarios, { ...comentario, id: comentarioId, usuarioAgrego: true }]);
    setComentarioId(comentarioId + 1);
  };

  const eliminarComentario = (id) => {
    if (comentarios.find((comentario) => comentario.id === id && comentario.usuarioAgrego)) {
      const nuevosComentarios = comentarios.filter((comentario) => comentario.id !== id);
      setComentarios(nuevosComentarios);
    }
  };

  return (
    <div>
      <Header />
      <Nav />
      <main>
        <Noticias />
        <Comentarios comentarios={comentarios} eliminarComentario={eliminarComentario} />
        <FormularioComentarios agregarComentario={agregarComentario} />
      </main>
      <Aside />
      <footer>
        CopyRight 2023 &copy; Digitallers
      </footer>
    </div>
  );
}

export default App;

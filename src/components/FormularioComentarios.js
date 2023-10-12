import React, { useState } from 'react';

function FormularioComentario({ agregarComentario }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && texto) {
      const nuevoComentario = { nombre, texto };
      agregarComentario(nuevoComentario);
      setNombre('');
      setCorreo('');
      setTexto('');
    }
  };

  return (
    <section id="deja_tu_comentario">
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Correo: (Opcional)</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label>Comentario</label>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        ></textarea>
        <button>Dejar Comentario</button>
      </form>
    </section>
  );
}

export default FormularioComentario;


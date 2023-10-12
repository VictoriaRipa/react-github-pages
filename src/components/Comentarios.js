import React from 'react';

function Comentarios({ comentarios, eliminarComentario }) {
  return (
    <section id="comentarios">
      {comentarios.map((comentario, index) => (
        <article className="comentario" key={comentario.id}>
          <img src="usuario.png" width="50" alt="Usuario" />
          <p>
            <strong>{comentario.nombre}</strong>: {comentario.texto}
          </p>
          {comentario.usuarioAgrego && (
            <button
              className="boton-eliminar"
              onClick={() => eliminarComentario(comentario.id)}
            >
              Eliminar
            </button>
          )}
        </article>
      ))}
    </section>
  );
}

export default Comentarios;
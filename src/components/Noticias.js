import React from 'react';
import noticiasData from '../data/NoticiasData';

function Noticias() {
  return (
    <section id="noticias">
      {noticiasData.map((noticia, index) => (
        <article className="noticia" key={index}>
          <h3>{noticia.titulo}</h3>
          <p dangerouslySetInnerHTML={{ __html: noticia.contenido }}></p>
        </article>
      ))}
    </section>
  );
}

export default Noticias;


// import React from 'react'
import "../styles/projects.css";

const Projects = ({ proyectosRef }) => {
  return (
    <section className="projects__container" ref={proyectosRef} id="P">
      <div className="boxTitle__projects">
        <h2 className="title__proyectos">Mis Proyectos</h2>
        <hr className="hr__title" />
      </div>
      <div className="sisisi">
        <div className="box__P">
          <a
            className="Link__web"
            href=" https://certiwise.co/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cardProject__box">
              <div className="imgProyect__box">
                <img
                  className="imgs__proyects"
                  src="./certiwise.PNG"
                  alt="this image not found"
                />
              </div>
              <h3 className="title__card">Certiwise</h3>
              <p className="text__project">
                Formé parte del equipo de desarrollo de una plataforma para la
                creación y gestión de certificados web, donde trabajé con
                tecnologías avanzadas como React.js, JavaScript, PHP, Laravel,
                MySQL, entre otras
              </p>
            </div>
          </a>

          <a
            className="Link__web"
            href="https://aaron-users.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cardProject__box">
              <div className="imgProyect__box">
                <img
                  className="imgs__proyects"
                  src="./xtracine.PNG"
                  alt="this image not found"
                />
              </div>
              <h3 className="title__card">Xtracine</h3>
              <p className="text__project">
                Me encargué del desarrollo de un sitio web de noticias,
                trabajando tanto en el frontend como en el backend. Todo el
                contenido del sitio es dinámico y también implementamos un panel
                de administración para la gestión del contenido
              </p>
            </div>
          </a>

          <a
            className="Link__web"
            href="https://poke-aaronm.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cardProject__box">
              <div className="imgProyect__box">
                <img
                  className="imgs__proyects"
                  src="./pokedex.png"
                  alt="this image not found"
                />
              </div>
              <h3 className="title__card">Pokedex</h3>
              <p className="text__project">
                Desarrollé una página web que muestra dinámicamente todos los
                Pokémon, incluyendo detalles como su tamaño, tipo y otras
                características. En este proyecto, utilicé una API para obtener
                la información
              </p>
            </div>
          </a>

          <a
            className="Link__web"
            href="https://aaronm-rickymorty.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cardProject__box">
              <div className="imgProyect__box">
                <img
                  className="imgs__proyects"
                  src="./rick.png"
                  alt="this image not found"
                />
              </div>
              <h3 className="title__card">Rick y Morty</h3>
              <p className="text__project">
                Formé parte del equipo de desarrollo de una plataforma para la
                creación y gestión de certificados web, donde trabajé con
                tecnologías avanzadas como React.js, JavaScript, PHP, Laravel,
                MySQL, entre otras
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

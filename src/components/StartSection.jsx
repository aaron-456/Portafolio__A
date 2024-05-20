// import React from 'react';
import "../styles/startSection.css";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const StartSection = ({ /*FontAwesomeIcon*/ inicioRef }) => {
  return (
    <section className="container-home" ref={inicioRef} id="I">
      <div className="img-home-box">
        <img
          className="profile-picture"
          src="./myimage.jpg"
          alt="img not foud"
        />
      </div>

      <div className="information-home-box">
        <h1 className="title-home">¡Hola! Me llamo Aaron</h1>
        <p className="paragraph-home">
          Me interesa mucho aprender nuevas cosas, aportar valor a cualquier
          proyecto en el que me involucre, ya que considero que cada
          contribución cuenta y puede marcar la diferencia en el resultado
          final.
        </p>
        <button className="btn-my-Work" alt="Mis Trabajos">
          {/* Mis Trabajos
          <div>
            <FontAwesomeIcon icon={faCoffee} />
          </div> */}
        </button>
      </div>
    </section>
  );
};

export default StartSection;

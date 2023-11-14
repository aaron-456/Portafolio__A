// import React from "react";
import "../styles/aboutMe.css";

const AboutMe = ({ acercademiRef }) => {
	return (
		<section className="container__acerca-de-mi" ref={acercademiRef} id="A">
			<div className="box__Title">
				<h2 className="title__acerca-de-mi">Acerca de mi....</h2>
				<hr className="hr__title" />
			</div>

			<div className="box__introductorytext">
				<p className="infobox__introduc">
					Me gusta creer que si uno le dedica tiempo y hace algo con amor, las
					demás cosas son mucho más fáciles y se dan naturalmente.
				</p>
			</div>

			<p className="textinfo__acerca-de-mi">
				Soy un desarrollador web Full stack y me encanta el mundo de la
				programación y la tecnología. Cada día me esfuerzo por aprender y
				perfeccionar mis habilidades, buscando nuevas formas de encontrar
				soluciones innovadoras. Me gusta colaborar en proyectos desafiantes,
				donde puedo aplicar lo que he aprendido y seguir creciendo
				profesionalmente. Me gusta esforzarme por explorar nuevas tecnologías y
				lenguajes. Estoy emocionado por seguir creciendo en este apasionante
				campo y contribuir al éxito de futuros proyectos.
			</p>
		</section>
	);
};

export default AboutMe;

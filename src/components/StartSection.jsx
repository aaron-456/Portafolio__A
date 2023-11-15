// import React from 'react';
import "../styles/startSection.css";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const StartSection = ({ FontAwesomeIcon, inicioRef }) => {

	return (
		<section className="container__inicio" ref={inicioRef} id="I">
			<div className="box__img">
				<img className="img__user" src="./myimage.jpg" alt="" />
			</div>
			<div className="my__information">
				<h1 className="title__info">¡Hola! Me llamo Aaron</h1>
				<p className="text__info">
					Me interesa mucho aprender nuevas cosas, aportar valor a cualquier
					proyecto en el que me involucre, ya que considero que cada
					contribución cuenta y puede marcar la diferencia en el resultado
					final.
				</p>
				<a className="box__archivoPdf" href="./CV Aaron Mejia v3.pdf" download>
					<button className="btn__moreinfo">
						CV...
						<div>
							<FontAwesomeIcon icon={faCoffee} />
						</div>
					</button>
				</a>
			</div>
		</section>
	);
};

export default StartSection;

import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import StartSection from "./components/StartSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";



function App() {
	const inicioRef = useRef(null);
	const acercademiRef = useRef(null);
	const habilidadesRef = useRef(null);
	const proyectosRef = useRef(null);
	const contactameRef = useRef(null);

	const navigateToSection = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="App">
			<Header
				navigateToSection={navigateToSection}
				inicioRef={inicioRef}
				acercademiRef={acercademiRef}
				habilidadesRef={habilidadesRef}
				proyectosRef={proyectosRef}
				contactameRef={contactameRef}
			/>
			<StartSection
				FontAwesomeIcon={FontAwesomeIcon}
				inicioRef={inicioRef} />

			<AboutMe acercademiRef={acercademiRef} />

			<Skills habilidadesRef={habilidadesRef}
				FontAwesomeIcon={FontAwesomeIcon} />

			<Projects proyectosRef={proyectosRef} />







			<section className="container__contactame" ref={contactameRef} id="C">
				<h2 className="title__contactame">Contactame...</h2>
				<form
					className="form__contactame"
					action="https://formspree.io/f/xyyaabye"
					method="POST"
				>
					<label className="box_label" htmlFor="name">
						Nombre:
						<input className="box__input" type="text" id="name" name="name" />
					</label>

					<label className="box_label" htmlFor="email">
						Correo Electronico:
						<input
							className="box__input"
							type="email"
							id="email"
							name="email"
						/>
					</label>
					<label className="box_label" htmlFor="message">
						Mensaje:
						<textarea
							className="box__message"
							id="message"
							name="message"
						></textarea>
					</label>

					<button className="btn__form" type="Enviar">
						Enviar
					</button>
				</form>
			</section>

			<section className="container__social">
				<div className="linea-delgada1"></div>
				<a
					href="https://www.linkedin.com/in/aaron-mejia-317b52260/"
					target="_blank"
				>
					<FontAwesomeIcon
						className="icons__social"
						size="2x"
						icon={faLinkedin}
					/>
				</a>
				<a href="https://github.com/aaron-456" target="_blank">
					<FontAwesomeIcon
						className="icons__social-github"
						size="2x"
						icon={faGithub}
					/>
				</a>
				<div className="linea-delgada2"></div>
			</section>
			<p className="text__copyricth"> ©Aaron Mejia 2023. All Rights Reserved</p>
		</div>
	);
}

export default App;

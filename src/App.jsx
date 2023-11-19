import "./App.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import StartSection from "./components/StartSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Social from "./components/Social";

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
			<StartSection FontAwesomeIcon={FontAwesomeIcon} inicioRef={inicioRef} />

			<AboutMe acercademiRef={acercademiRef} />

			<Skills
				habilidadesRef={habilidadesRef}
				FontAwesomeIcon={FontAwesomeIcon}
			/>

			<Projects proyectosRef={proyectosRef} />

			<ContactMe contactameRef={contactameRef} />

			<Social FontAwesomeIcon={FontAwesomeIcon} />
		</div>
	);
}

export default App;

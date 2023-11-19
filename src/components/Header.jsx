import { useState } from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({
  navigateToSection,
  inicioRef,
  acercademiRef,
  habilidadesRef,
  proyectosRef,
  contactameRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // funcion  para el menu hamburguesa
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header__container">
      <header className="navigation__bar">

        <div className="box__logo">
          <img className="img__logo" src="logoAaron.PNG" alt="logoPorfolio.." />
        </div>
        <ul className={`navigation__list ${isOpen ? "menu" : ""}`}>
          <li onClick={() => navigateToSection(inicioRef)}>Inicio</li>
          <li onClick={() => navigateToSection(acercademiRef)}>Acerca de mi</li>
          <li onClick={() => navigateToSection(habilidadesRef)}>Habilidades</li>
          <li onClick={() => navigateToSection(proyectosRef)}>Proyectos</li>
          <li onClick={() => navigateToSection(contactameRef)}>Contacto</li>
        </ul>

        <div className="box__menuBtn">
          <button className="menu__btn" onClick={handleMenu}>
            <FontAwesomeIcon
              icon={faBars}
              className="icon__navigation"
              size="2x"
            />
          </button>
        </div>
      </header>
    </div>

  );
};
export default Header;

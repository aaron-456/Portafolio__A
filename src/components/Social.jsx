// import React from 'react';
import "../styles/social.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Social = ({ FontAwesomeIcon }) => {
	return (
		<>
			<section className="container__social">
				<div className="linea-delgada1"></div>
				<a
					href="https://www.linkedin.com/in/aaron-mejia-317b52260/"
					rel="noreferrer"
					target="_blank"
				>
					<FontAwesomeIcon
						className="icons__social"
						size="2x"
						icon={faLinkedin}
					/>
				</a>

				<a href="https://github.com/aaron-456" rel="noreferrer" target="_blank">
					<FontAwesomeIcon
						className="icons__social-github"
						size="2x"
						icon={faGithub}
					/>
				</a>

				<div className="linea-delgada2"></div>
			</section>
			<p className="text__copyricth"> ©Aaron Mejia 2023. All Rights Reserved</p>
		</>
	);
};

export default Social;

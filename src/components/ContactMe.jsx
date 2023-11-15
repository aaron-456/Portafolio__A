// import React from 'react';
import "../styles/contactme.css";

const ContactMe = ({ contactameRef }) => {
	return (
		<section className="contactMe__container" ref={contactameRef} id="C">
			<div className="boxTitle__contactme">
				<h2 className="title__contactame">Contactame</h2>
				<hr className="hr__title" />
			</div>

			<div className="form__box">
				<form
					className="form__contactMe"
					action="https://formspree.io/f/xyyaabye"
					method="POST"
				>
					<label className="box_label" htmlFor="name">
						Nombre:
						<input
							className="box__input"
							placeholder="Su nombre"
							type="text"
							id="name"
							name="name"
						/>
					</label>

					<label className="box_label" htmlFor="email">
						Correo Electronico:
						<input
							className="box__input"
							placeholder="Su correo electronico"
							type="email"
							id="email"
							name="email"
						/>
					</label>
					<label className="box_label" htmlFor="message">
						Mensaje:
						<textarea
							className="box__message"
							placeholder="Enviame un mensaje"
							id="message"
							name="message"
						></textarea>
					</label>

					<button className="button__form" type="Enviar">
						Enviar
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactMe;

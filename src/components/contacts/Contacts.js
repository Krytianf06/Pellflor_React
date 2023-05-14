import React from "react";
import "./contacts.css";

function Contact() {
	return (
		<div className='conteiner'>
			<div className='box__products'>
				<h1 className='adress__title'>Dane Adresowe</h1>
				<ul className='adress__text'>
					<li className='adress__text__item'>
						<p>Pellflor Mirosława Chojnacka</p>
						<p>Doły 11 64-060 Wolkowo</p>
						<p>woj. wielkopolskie</p>
					</li>
					<li className='adress__text__item'>
						<p>Kontakt:</p>
						<p>Email: pellflor@wp.pl</p>
						<p>tel.: +48 721-720-680</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Contact;

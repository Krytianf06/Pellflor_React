import React from "react";
import "./main.css";

function Main() {
	return (
		<div className='conteiner'>
			<div className='box'>
				<h1 className='title'>Nasze Produkty</h1>
				<ul className='box__list'>
					<li className='box__list__item'>Pellet Klasy A1</li>
					<li className='box__list__item'>Pellet Przemysławy</li>
					<li className='box__list__item'>Agro Pellet</li>
				</ul>
				{/* <div className='box-item'>
					<h1>Pellet</h1>
				</div>
				<div className='box-item'>
					<h1>Kostka Brukowa</h1>
				</div>
				<div className='box-item'>
					<h1>Hydraaulika Wod-Kan i C.O.</h1>
				</div> */}
			</div>
		</div>
	);
}

export default Main;

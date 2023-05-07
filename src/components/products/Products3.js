import React from "react";
import "./products.css";
import Przemyslowy from "./pelletPrzemyslawy/Przemyslowy";

function Products3() {
	return (
			<div className='conteiner'>
			<div className='box'>
				<div className='box__left'>
					<h1 className='title'>Nasze Produkty</h1>
					<ul className='box__list'>
						<li className='box__list__item'>Pellet Klasy A1</li>
						<li className='box__list__item'>Pellet Przemysławy</li>
						<li className='box__list__item'>Agro Pellet</li>
					</ul>
				</div>
				<Przemyslowy/>
			</div>
		</div>
	);
}

export default Products3;

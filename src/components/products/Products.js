import React from "react";
import "./products.css";
import AgroPellet from "./agroPellet/AgroPellet";
import KlassaA1 from "./pelletKlasaA1/KlassaA1";
import Przemyslowy from "./pelletPrzemyslawy/Przemyslowy";

function Products() {
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
				<AgroPellet />
				{/* <KlassaA1 /> */}
				{/* <Przemyslowy/> */}
			</div>
		</div>
	);
}

export default Products;

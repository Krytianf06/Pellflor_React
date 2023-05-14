import React from "react";
import { NavLink } from "react-router-dom";
import "./products.css";

function ProductsBase() {
	return (
		<div className='box__left'>
			<h1 className='title'>Nasze Produkty</h1>
			<nav className='box__list'>
				<NavLink className='box__list__item' to="/klasaa1">Pellet Klasy A1</NavLink>
				<NavLink className='box__list__item' to="/przemyslowy">Pellet Przemysłowy</NavLink>
				<NavLink className='box__list__item' to="/agropellet">Agro Pellet</NavLink>
			</nav>
		</div>
	);
}

export default ProductsBase;

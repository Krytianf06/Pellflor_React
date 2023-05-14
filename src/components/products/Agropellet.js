import React from "react";
import "./products.css";
import AgroPellet from "./agroPellet/AgroPellet";
import ProductsBase from "./Products";

function Products2() {
	return (
			<div className='conteiner'>
			<div className='box'>
			<ProductsBase/>
				<AgroPellet/>
			</div>
		</div>
	);
}

export default Products2;

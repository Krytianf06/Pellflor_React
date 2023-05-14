import React from "react";
import "./products.css";
import KlassaA1 from "./pelletKlasaA1/KlassaA1";
import ProductsBase from "./Products"

function Products1() {
	return (
			<div className='conteiner'>
			<div className='box'>
				<ProductsBase/>
				<KlassaA1/>
			</div>
		</div>
	);
}

export default Products1;

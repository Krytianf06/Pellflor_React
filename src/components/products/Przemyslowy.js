import React from "react";
import "./products.css";
import Przemyslowy from "./pelletPrzemyslawy/Przemyslowy";
import ProductsBase from "./Products";
function Products3() {
	return (
			<div className='conteiner'>
			<div className='box'>
			<ProductsBase/>
				<Przemyslowy/>
			</div>
		</div>
	);
}

export default Products3;

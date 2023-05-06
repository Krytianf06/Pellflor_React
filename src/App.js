import React from "react";
import Header from "./components/hreader/Header";
import Main from './components/main/Main';
import AgroPellet from "./components/products/agroPellet/AgroPellet";
import KlassaA1 from "./components/products/pelletKlasaA1/KlassaA1";
import Przemyslowy from "./components/products/pelletPrzemyslawy/Przemyslowy";

import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Header className='header' />
			<Main />
			{/* <AgroPellet /> */}
			{/* <KlassaA1 /> */}
			{/* <Przemyslowy /> */}
			<Footer />
		</div>
	);
}

export default App;

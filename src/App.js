import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/hreader/Header";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import AgroPellet from "./components/products/agroPellet/AgroPellet";

function App() {
	return (
		<>
			<Header />
				<Home />
				<Products />
			<Footer />
		</>
	);
}

export default App;

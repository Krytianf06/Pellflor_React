import React from "react";
import "./App.css";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
// import Router from 'react-easy-router';
import Base from "./components/base/Base";
import Home from "./components/Home/Home";
import Products1 from "./components/products/Products1";
import Products2 from "./components/products/Products2";
import Products3 from "./components/products/Products3";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Base />}>
				<Route path='home' element={<Home />} />
				<Route path='klassaa1' element={<Products1 />} />
				<Route path='agropellet' element={<Products2 />} />
				<Route path='przemyslowy' element={<Products3 />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;

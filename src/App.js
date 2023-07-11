import React from "react";
import "./App.css";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Base from "./components/base/Base";
import Home from "./components/Home/Home";
import ListProducts from "./components/listProducts/ListProducts";
import Products1 from "./components/products/KlasaA1";
import Products2 from "./components/products/Agropellet";
import Products3 from "./components/products/Przemyslowy";
import Contact from "./components/contacts/Contacts";
import { NotFound } from "./components/NotFound";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Base />}>
				<Route path='/' element={<Home />} />
				<Route path='home' element={<Home />} />
				<Route path='products' element={<ListProducts />} />
				<Route path='klasaa1' element={<Products1 />} />
				<Route path='agropellet' element={<Products2 />} />
				<Route path='przemyslowy' element={<Products3 />} />
				<Route path='contact' element={<Contact />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;

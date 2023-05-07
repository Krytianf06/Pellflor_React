import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from "./components/base/Base";
import Home from "./components/Home/Home";
import Products from "./components/products/Products";
import AgroPellet from "./components/products/agroPellet/AgroPellet";
import KlassaA1 from "./components/products/pelletKlasaA1/KlassaA1";
import Przemyslowy from "./components/products/pelletPrzemyslawy/Przemyslowy";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Base />,
		children: [
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "products",
				element: <Products />,
				children: [
					{
						index: true,
						element: <AgroPellet />,
					},
					{
						path: "klassaa1",
						element: <KlassaA1 />,
					},
					{
						path: "przemyslowy",
						element: <Przemyslowy />,
					},
				],
			},
			{
				path: "home",
				element: <Home />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

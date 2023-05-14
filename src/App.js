import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from "./components/base/Base";
import Home from "./components/Home/Home";
import Products1 from "./components/products/Products1";
import Products2 from "./components/products/Products2";
import Products3 from "./components/products/Products3";



function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Base />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "klassaa1",
					element: <Products1 />,
				},
				{
					path: "agropellet",
					element: <Products2 />,
				},
				{
					path: "przemyslowy",
					element: <Products3 />,
				},
			],
		},
	]);



	return <RouterProvider router={router} />;
}

export default App;

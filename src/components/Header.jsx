import React from "react";
import "./header.css";
import { useEffect, useState } from "react";

function Header() {
	const [lok, setLok] = useState();

	useEffect(() => {
		const tablica = localStorage.getItem("tablica");
		const parsTablica = JSON.parse(tablica);
		const numer = Number(parsTablica);
		setLok(numer);
	}, [lok]);

	const henderKcik = () => {
		const sum = lok + 1;
		console.log(sum);
		localStorage.setItem("tablica", JSON.stringify(sum));
		setLok(sum);
	};

	return (
		<div className='header'>
			<div className='header_top'>
				<div className='tel'>
					<a href='tel:4443445'> tel.: +48 444-34-45</a>
				</div>
				<div className='email'>
					<a href='mailto:kamilos@gmail.com'>Email: kamilos@gmail.com</a>
				</div>
				<div className='adress'>
					<p>61-065 Wolkowo, Doły 11</p>
				</div>
			</div>

			<div className='heder_bottom'>
				<img
					className='logo'
					onClick={henderKcik}
					src={process.env.PUBLIC_URL + "/images/slimakLogo.jpg"}
					alt='Logo'
				/>
				<div className='przyciski'>
					<p>Jakis tekst z LOCAL{lok}</p>
					<img
						className='ikon'
						src={process.env.PUBLIC_URL + "/images/slimakLogo.jpg"}
						alt='Logo'
					/>
					<p>Panel użytkownika</p>
				</div>
				<div className='przyciski'>
					<img
						className='ikon'
						src={process.env.PUBLIC_URL + "/images/slimakLogo.jpg"}
						alt='Logo'
					/>
					<p>Panel użytkownika</p>
				</div>
				<div className='przyciski'>
					<img
						className='ikon'
						src={process.env.PUBLIC_URL + "/images/slimakLogo.jpg"}
						alt='Logo'
					/>
					<p>Panel użytkownika</p>
				</div>
			</div>
		</div>
	);
}

export default Header;

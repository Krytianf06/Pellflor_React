import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import imageSlider from "../data";


function Header() {
	const [currentState, setCurrentState] = useState(1);
	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentState === 2) {
				setCurrentState(0);
			} else {
				setCurrentState(currentState + 1);
			}
		}, 5000);
		return () => clearTimeout(timer);
	}, [currentState]);
	const slider = {
		backgroundImage: `url(${imageSlider[currentState].url})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		transitionDuration: "1s",
	};

	return (
		<div style={slider} className='wraper'>
			<div className='header'>
				<div className='header_top'>
					<div className='tel link'>
						<a href='tel:48721720680'> tel.: +48 721-720-680</a>
					</div>
					<div className='email link'>
						<a href='mailto:kamilos@gmail.com'>Email: pellflor@wp.pl</a>
					</div>
					<div className='adress link'>
						<a href='adres'>Adress: 64-060 Wolkowo, Doły 11</a>
					</div>
				</div>
				<div className='shadows'>
					<div className='heder_bottom'>
						<div className='heder_logo'>
							<a href='mailto:kamilos@gmail.com'>
								<img
									className='logo'
									src={process.env.PUBLIC_URL + "/images/logo2.png"}
									alt='Logo'
								/>
							</a>
						</div>
						<div className='logo__text'>
							<span className='logo__text-color'>PELL</span>FLOR
						</div>
						<div className='heder_nav'>
							<nav className='heder_nav_list'>
								<NavLink className='heder_nav_list_item btn_ikon' to="/home" >
									<svg
											version='1.1'
											xmlns='http://www.w3.org/2000/svg'
											className='btn_ikon_svg'
											viewBox='0 0 32 32'>
											<path d='M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z'></path>
									</svg> HOME</NavLink>
									<NavLink className='heder_nav_list_item btn_ikon' to="/products" >
									<svg
											version='1.1'
											xmlns='http://www.w3.org/2000/svg'
											className='btn_ikon_svg'
											viewBox='0 0 35 30'>
											<path d='M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
											<path d='M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
											<path d='M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z'></path>
										</svg>
										Produkty</NavLink>
									<NavLink className='heder_nav_list_item btn_ikon' to="/contact" >
									<svg
											version='1.1'
											xmlns='http://www.w3.org/2000/svg'
											className='btn_ikon_svg'
											viewBox='0 0 32 32'>
											>
											<path d='M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z'></path>
										</svg>
										Kontakt</NavLink>

							</nav>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

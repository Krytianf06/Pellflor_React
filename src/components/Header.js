import React from "react";
import "./header.css";
import { useState } from "react";

function Header() {
	const [list, setList] = useState("none");

	// useEffect(() => {
	// 	const tablica = localStorage.getItem("tablica");
	// 	const parsTablica = JSON.parse(tablica);
	// 	const numer = Number(parsTablica);
	// 	setLok(numer);
	// }, [lok]);

	const clickListMove = (ev) => {
		console.log(ev.type);
		if (ev.type === "mouseenter") {
			setList("block");
		} else if (ev.type === "mouseleave") {
			setList("none");
		}
	};
	// const clickList = (ev) => {
	// 	console.log(ev.type);
	// 	if (list === "none") {
	// 		setList("block");
	// 	} else setList("none");
	// };

	return (
		<div className='wraper'>
			<div className='header'>
				<div className='header_top'>
					<div className='tel link'>
						<a href='tel:4443445'> tel.: +48 444-34-45</a>
					</div>
					<div className='email link'>
						<a href='mailto:kamilos@gmail.com'>Email: kamilos@gmail.com</a>
					</div>
					<div className='adress link'>
						<a href='adres'>Adress: 61-065 Wolkowo, Doły 11</a>
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
						<div className='heder_nav'>
							<ul className='heder_nav_list'>
								<li className='heder_nav_list_item'>
									<a className='btn_ikon' href='przyciski'>
										HOME
										<svg
											version='1.1'
											xmlns='http://www.w3.org/2000/svg'
											className='btn_ikon_svg'
											viewBox='0 0 32 32'>
											<path d='M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z'></path>
										</svg>
									</a>
								</li>
								<li className='heder_nav_list_item'>
									<a className='btn_ikon' href='przyciski'>
										O NAS
										<svg
											version='1.1'
											xmlns='http://www.w3.org/2000/svg'
											className='btn_ikon_svg'
											viewBox='0 0 36 32'>
											<path d='M24 24.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z'></path>
											<path d='M10.225 24.854c1.728-1.13 3.877-1.989 6.243-2.513-0.47-0.556-0.897-1.176-1.265-1.844-0.95-1.726-1.453-3.627-1.453-5.497 0-2.689 0-5.228 0.956-7.305 0.928-2.016 2.598-3.265 4.976-3.734-0.529-2.39-1.936-3.961-5.682-3.961-6 0-6 4.029-6 9 0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h8.719c0.454-0.403 0.956-0.787 1.506-1.146z'></path>
										</svg>
									</a>
								</li>
								<li
									onMouseEnter={clickListMove}
									className='heder_nav_list_item drop'>
									<p className='btn_ikon' href='przyciski'>
										Produkty
										<svg
											version='1.1'
											xmlns='http://www.w3.org/2000/svg'
											className='btn_ikon_svg'
											viewBox='0 0 35 30'>
											<path d='M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
											<path d='M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
											<path d='M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z'></path>
										</svg>
									</p>
									<ul
										onMouseLeave={clickListMove}
										className='drop_list'
										style={{ display: list }}>
										<li>
											<a href='przyciski'>Pelet</a>
										</li>
										<li>
											<a href='przyciski'>Instalacje C.O.</a>
										</li>
										<li>
											<a href='przyciski'>Brukarstwo</a>
										</li>
									</ul>
								</li>
								<li className='heder_nav_list_item'>
									<a className='btn_ikon' href='przyciski'>
										Kontakt
										<svg
											version='1.1'
											xmlns='http://www.w3.org/2000/svg'
											className='btn_ikon_svg'
											viewBox='0 0 32 32'>
											>
											<path d='M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z'></path>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

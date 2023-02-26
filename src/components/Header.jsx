import React from "react";
import "./header.css";

function Header() {
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
                <img className="logo" src={process.env.PUBLIC_URL + "/images/slimakLogo.jpg"} alt="Logo" />
                <div className='przyciski'>
                    <img className="ikon" src={process.env.PUBLIC_URL + "/images/slimakLogo.jpg"} alt="Logo" />
                    <p>Panel użytkownika</p>
                </div>
                <div className='przyciski'>
                    <img className="ikon" src={process.env.PUBLIC_URL + "/images/slimakLogo.jpg"} alt="Logo" />
                    <p>Panel użytkownika</p>
                </div>
                <div className='przyciski'>
                    <img className="ikon" src={process.env.PUBLIC_URL + "/images/slimakLogo.jpg"} alt="Logo" />
                    <p>Panel użytkownika</p>
                </div>
            </div>
		</div>
	);
}

export default Header;

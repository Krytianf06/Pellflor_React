import React from "react";
// import Iframe from "react-iframe";
import "./footer.css";

function Footer() {
	return (
		<div className='footer'>
			<footer className='footer-wrapper'>
				<div className='footer-top'>
					<div className='adress box-text'>
						<h1 className='footer__title'> Adress</h1>
						<ul className='adress__list footer__text'>
							<li className='adress__list__iteam'>
								Pellflor Mirosława Chojnacka
							</li>
							<li className='adress__list__iteam'>Doły 11</li>
							<li className='adress__list__iteam'>64-060 Wolkowo</li>
							<li className='adress__list__iteam'>woj. wielkopolskie</li>
						</ul>
					</div>
					<div className='contact box-text'>
						<h1 className='footer__title'>Dane kontaktowe</h1>
						<ul className='contact__list footer__text'>
							<li className='contact__list__iteam'>
								<a href='mailto:kamilos@gmail.com'>Email: pellflor@wp.pl</a>
							</li>
							<li className='contact__list__iteam'>
								<a href='tel:48721720680'> tel.: +48 721-720-680</a>
							</li>
						</ul>
					</div>
					{/* <div>
						<Iframe
							src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1317.372583623402!2d16.535039010846393!3d52.18871350124975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDExJzE5LjUiTiAxNsKwMzInMDcuOSJF!5e1!3m2!1spl!2spl!4v1680039078217!5m2!1spl!2spl'
							width='300'
							height='200'
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'></Iframe>
					</div> */}
					<div className='socialMedia box-text'>
						<h1 className='footer__title'>Znajdziesz nas również</h1>
						<ul className='socialMedia__list'>
							<li className='socialMedia__list__item'>
								<p className='socialMedia__text'>OLX</p>
								<img
									className='social__logo__olx'
									src={process.env.PUBLIC_URL + "./images/SVG/OLX_ikon.jpg"}
									alt='Pellet kalsay A1'
								/>
							</li>
							<li className='socialMedia__list__item'>
								<p className='socialMedia__text'>Facebook </p>
								<svg
									className='social__logo__facebook'
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 32 32'>
									<title>facebook2</title>
									<path d='M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z'></path>
								</svg>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer-bootom'>
					<ul className='bootom__list'>
						<li className='bootom__list__item'>autor: Krystian Florkowski</li>
						<li className='bootom__list__item'>
							email:krystianf06@outlook.com
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default Footer;

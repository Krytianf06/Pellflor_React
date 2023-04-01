import React from "react";
import Iframe from "react-iframe";
import "./footer.css";

function Footer() {
	return (
		<div className='footer'>
      <footer className="footer-wrapper">
        <div className="footer-top">
				<div className="adress">
					<h1>Adress</h1>
					<ul>
						<li>Pellflor Mirosława Chojnacka</li>
						<li>Doły 11</li>
						<li>61-065 Wolkowo</li>
						<li>woj. wielkopolskie</li>
					</ul>
				</div>
				<div  className="contact">
					<h1>Dane kontaktowe</h1>
					<ul>
            <li>Email: kamilos@gmail.com</li>
            <li>tel.: +48 444-34-45</li>
					</ul>
          </div>
          <div>
          <Iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1317.372583623402!2d16.535039010846393!3d52.18871350124975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDExJzE5LjUiTiAxNsKwMzInMDcuOSJF!5e1!3m2!1spl!2spl!4v1680039078217!5m2!1spl!2spl" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
          </div>
          <div   className="socialMedia" >
            <h1>Znajdziesz nas również</h1>
					<p>OLX</p>
					<p>Facebook</p>
				</div>
        </div>
        <div className="footer-bootom">
          <ul className="policy__list">
            <li  className="policy__list__item">Regulamin</li>
            <li  className="policy__list__item">Polityka prywatności</li>
          </ul>
        </div>
			</footer>
		</div>
	);
}

export default Footer;

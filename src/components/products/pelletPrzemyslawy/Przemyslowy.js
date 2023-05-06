import React from "react";
import "./przemyslowy.css";

function Przemyslowy() {
	return (
		<div className='box__right'>
			<div className='box__header'>
				{/* <h1 className='box__header__title'>Pellet Przemysłowy</h1> */}
				<img
					className='box__header__picture'
					src={process.env.PUBLIC_URL + "./images/przemyslowy.jpg"}
					alt='Pellet kalsay A1'
					width='300'
					height='350'
				/>
			</div>
			<div className='box__text'>
				<h1 className='box__text__title'>Cym jest Pellet Przemysłowy?</h1>
				<p className='box__text__description'>
					Pellet przemysłowy jest produkowany z surowców przemysłowych, takich
					jak trociny, zrębki, wióry drzewne i inne odpady przemysłowe. Surowce
					te są często łatwo dostępne i stanowią produkty uboczne z innych
					procesów przemysłowych. Dzięki temu można ograniczyć zużycie surowców
					naturalnych, takich jak drewno, które jest głównym składnikiem
					tradycyjnego pelletu drzewnego. Pellet przemysłowy może być bardziej
					ekonomiczny niż tradycyjny pellet drzewny. Surowce przemysłowe często
					są dostępne w większych ilościach i mogą być tańsze lub nawet darmowe,
					ponieważ są efektem ubocznym procesów przemysłowych. To może
					przekładać się na niższe koszty produkcji pelletu przemysłowego i
					niższą cenę dla konsumentów. Pellet przemysłowy może mieć wyższą
					gęstość energetyczną niż tradycyjny pellet drzewny.
				</p>
				<h1 className='box__text__title'>Zalety</h1>
				<p className='box__text__description'>
					Po pierwsze, jest to forma odnawialnego źródła energii, ponieważ
					wykorzystuje odpady przemysłowe, które w przeciwnym razie mogłyby
					zostać zmarnowane lub spalone. Po drugie, jest to ekologiczny i
					przyjazny dla środowiska sposób ogrzewania, ponieważ emisja CO2
					podczas spalania pelletu przemysłowego jest znacznie niższa niż w
					przypadku tradycyjnych paliw stałych. Ponadto, Surowce przemysłowe
					często są bardziej skondensowane i bardziej gęste, co oznacza, że w
					jednostce masy zawierają więcej energii. To przekłada się na większą
					wydajność i efektywność energetyczną podczas spalania pelletu
					przemysłowego.
				</p>
				<h1 className='box__text__title'>Właściwości pelletu:</h1>
				<ul className='box__text__list'>
					<li>
						Wydajność energetyczna: Pellet przemysłowy ma zwykle wyższą gęstość
						energetyczną niż tradycyjny pellet drzewny. To oznacza, że w
						jednostce masy zawiera większą ilość energii, co przekłada się na
						efektywne i skuteczne wykorzystanie paliwa.
					</li>
					<li>
						Dostępność surowców: Surowce wykorzystywane do produkcji pelletu
						przemysłowego pochodzą z procesów przemysłowych i są często dostępne
						w większych ilościach. Dzięki temu można skorzystać z dostępnych
						zasobów i zmniejszyć zużycie surowców naturalnych.
					</li>
					<li>
						Stabilność cenowa: Dostępność większej ilości surowców przemysłowych
						może wpływać na stabilność cen pelletu przemysłowego. Odpady
						przemysłowe często są tańsze lub nawet darmowe, co może przekładać
						się na konkurencyjne i stabilne ceny pelletu przemysłowego dla
						konsumentów.
					</li>
					<li>
						Wielozastosowaniowość: Pellet przemysłowy znajduje zastosowanie w
						różnych sektorach przemysłowych i energetycznych. Może być
						wykorzystywany w elektrowniach, fabrykach, zakładach przemysłowych i
						innych miejscach, gdzie jest potrzebne efektywne źródło energii.
					</li>
					<li>
						Redukcja emisji CO2: Spalanie pelletu przemysłowego przyczynia się
						do redukcji emisji CO2 w porównaniu do niektórych innych paliw
						stałych. Wykorzystanie odpadów przemysłowych jako surowców zmniejsza
						negatywny wpływ na środowisko i przyczynia się do walki ze zmianami
						klimatycznymi.
					</li>
				</ul>
				<h1 className='box__text__title'>Proces produkcji</h1>
				<p className='box__text__description'>
					Produkowany przez nas pellet przemysłowy jest wytwarzany wyłącznie z
					naturalnego surowca, którym jest zrębka drzewna i trociny. Do
					produkcji pelletu przemysłowego używa się surowca pochodzącego z odpadów drewnianych,
					głównie sosny, pozbawionego wszelkich domieszek, takich jak kamienie,
					elementy plastikowe czy inne sztuczne dodatki. Proces produkcji
					obejmuje zbieranie surowców, ich suszenie, rozdrabnianie,
					pelletyzację, chłodzenie, oraz sortowanie i pakowanie. Znajduje
					zastosowanie jako efektywne i ekologiczne paliwo do ogrzewania domów i
					budynków. Jest alternatywą dla tradycyjnych paliw stałych,
					przyczyniając się do redukcji odpadów i korzystania z odnawialnych
					źródeł energii. Produkcja pelletu przemysłowego pomaga w ograniczaniu
					negatywnego wpływu na środowisko i promowaniu zrównoważonego rozwoju.
				</p>
			</div>
		</div>
	);
}

export default Przemyslowy;

import React from "react";

function AgroPellet() {
	return (
		<div className='box__right'>
			<div className='box__header'>
				{/* <h1 className='box__header__title'>Agro Pellet</h1> */}
				<img
					className='box__header__picture'
					src={process.env.PUBLIC_URL + "./images/agroPellet.jpg"}
					alt='Pellet kalsay A1'
					width='350'
					height='350'
				/>
			</div>
			<div className='box__text'>
				<h1 className='box__text__title'>Cym jest Agro Pellet?</h1>
				<p className='box__text__description'>
					Agropellet, zwany również pelletem agro lub pelletem rolniczym, to
					rodzaj pelletu drzewnego produkowanego z odpadów rolniczych lub
					organicznych surowców pochodzenia roślinnego. Jest to ekologiczna
					alternatywa dla tradycyjnego pelletu drzewnego, która wykorzystuje
					materiały pochodzące z rolnictwa lub przemysłu spożywczego. Agropellet
					jest produkowany z różnych surowców, takich jak łuski słonecznika,
					łuski ryżu, słoma, łodygi kukurydzy, a nawet odpady z produkcji
					żywności. Te materiały, które często są pozostałościami rolnymi, są
					przerabiane i sprasowywane w formę małych cylindrycznych pelletów o
					wysokiej gęstości.
				</p>
				<h1 className='box__text__title'>Zalety</h1>
				<p className='box__text__description'>
				Po pierwsze, jest to forma odnawialnego źródła energii, ponieważ wykorzystuje odpady organiczne, które w przeciwnym razie mogłyby zostać zmarnowane lub spalone. Po drugie, jest to ekologiczny i przyjazny dla środowiska sposób ogrzewania, ponieważ emisja CO2 podczas spalania agropelletu jest znacznie niższa niż w przypadku tradycyjnych paliw stałych. Ponadto, agropellet ma podobne właściwości opałowe i wydajność energetyczną jak tradycyjny pellet drzewny.
				</p>
				<h1 className='box__text__title'>Właściwości pelletu:</h1>
				<ul className="box__text__list">
					<li>
					Ekologiczność: Agropellet jest ekologicznym źródłem energii, ponieważ jest produkowany z odpadów rolniczych lub organicznych surowców pochodzenia roślinnego. Wykorzystuje materiały, które mogłyby być zmarnowane lub spalone, przyczyniając się do ograniczenia odpadów i negatywnego wpływu na środowisko.
					</li>
					<li>
					Niska emisja CO2: Podczas spalania agropelletu emituje się znacznie mniej dwutlenku węgla niż w przypadku tradycyjnych paliw stałych. Jest to związane z odnawialnym charakterem surowców używanych do produkcji agropelletu.
					</li>
					<li>Wysoka gęstość energetyczna: Agropellet ma wysoką gęstość energetyczną, co oznacza, że zawiera duże ilości energii w jednostce masy. Dzięki temu jest efektywnym źródłem ciepła i może zapewnić skuteczne ogrzewanie.</li>
					<li>Agropellet ma zazwyczaj jednolitą strukturę i jednorodny skład, co pozwala na spójne spalanie i równomierne uwalnianie ciepła. To przyczynia się do efektywnego wykorzystania energii i utrzymania stabilnej temperatury.</li>
					<li>
					Niski poziom wilgoci - Agropellet ma zwykle niski poziom wilgoci, co przekłada się na lepszą wydajność podczas spalania. Niska wilgotność minimalizuje straty energii związane z odparowywaniem wody i przyczynia się do bardziej efektywnego spalania.
					</li>
				</ul>
				<h1 className='box__text__title'>Proces produkcji</h1>
				<p className='box__text__description'>
					Produkowany przez nas agro pellet to materiał grzewczy wysokiej jakości. Agropellet jest produkowany poprzez przetwarzanie odpadów rolniczych lub organicznych surowców pochodzenia roślinnego w formę małych cylindrycznych pelletów. Proces produkcji obejmuje zbieranie surowców, ich suszenie, rozdrabnianie, pelletyzację, chłodzenie, oraz sortowanie i pakowanie. Agropellet jest ekologicznym źródłem energii, o niskiej emisji CO2, wysokiej gęstości energetycznej i niskim poziomie wilgoci. Znajduje zastosowanie jako efektywne i ekologiczne paliwo do ogrzewania domów i budynków. Jest alternatywą dla tradycyjnych paliw stałych, przyczyniając się do redukcji odpadów i korzystania z odnawialnych źródeł energii. Produkcja agropelletu pomaga w ograniczaniu negatywnego wpływu na środowisko i promowaniu zrównoważonego rozwoju.
				</p>
			</div>
		</div>
	);
}

export default AgroPellet;

import React from "react";

function KlassaA1() {
	return (
		<div className='box__right'>
			<div className='box__header'>
				{/* <h1 className='box__header__title'>Pellet Klassy A1</h1> */}
				<img
					className='box__header__picture'
					src={process.env.PUBLIC_URL + "./images/klasaA1.jpg"}
					alt='Pellet kalsay A1'
					width='350'
					height='250'
				/>
			</div>
			<div className='box__text'>
				<h1 className='box__text__title'>
					Co to znaczy, że pellet jest klasy A1?
				</h1>
				<p className='box__text__description'>
					Pellet drzewny klasy A1, czyli pellet najwyższej jakości, wytwarzany
					jest zgodnie ze standardami w zakresie użytego surowca, a także
					procedur kontroli jakości oraz procedur produkcyjnych. Pellet A1
					powstaje z pni drzew oraz z pozostałości po nich. Dla porównania
					pellet o niższej klasie — A2 — powstaje już z kory, konarów, gałęzi i
					odpadów drzewnych. Dzięki zachowaniu wyższej czystości pellet A1
					cechuje się niską ilością powstającego popiołu oraz azotu. Warto tu
					wspomnieć, że w elementach niższej jakości pelletu, np. w korze mogą
					znajdować się różne zanieczyszczenia mineralne wpływające na jakość
					spalania — takie jak piasek. Tylko pellet klasy A1 charakteryzuje się
					wysokimi parametrami spalania, dając nam tym samym czystość i
					bezpieczeństwo.
				</p>
				<h1 className='box__text__title'>Zalety</h1>
				<p className='box__text__description'>
					Niska zawartość popiołu i czystość spalania to nie jedyne zalety
					pelletu klasy A1. Pellet drzewny w tej klasie charakteryzuje się
					również wysoką efektywnością, a to dzięki swojej dużej kaloryczności.
					Wysokie parametry spalania zapewniają mniejsze zużycie produktu. Im
					niższa klasa pelletu, tym wyższa jego wartość odrzutu, a my musimy
					zużyć go więcej, by ogrzać ten sam metraż. Konsekwencje tego można
					odczuć zwłaszcza przy dłuższym użytkowaniu — gorszego jakościowo
					pelletu trzeba zużywać po prostu więcej. Nie jest on więc opłacalnym
					rozwiązaniem. Jednak nie tylko człowiek i środowisko zyskują na
					używaniu pelletu najwyższej klasy. Nasze urządzenia grzewcze oraz całe
					domy również!
				</p>
				<h1 className='box__text__title'>Właściwości pelletu:</h1>
				<ul className="box__text__list">
					<li>
						Ekologiczny materiał, wyprodukowany z naturalnego materiału (trocin
						drzew)
					</li>
					<li>
						Pozbawiony sztucznych dodatków (typu klej). Granulowana konsystencja
					</li>
					<li>Bardzo wydajny i efektywny materiał grzewczy.</li>
					<li>Zawiera bardzo niską zawartość popiołu.</li>
					<li>
						Dzięki granulowanej postaci jest łatwy do magazynowania oraz
						przenoszenia.
					</li>
					<li>
						Niska zawartość tlenku siarki w spalinach oraz zerowa zawartość CO2.
					</li>
					<li>Przyjazny dla środowiska oraz człowieka.</li>
					<li>
						Atrakcyjny cenowo – niska cena za opał pozwala znacząco zmniejszyć
						koszty ogrzewania..
					</li>
				</ul>
				<h1 className='box__text__title'>Proces produkcji</h1>
				<p className='box__text__description'>
					Produkowany przez nas pellet to materiał grzewczy wysokiej jakości. Ze
					względu na swoją granulowaną formę oraz walory ekologiczne ma również
					inne zastosowania np. jest stosowany jako wyściółka dla zwierząt
					(szczególnie domowych, takich jak świnki morskie, chomiki).
					Dynamicznie zwiększa się liczba gospodarstw stosujących ekologiczny
					opał. Wychodząc naprzeciw potrzebom naszych Klientów, dokładamy
					wszelkich starań, aby być zaufanym producentem najwyższej klasy
					materiałów grzewczych. W związku z tym oferujemy wysoką jakość,
					bezpieczne i starannie wyselekcjonowane materiały produktowe oraz
					konkurencyjny cennik usług. Do produkcji wykorzystujemy trociny
					liściasto-iglaste, które charakteryzują się bardzo dobrą spoistością i
					jasną barwą pelletu.W etapie produkcji używa się suszarni taśmowej,
					której efektem jest unikanie nadpalenia materiału. Najważniejszym
					atrybutem jest brak zużlowania naszego produktu w piecach.
				</p>
			</div>
		</div>
	);
}

export default KlassaA1;

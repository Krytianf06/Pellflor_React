import React from "react";
import "./agroPellet.css";

function AgroPellet() {
	return (
		<div className='conteiner'>
			<div className='box'>
				<div className='box__left'>
					<h1 className='title'>Nasze Produkty</h1>
					<ul className='box__list'>
						<li className='box__list__item'>Pellet Klasy A1</li>
						<li className='box__list__item'>Pellet Przemysławy</li>
						<li className='box__list__item'>Agro Pellet</li>
					</ul>
				</div>
				<div className='box__right'>
					<div className='box__header'>
						<h1 className='box__header__title'>Pellet Klassy A1</h1>
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
							Pellet drzewny klasy A1, czyli pellet najwyższej jakości,
							wytwarzany jest zgodnie ze standardami w zakresie użytego surowca,
							a także procedur kontroli jakości oraz procedur produkcyjnych.
							Pellet A1 powstaje z pni drzew oraz z pozostałości po nich. Dla
							porównania pellet o niższej klasie — A2 — powstaje już z kory,
							konarów, gałęzi i odpadów drzewnych. Dzięki zachowaniu wyższej
							czystości pellet A1 cechuje się niską ilością powstającego popiołu
							oraz azotu. Warto tu wspomnieć, że w elementach niższej jakości
							pelletu, np. w korze mogą znajdować się różne zanieczyszczenia
							mineralne wpływające na jakość spalania — takie jak piasek. Tylko
							pellet klasy A1 charakteryzuje się wysokimi parametrami spalania,
							dając nam tym samym czystość i bezpieczeństwo.
						</p>
						<h1 className='box__text__title'>
							Pellet drzewny — zalety klasy A1
						</h1>
						<p className='box__text__description'>
							Niska zawartość popiołu i czystość spalania to nie jedyne zalety
							pelletu klasy A1. Pellet drzewny w tej klasie charakteryzuje się
							również wysoką efektywnością, a to dzięki swojej dużej
							kaloryczności. Wysokie parametry spalania zapewniają mniejsze
							zużycie produktu. Im niższa klasa pelletu, tym wyższa jego wartość
							odrzutu, a my musimy zużyć go więcej, by ogrzać ten sam metraż.
							Konsekwencje tego można odczuć zwłaszcza przy dłuższym użytkowaniu
							— gorszego jakościowo pelletu trzeba zużywać po prostu więcej. Nie
							jest on więc opłacalnym rozwiązaniem. Jednak nie tylko człowiek i
							środowisko zyskują na używaniu pelletu najwyższej klasy. Nasze
							urządzenia grzewcze oraz całe domy również!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AgroPellet;

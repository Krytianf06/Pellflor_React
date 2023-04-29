import React from "react";
import "./home.css";

function Home() {
	return (
		<div className='conteiner'>
			<div className='wraper__home'>
				<h1 className='home_title'>Produkcja pelletu to nasza pasja</h1>
				<div className='home'>
					<img
						className='home_picture'
						src={process.env.PUBLIC_URL + "./images/klasaA1.jpg"}
						alt='Pellet kalsay A1'
						width='350'
						height='250'
					/>
					<p className='home__text'>
						Nasza firma zajmuje się produkcją pelletu drzewnego wysokiej jakości
						od kilku lat. Produkujemy pellet klasy A1, agropellet oraz pellet
						przemysłowy, aby sprostać różnym potrzebom naszych klientów. Nasze
						produkty są wyjątkowo skuteczne i nie zawiodły jeszcze żadnego
						kupującego. Nasz pellet jest w stanie zapewnić wydajne i ekonomiczne
						ogrzewanie w każdym domu czy budynku. Nasz pellet drzewny jest
						produkowany wyłącznie z najlepszych surowców, co pozwala na
						uzyskanie wysokiej jakości produktu, który spełnia normy klasy A1.
						Dzięki temu nasz pellet jest bardzo skuteczny i ma bardzo niską
						zawartość popiołu, dzięki czemu małe ilości szkodliwych substancji
						są emitowane podczas spalania. Nasza firma oferuje atrakcyjne ceny,
						aby zapewnić jaknajwięcej korzyści dla naszych klientów. Dzięki
						naszemu pelletowi drzewnemu możesz cieszyć się wydajnym i
						ekonomicznym ogrzewaniem bez szkody dla środowiska. Jesteśmy
						przekonani, że nasz pellet przyczyni się do podniesienia komfortu
						życia i zadowolenia z użytkowania ogrzewania w Twoim domu lub
						budynku. Jeśli szukasz skutecznego, niezawodnego i ekologicznego
						źródła energii, skontaktuj się z nami. Jesteśmy dostępni
						telefonicznie i z przyjemnością odpowiemy na Twoje pytania. Naszym
						celem jest zapewnienie satysfakcji klientów i zapewnienie im
						najwyższej jakości produktów.
					</p>
				</div>
				<h1 className='home_title'>Nasze produkty to ciepło w Twoim domu</h1>
				<div>
					<ul className='home__list'>
						<li>
							<p>Pellet Klasy A1</p>
							<img
								className='home_list_iteam'
								src={process.env.PUBLIC_URL + "./images/produkt1.jpg"}
								alt='Pellet kalsay A1'
								width='350'
								height='250'
							/>
						</li>
						<li>
							<p>AgroPellet</p>
							<img
								className='home_list_iteam'
								src={process.env.PUBLIC_URL + "./images/produkt2.jpg"}
								alt='Pellet kalsay A1'
								width='350'
								height='250'
							/>
						</li>
						<li>
							<p>Pellet przemysłowy</p>
							<img
								className='home_list_iteam'
								src={process.env.PUBLIC_URL + "./images/produkt3.jpg"}
								alt='Pellet kalsay A1'
								width='350'
								height='250'
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Home;

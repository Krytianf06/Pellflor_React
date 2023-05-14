export const NotFound = () => {
    return (
        <main style={{
            textAlign: "center",
            height: "100vh"  }}>
        <img
          style={{
            paddingTop:"30px"}}
					className='box__header__picture'
					src={process.env.PUBLIC_URL + "./images/404_page.png"}
					alt='Pellet kalsay A1'
					width='600'
					height='400'
				/>
        <p style={{
          fontSize: 80,
        color:"red"}}> Sorry, we couldn't find that page :(</p>
      </main>
    );
  };
import { Container } from "./style.js";

const Home = () => {
  return (
    <Container>
      <h1 className="phrase">Welcome to Rick and Morty and Pokemon Pokedex</h1>
      <div className="images">
        <img
          className="img1"
          src="https://images.squarespace-cdn.com/content/v1/528252b7e4b00150d03a4848/1503802782958-Q5WZPEPRRHQTXE7H6O0Q/ke17ZwdGBToddI8pDm48kJUlZr2Ql5GtSKWrQpjur5t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYapt4KGntwbjD1IFBRUBU6SRwXJogFYPCjZ6mtBiWtU3WUfc_ZsVm9Mi1E6FasEnQ/RickAndMorty_RaMportal1500.png"
          alt="rick"
        />
        <img
          className="img2"
          src="https://lh3.googleusercontent.com/proxy/lgLRbs34tn1GRF-x0EtY37Q8F4Ul3Oon6_g5iDTpVOX4z8XYluQH6ZpBc6HExp7ftGhAJhFpxmxbr7coPbHqIWtewj8U2C3ydJoXiqi1vfyan9dNK1OuSsWbSmH3Nb5c"
          alt="pokemon"
        />
      </div>
      <h2 className="phrase">
        Here you can add your favorites pokemon and Rick and Morty characters to
        your favorites list
      </h2>
      <h2 className="phrase">
        And it`s easy, just click in your favorite char and it`s done, they`re
        in your favorite list
      </h2>

      <h2 className="phrase">
        To remove, just go to the fav`s list and click to remove
      </h2>
    </Container>
  );
};

export default Home;

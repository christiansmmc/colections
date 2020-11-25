import { Container } from "./style.js";

import Pokeball from "../../images/pokeball.png";
import Rick from "../../images/rick.png";

const Home = () => {
  return (
    <Container>
      <h1 className="phrase">Welcome to Rick and Morty and Pokemon Pokedex</h1>
      <div className="images">
        <img className="img1" src={Rick} alt="rick" />
        <img className="img2" src={Pokeball} alt="pokemon" />
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

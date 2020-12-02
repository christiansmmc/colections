import { Container } from "../../style/style.js";

import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { addFavThunk } from "../../store/favR/thunks";
import { addPokeThunk } from "../../store/favP/thunks";

const Character = ({ char, onName }) => {
  const dispatch = useDispatch();

  // const addFavorites = (char) => {
  //   console.log(char);
  //   let getFavPokemon = JSON.parse(localStorage.getItem("favoritesP")) || [];
  //   let getFavRick = JSON.parse(localStorage.getItem("favoritesR")) || [];

  //   if (getFavRick.some((e) => e.name === char.name)) {
  //     return;
  //   }

  //   if (char.location) {
  //     getFavRick.push(char);
  //     localStorage.setItem("favoritesR", JSON.stringify(getFavRick));
  //     return;
  //   }

  //   if (getFavPokemon.some((e) => e.id === char.id)) {
  //     return;
  //   } else {
  //     getFavPokemon.push(char);
  //     localStorage.setItem("favoritesP", JSON.stringify(getFavPokemon));
  //   }
  // };

  return (
    <Container key="1">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => dispatch(onName(char))}
        className="cards"
      >
        <img src={char.image} alt={char.name} />
        <div className="pokemonName">{char.name}</div>
      </motion.div>
    </Container>
  );
};

export default Character;

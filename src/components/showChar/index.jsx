import { Container } from "../../style/style.js";

import { motion } from "framer-motion";

const Character = ({ name, image, id, location }) => {
  const addFavorites = (name, image) => {
    let getFavPokemon = JSON.parse(localStorage.getItem("favoritesP")) || [];
    let getFavRick = JSON.parse(localStorage.getItem("favoritesR")) || [];

    if (getFavRick.some((e) => e.name === name)) {
      return;
    }

    if (location) {
      getFavRick.push({ name, image, id });
      localStorage.setItem("favoritesR", JSON.stringify(getFavRick));
      return;
    }

    if (getFavPokemon.some((e) => e.id === id)) {
      return;
    } else {
      getFavPokemon.push({ name, image, id });
      localStorage.setItem("favoritesP", JSON.stringify(getFavPokemon));
    }
  };

  return (
    <Container>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => addFavorites(name, image)}
        className="cards"
      >
        <img src={image} alt={name} />
        <div className="pokemonName">{name}</div>
      </motion.div>
    </Container>
  );
};

export default Character;

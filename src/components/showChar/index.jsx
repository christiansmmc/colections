import { Container } from "../../style/style.js";

import { motion } from "framer-motion";

import { useDispatch } from "react-redux";

const Character = ({ char, onName }) => {
  const dispatch = useDispatch();

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

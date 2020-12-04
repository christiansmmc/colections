import { Container } from "../../style/style.js";

import { motion } from "framer-motion";

import { useDispatch } from "react-redux";

const Character = ({ char, onName, className, clickable = true }) => {
  const dispatch = useDispatch();

  return (
    <Container key="1">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => clickable && dispatch(onName(char))}
        className="cards"
      >
        <img className={className} src={char.image} alt={char.name} />
        <div className="pokemonName">{char.name}</div>
      </motion.div>
    </Container>
  );
};

export default Character;

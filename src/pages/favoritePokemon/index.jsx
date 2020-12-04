import Character from "../../components/showChar";

import { motion } from "framer-motion";

import { Button } from "../../style/button";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RemovePokeThunk } from "../../store/favP/thunks";

const FavoritePokemon = () => {
  const dispatch = useDispatch();
  const poke = useSelector((state) => state.pokemon);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="list">
        {poke.length === 0 ? (
          <h1 style={{ color: "red", fontWeight: "bold" }}>
            Add at least one character to see your favorites
          </h1>
        ) : (
          poke.map((favorite, index) => (
            <div key={index} className="fav-card">
              <Character
                clickable={false}
                className="pokeImage"
                char={{
                  id: favorite.id,
                  name: favorite.name,
                  image: favorite.image,
                }}
              />
              <Button onClick={() => dispatch(RemovePokeThunk(favorite.name))}>
                Remove
              </Button>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default FavoritePokemon;

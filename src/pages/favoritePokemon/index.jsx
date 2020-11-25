import Character from "../../components/showChar";

import { useState } from "react";

import { motion } from "framer-motion";

import { Button } from "../../style/button";

const FavoritePokemon = () => {
  const [local, setLocal] = useState(
    JSON.parse(localStorage.getItem("favoritesP")) || []
  );

  const remove = (id) => {
    const index = local.findIndex((e) => e.id === id);
    local.splice(index, 1);
    localStorage.setItem("favoritesP", JSON.stringify(local));
    setLocal(JSON.parse(localStorage.getItem("favoritesP")));
  };
  console.log(local);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="list">
        {local.length === 0 ? (
          <h1 style={{ color: "red", fontWeight: "bold" }}>
            Add at least one character to see your favorites
          </h1>
        ) : (
          local.map((favorite) => (
            <div className="fav-card">
              <Character
                id={favorite.id}
                name={favorite.name}
                image={favorite.image}
              />
              <Button onClick={() => remove(favorite.id)}>Remove</Button>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default FavoritePokemon;

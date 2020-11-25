import Character from "../../components/showChar";

import { useState } from "react";

import { motion } from "framer-motion";

import { Button } from "../../style/button";

const FavoriteRick = () => {
  // let getLocal = JSON.parse(localStorage.getItem("favoritesR")) || [];

  // const remove = (id) => {
  //   const index = getLocal.findIndex((e) => e.id === id);
  //   getLocal.splice(index, 1);
  //   localStorage.setItem("favoritesR", JSON.stringify(getLocal));
  // };

  const [local, setLocal] = useState(
    JSON.parse(localStorage.getItem("favoritesR")) || []
  );

  const remove = (name) => {
    const index = local.findIndex((e) => e.name === name);
    local.splice(index, 1);
    localStorage.setItem("favoritesR", JSON.stringify(local));
    setLocal(JSON.parse(localStorage.getItem("favoritesR")));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="list">
        {local.map((favorite) => (
          <div className="fav-card">
            <Character
              id={favorite.id}
              name={favorite.name}
              image={favorite.image}
            />
            <Button onClick={() => remove(favorite.name)}>Remove</Button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FavoriteRick;

import Character from "../../components/showChar";

import { motion } from "framer-motion";

import { Button } from "../../style/button";

import { useDispatch } from "react-redux";
import { removeFavThunk } from "../../store/favR/thunks";
import { useSelector } from "react-redux";

const FavoriteRick = () => {
  const dispatch = useDispatch();
  const rick = useSelector((state) => state.rick);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="list">
        {rick.length === 0 ? (
          <h1 style={{ color: "red", fontWeight: "bold" }}>
            Add at least one character to see your favorites
          </h1>
        ) : (
          rick.map((favorite, index) => (
            <div key={index} className="fav-card">
              <Character
                clickable={false}
                char={{
                  name: favorite.name,
                  image: favorite.image,
                  id: favorite.location,
                }}
              />
              <Button onClick={() => dispatch(removeFavThunk(favorite.name))}>
                Remove
              </Button>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default FavoriteRick;

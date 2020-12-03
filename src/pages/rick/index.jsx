import axios from "axios";
import { useState, useEffect } from "react";
import Character from "../../components/showChar";

import { motion } from "framer-motion";

import { Button } from "antd";
import Search from "../../components/searchBar";

import { addFavThunk } from "../../store/favR/thunks";
import { colectionRickThunk } from "../../store/colectionRick/thunks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Rick = () => {
  const [nextPage, setNextPage] = useState();
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character?page=1"
  );
  const dispatch = useDispatch();
  const rick = useSelector((state) => state.colectionRick);

  const next = () => {
    if (nextPage.next === null) {
      return;
    }
    setUrl(nextPage.next);
  };

  const prev = () => {
    if (nextPage.previous === null) {
      return;
    }
    setUrl(nextPage.previous);
  };

  useEffect(() => {
    dispatch(colectionRickThunk(url, setNextPage));
  }, [url]);

  const searchRick = (e) => {
    let apiName = e.toLowerCase();
    setUrl(`https://rickandmortyapi.com/api/character/?name=${apiName}`);
  };

  const zerar = () => {
    setUrl("https://rickandmortyapi.com/api/character?page=1");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="input">
        <Search onChange={zerar} function={searchRick} />
      </div>
      <div className="buttons">
        <Button size="large" onClick={prev} type="primary">
          Previous
        </Button>
        <Button size="large" onClick={next} type="primary">
          Next
        </Button>
      </div>
      <div className="list">
        {rick.map((character, index) => (
          <Character
            key={index}
            onName={addFavThunk}
            char={{
              name: character.name,
              image: character.image,
              location: character.location,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};
export default Rick;

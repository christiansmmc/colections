import axios from "axios";
import { useState, useEffect } from "react";
import Character from "../../components/showChar";

import { motion } from "framer-motion";

import { Button } from "antd";
import Search from "../../components/searchBar";

import { addFavThunk } from "../../store/favR/thunks";

const Rick = () => {
  const [api, setApi] = useState();
  const [character, setCharacter] = useState([]);
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character?page=1"
  );
  const [search, setSearch] = useState([]);

  const next = () => {
    if (api.next === null) {
      return;
    }
    setUrl(api.next);
  };

  const prev = () => {
    if (api.prev === null) {
      return;
    }
    setUrl(api.prev);
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      setCharacter([...res.data.results]);
      setApi(res.data.info);
    });
  }, [url]);

  const searchRick = (e) => {
    let apiName = e.toLowerCase();

    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${apiName}`)
      .then((res) => {
        setSearch([...res.data.results]);
      }, [])
      .catch(setSearch([]));
  };

  const zerar = () => {
    setSearch([]);
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
        {search.length === 0
          ? character.map((character, index) => (
              <Character
                key={index}
                onName={addFavThunk}
                char={{
                  name: character.name,
                  image: character.image,
                  location: character.location,
                }}
              />
            ))
          : search.map((character) => (
              <Character
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

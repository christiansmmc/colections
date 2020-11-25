import axios from "axios";
import { useState, useEffect } from "react";
import Character from "../../components/showChar";

import { motion } from "framer-motion";

import { Button } from "antd";
import Search from "../../components/searchBar";

const Pokemon = () => {
  const [api, setApi] = useState();
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState([]);

  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const prev = () => {
    if (api.previous === null) {
      return;
    }
    setUrl(api.previous);
  };

  const next = () => {
    if (api.next === null) {
      return;
    }
    setUrl(api.next);
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon([...res.data.results]);
      setApi(res.data);
    });
  }, [url]);

  const searchPokemon = (e) => {
    let pokemonName = e.toLowerCase();

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((res) => setSearch([res.data.forms[0]]))
      .catch(setSearch([]));
  };

  const zerar = () => {
    setSearch([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="input">
        <Search onChange={zerar} function={searchPokemon} />
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
          ? pokemon.map((pokemon) => {
              const brokenUrl = pokemon.url.split("/");
              const id = brokenUrl[brokenUrl.length - 2];
              return (
                <Character
                  id={id}
                  name={pokemon.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                />
              );
            })
          : search.map((search) => {
              const brokenUrl = search.url.split("/");
              const id = brokenUrl[brokenUrl.length - 2];
              return (
                <Character
                  id={id}
                  name={search.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                />
              );
            })}
      </div>
    </motion.div>
  );
};

export default Pokemon;

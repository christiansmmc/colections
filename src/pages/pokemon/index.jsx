import axios from "axios";
import { useState, useEffect } from "react";
import Character from "../../components/showChar";

import { motion } from "framer-motion";

import { Button } from "antd";
import Search from "../../components/searchBar";

import { addPokeThunk } from "../../store/favP/thunks";
import { colectionThunk } from "../../store/colection/thunks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Pokemon = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.colection);

  const [nextPage, setNextPage] = useState();
  const [search, setSearch] = useState([]);

  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );

  useEffect(() => {
    dispatch(colectionThunk(url, setNextPage));
  }, [url]);

  const prev = () => {
    if (nextPage.previous === null) {
      return;
    }
    setUrl(nextPage.previous);
  };

  const next = () => {
    if (nextPage.next === null) {
      return;
    }
    setUrl(nextPage.next);
  };

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
          ? pokemon.map((pokemon, index) => {
              const brokenUrl = pokemon.url.split("/");
              const id = brokenUrl[brokenUrl.length - 2];
              return (
                <Character
                  className="pokeImage"
                  key={index}
                  onName={addPokeThunk}
                  char={{
                    id: id,
                    name: pokemon.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                  }}
                />
              );
            })
          : search.map((search, index) => {
              const brokenUrl = search.url.split("/");
              const id = brokenUrl[brokenUrl.length - 2];
              return (
                <Character
                  className="pokeImage"
                  key={index}
                  onName={addPokeThunk}
                  char={{
                    id: id,
                    name: search.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                  }}
                />
              );
            })}
      </div>
    </motion.div>
  );
};

export default Pokemon;

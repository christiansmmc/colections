import { Route, Switch } from "react-router-dom";
import Rick from "../pages/rick";
import Pokemon from "../pages/pokemon";
import FavoritePokemon from "../pages/favoritePokemon";
import FavoriteRick from "../pages/favoriteRick";
import Home from "../pages/home";

import { AnimatePresence } from "framer-motion";

export const Router = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path={"/"} component={Home}></Route>
        <Route exact path={"/rick-list"} component={Rick} />
        <Route exact path={"/pokemon-list"} component={Pokemon} />
        <Route
          exact
          path={"/pokemon-favorite-list"}
          component={FavoritePokemon}
        />
        <Route exact path={"/rick-favorite-list"} component={FavoriteRick} />
      </Switch>
    </AnimatePresence>
  );
};

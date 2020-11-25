import { useLocation, Link } from "react-router-dom";

import { GiMaterialsScience } from "react-icons/gi";
import { CgPokemon } from "react-icons/cg";
import { AiOutlineHome, AiOutlineStar } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

import { Menu } from "antd";

export const Tabs = () => {
  const { SubMenu } = Menu;

  const location = useLocation();

  return (
    <Menu selectedKeys={location.pathname} mode="horizontal">
      <Menu.Item key="home" icon={<AiOutlineHome />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="rick-list" icon={<GiMaterialsScience />}>
        <Link to="/rick-list"> Rick and Morty</Link>
      </Menu.Item>
      <Menu.Item key="pokemon-list" icon={<CgPokemon />}>
        <Link to="/pokemon-list">Pokemon</Link>
      </Menu.Item>
      <SubMenu key="fav" icon={<AiOutlineStar />} title="Favorites">
        <Menu.Item key="rick-favorite-list">
          <Link to="/rick-favorite-list">Favorites Rick and Morty</Link>
        </Menu.Item>
        <Menu.Item key="pokemon-favorite-list">
          <Link to="/pokemon-favorite-list">Favorites Pokemon</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

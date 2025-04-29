import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/api-restaurant";
import MenuItem from "./menu-item";
import { MenuList } from "./types";

function Menu() {
  const menuList = useLoaderData() as MenuList;
  return (
    <ul>
      {menuList.map((menu) => (
        <MenuItem pizza={menu} key={menu.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

import { Link } from "react-router-dom";
import SearchOrder from "../features/order/search-order";

function Header() {
  return (
    <header>
      <Link to="/"> Fast React Pizza Co.</Link>
      <p>By Hasan</p>
      <SearchOrder />
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import SearchOrder from "../features/order/search-order";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest"> Fast React Pizza Co.</Link>
      <p>By Hasan</p>
      <SearchOrder />
    </header>
  );
}

export default Header;

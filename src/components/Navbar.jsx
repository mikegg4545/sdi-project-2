import { Link } from "react-router-dom";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

function Navbar() {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <nav>
      <h2>Crypto Tracker</h2>
      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/coins">Coins</Link>
        {" | "}
        <Link to="/watchlist">Watchlist</Link>
        <span>: {watchlist.length}</span>
      </div>
    </nav>
  );
}

export default Navbar;

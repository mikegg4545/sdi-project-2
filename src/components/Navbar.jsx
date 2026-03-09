import { Link } from "react-router-dom";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

function Navbar() {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Crypto Tracker</h2>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <Link to="/coins" className="hover:text-blue-400 transition">
            Coins
          </Link>

          <Link to="/watchlist" className="hover:text-blue-400 transition">
            Watchlist: {watchlist.length}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

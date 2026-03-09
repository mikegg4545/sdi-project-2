import { Link } from "react-router-dom";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import logo from "../assets/cryptotracker logo.png";

function Navbar() {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* <h2 className="text-xl font-bold">Crypto Tracker</h2> */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Crypto Tracker logo"
            className="w-auto h-12 transition-transform hover:scale-105"
          />
        </Link>

        <div className="flex gap-6 text-sm">
          <Link
            to="/"
            className="hover:text-blue-400 transition-transform hover:scale-105"
          >
            Home
          </Link>

          <Link
            to="/coins"
            className="hover:text-blue-400 transition-transform hover:scale-105"
          >
            Coins
          </Link>

          <Link
            to="/watchlist"
            className="hover:text-blue-400 transition-transform hover:scale-105"
          >
            Watchlist: {watchlist.length}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

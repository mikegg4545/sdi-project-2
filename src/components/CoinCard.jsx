import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import { Link } from "react-router-dom";

function CoinCard({ coin }) {
  const { watchlist, addCoin } = useContext(WatchlistContext);
  const exists = watchlist.some((c) => c.id === coin.id);

  return (
    <article className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-2">{coin.name}</h3>
      <p className="text-gray-400 mb-3">Price: ${coin.price_usd}</p>
      <div className="flex gap-4">
        <Link
          to={`/coins/${coin.id}`}
          className="text-blue-400 hover:underline"
        >
          Details
        </Link>
        {/* add coin to watchlist  */}
        <button
          onClick={() => addCoin(coin)}
          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
          disabled={exists}
        >
          {exists ? "Added" : "Add to Watchlist"}
        </button>
      </div>
    </article>
  );
}

export default CoinCard;

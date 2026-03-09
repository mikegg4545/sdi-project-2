import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import { Link } from "react-router-dom";

function CoinCard({ coin }) {
  const { watchlist, addCoin } = useContext(WatchlistContext);
  const exists = watchlist.some((c) => c.id === coin.id);

  return (
    <article className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={`https://c1.coinlore.com/img/25x25/${coin.nameid}.png`}
          alt={coin.name}
          className="w-8 h-8"
        />

        <h3 className="text-lg font-bold mb-2">{coin.name}</h3>
      </div>
      <p className="text-gray-400 mb-3">Price: ${coin.price_usd}</p>
      <p
        className={
          coin.percent_change_24h > 0 ? "text-green-400" : "text-red-400"
        }
      >
        24h: {coin.percent_change_24h}%
      </p>
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

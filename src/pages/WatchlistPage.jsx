import { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchlistContext } from "../context/WatchlistContext";

function WatchlistPage() {
  const { watchlist, removeCoin } = useContext(WatchlistContext);

  return (
    <section>
      <h1>Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>Watchlist Empty</p>
      ) : (
        // render coin on watchlist
        watchlist.map((coin) => (
          <article
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition"
            key={coin.id}
          >
            <h3 className="text-lg font-bold mb-2">{coin.name}</h3>
            <p className="text-gray-400 mb-3">Price: ${coin.price_usd}</p>
            <div className="flex gap-4">
              <Link
                className="text-blue-400 hover:underline"
                to={`/coins/${coin.id}`}
              >
                Details
              </Link>
              <button
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                onClick={() => removeCoin(coin.id)}
              >
                Remove
              </button>
            </div>
          </article>
        ))
      )}
    </section>
  );
}

export default WatchlistPage;

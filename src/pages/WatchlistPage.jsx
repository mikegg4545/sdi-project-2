import { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchlistContext } from "../context/WatchlistContext";

function WatchlistPage() {
  const { watchlist, removeCoin } = useContext(WatchlistContext);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Watchlist</h1>

      {watchlist.length === 0 ? (
        <p className="text-gray-400">Watchlist Empty</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {/* // render coin on watchlist */}
          {watchlist.map((coin) => (
            <article
              key={coin.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={`https://c1.coinlore.com/img/25x25/${coin.nameid}.png`}
                alt={coin.name}
                className="w-8 h-8"
              />
              <h3 className="text-lg font-bold mb-2">{coin.name}</h3>
              <p className="text-gray-400 mb-3">Price: ${coin.price_usd}</p>
              <p
                className={
                  coin.percent_change_24h > 0
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                24h: {coin.percent_change_24h}%
              </p>
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
          ))}
        </div>
      )}
    </section>
  );
}

export default WatchlistPage;

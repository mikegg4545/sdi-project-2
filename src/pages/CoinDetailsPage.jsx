import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

function CoinDetailsPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const { watchlist, addCoin } = useContext(WatchlistContext);
  const exists = watchlist.some((c) => c.id === coin.id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.coinlore.net/api/ticker/?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data[0]);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={`https://c1.coinlore.com/img/25x25/${coin.nameid}.png`}
        alt={coin.name}
        className="w-8 h-8"
      />
      <h1 className="text-lg font-bold mb-2">{coin.name}</h1>
      <p>Symbol: {coin.symbol}</p>
      <p>Rank: {coin.rank}</p>
      <p>Price: ${coin.price_usd}</p>
      <p>Market Cap: ${coin.market_cap_usd}</p>
      <p
        className={
          coin.percent_change_24h > 0 ? "text-green-400" : "text-red-400"
        }
      >
        24h: {coin.percent_change_24h}%
      </p>{" "}
      <button
        onClick={() => addCoin(coin)}
        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
        disabled={exists}
      >
        {exists ? "Added" : "Add to Watchlist"}
      </button>
    </section>
  );
}

export default CoinDetailsPage;

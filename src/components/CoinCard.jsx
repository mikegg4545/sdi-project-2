import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import { Link } from "react-router-dom";

function CoinCard({ coin }) {
  const { watchlist, addCoin } = useContext(WatchlistContext);
  const exists = watchlist.some((c) => c.id === coin.id);

  return (
    <article>
      <h3>{coin.name}</h3>
      <p>Price: ${coin.price_usd}</p>
      <Link to={`/coins/${coin.id}`}>Details</Link>
      <button onClick={() => addCoin(coin)} disabled={exists}>
        {exists ? "Added" : "Add to Watchlist"}
      </button>
    </article>
  );
}

export default CoinCard;

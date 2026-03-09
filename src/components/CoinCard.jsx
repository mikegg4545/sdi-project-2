import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import { Link } from "react-router-dom";

function CoinCard({ coin }) {
  const { addCoin } = useContext(WatchlistContext);
  return (
    <article>
      <h3>{coin.name}</h3>
      <p>Price: ${coin.price_usd}</p>
      <Link to={`/coins/${coin.id}`}>Details</Link>
      <button onClick={() => addCoin(coin)}>Add to Watchlist</button>
    </article>
  );
}

export default CoinCard;

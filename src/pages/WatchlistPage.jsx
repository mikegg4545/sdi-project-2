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
        watchlist.map((coin) => (
          <article key={coin.id}>
            <h3>{coin.name}</h3>
            <p>Price: ${coin.price_usd}</p>
            <Link to={`/coins/${coin.id}`}>Details</Link>
            <button onClick={() => removeCoin(coin.id)}>Remove</button>
          </article>
        ))
      )}
    </section>
  );
}

export default WatchlistPage;

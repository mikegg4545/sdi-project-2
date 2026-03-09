import { Link } from "react-router-dom";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

function HomePage() {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <section>
      <div>
        <h1>What this thing can do.</h1>
        <p>
          Browse cryptocurrency data, view coin details, search and sort top
          coins, and manage watchlist.
        </p>

        <div>
          <Link to="/coins">Browse Coins</Link>
          <Link to="/watchlist">View Watchlist</Link>
        </div>
      </div>

      <div>
        <article>
          <h2>Top Coins</h2>
          <p>Explore live cryptocurrency data.</p>
        </article>

        <article>
          <h2>Search and Sort</h2>
          <p>Filter coins by name and sort by rank, price, or name.</p>
        </article>

        <article>
          <h2>Watchlist</h2>
          <p>Save coins you want to keep an eye on.</p>
          <p>Current watchlist items: {watchlist.length}</p>
        </article>
      </div>
    </section>
  );
}

export default HomePage;

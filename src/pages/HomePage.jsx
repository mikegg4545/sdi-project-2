import { Link } from "react-router-dom";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

function HomePage() {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <section className="space-y-8">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow">
        <h1 className="text-4xl font-bold mb-4">What this thing can do.</h1>
        <p className="text-gray-300 mb-6">
          Browse cryptocurrency data, view coin details, search and sort top
          coins, and manage watchlist.
        </p>

        <div className="flex gap-4">
          <Link
            to="/coins"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium"
          >
            Browse Coins
          </Link>
          <Link
            to="/watchlist"
            className="border border-gray-600 hover:bg-gray-700 px-4 py-2 rounded font-medium"
          >
            View Watchlist
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <article className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Top Coins</h2>
          <p>Explore live cryptocurrency data.</p>
        </article>

        <article className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Search and Sort</h2>
          <p>Filter coins by name and sort by rank, price, or name.</p>
        </article>

        <article className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Watchlist</h2>
          <p>Save coins you want to keep an eye on.</p>
          <p className="text-blue-400 font-medium">
            Current watchlist items: {watchlist.length}
          </p>
        </article>
      </div>
      <section className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow">
        <h2 className="text-2xl font-bold mb-4">
          Why Crypto Matters Right Now
        </h2>

        <p className="mb-6">
          Cryptocurrency is becoming more relevant as people look for new ways
          to store value, move money globally, and participate in digital
          financial systems that operate beyond traditional banking hours and
          borders.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <article className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">24/7 Markets</h3>
            <p>
              Crypto markets never close, giving users continuous access to
              price movement and trading activity.
            </p>
          </article>

          <article className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Global Access</h3>
            <p>
              Digital assets can be accessed from almost anywhere, making crypto
              part of a broader shift toward borderless finance.
            </p>
          </article>

          <article className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">
              Fast-Moving Innovation
            </h3>
            <p>
              From payments to decentralized apps, crypto continues to influence
              how people think about ownership, finance, and digital technology.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default HomePage;

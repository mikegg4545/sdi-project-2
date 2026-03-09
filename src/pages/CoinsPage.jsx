import { useEffect, useState } from "react";
import CoinCard from "../components/CoinCard";

function CoinsPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("rank");

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.data);
      });
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  );

  let sortedCoins = [...filteredCoins];

  if (sort === "price") {
    sortedCoins.sort((a, b) => b.price_usd - a.price_usd);
  }

  if (sort === "name") {
    sortedCoins.sort((a, b) => b.name.localeCompare(b.name));
  }

  if (sort === "rank") {
    sortedCoins.sort((a, b) => b.rank - a.rank);
  }

  return (
    <section>
      <h1>Coins</h1>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="rank">Rank</option>
        <option value="price">Price</option>
        <option value="name">Name</option>
      </select>

      {/* <p>Coin list will appear here.</p> */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {sortedCoins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </section>
  );
}

export default CoinsPage;

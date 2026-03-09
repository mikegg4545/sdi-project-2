import { useEffect, useState } from "react";
import CoinCard from "../components/CoinCard";

function CoinsPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

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

  return (
    <section>
      <h1>Coins</h1>
      {/* <p>Coin list will appear here.</p> */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCoins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </section>
  );
}

export default CoinsPage;

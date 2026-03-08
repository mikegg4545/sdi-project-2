import { useEffect, useState } from "react";
import CoinCard from "../components/CoinCard";

function CoinsPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.data);
      });
  }, []);

  return (
    <section>
      <h1>Coins</h1>
      {/* <p>Coin list will appear here.</p> */}
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </section>
  );
}

export default CoinsPage;

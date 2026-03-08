import { useEffect, useState } from "react";

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
        <div key={coin.id}>
          <h3>{coin.name}</h3>
          <p>Price: ${coin.price_usd}</p>
        </div>
      ))}
    </section>
  );
}

export default CoinsPage;

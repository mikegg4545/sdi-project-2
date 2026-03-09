import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CoinDetailsPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
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
    <section>
      <h1>{coin.name}</h1>
      <p>Symbol: {coin.symbol}</p>
      <p>Rank: {coin.rank}</p>
      <p>Price: ${coin.price_usd}</p>
      <p>Market Cap: ${coin.market_cap_usd}</p>
      <p>24h Change: {coin.percent_change_24h}%</p>
    </section>
  );
}

export default CoinDetailsPage;

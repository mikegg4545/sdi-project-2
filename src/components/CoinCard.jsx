import { Link } from "react-router-dom";

function CoinCard({ coin }) {
  return (
    <article>
      <h3>{coin.name}</h3>
      <p>Price: ${coin.price_usd}</p>
      <Link to={`/coins/${coin.id}`}>Details</Link>
    </article>
  );
}

export default CoinCard;

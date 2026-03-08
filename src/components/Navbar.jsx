import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Crypto Tracker</h2>
      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/coins">Coins</Link>
      </div>
    </nav>
  );
}

export default Navbar;

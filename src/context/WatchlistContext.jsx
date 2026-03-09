import { createContext, useState } from "react";

export const WatchlistContext = createContext();

function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  function addCoin(coin) {
    setWatchlist([...watchlist, coin]);
  }

  function removeCoin(id) {
    setWatchlist(watchlist.filter((coin) => coin.id !== id));
  }

  return (
    <WatchlistContext.Provider value={{ watchlist, addCoin, removeCoin }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export default WatchlistProvider;

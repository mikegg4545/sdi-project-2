import { createContext, useState, useEffect } from "react";

// create watchlist context
export const WatchlistContext = createContext();

function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    // check local storage for existing watchlist
    const saved = localStorage.getItem("watchlist");
    // if so, convert to array, use as initial state
    return saved ? JSON.parse(saved) : [];
  });

  // if watchlist changes, update local storage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  function addCoin(coin) {
    // check if coin on list already
    const exists = watchlist.some((c) => c.id === coin.id);

    // prevent duplicates on watchlist
    if (!exists) {
      setWatchlist([...watchlist, coin]);
    }
  }

  function removeCoin(id) {
    setWatchlist(watchlist.filter((coin) => coin.id !== id));
  }

  // provide watchlist data to components
  return (
    <WatchlistContext.Provider value={{ watchlist, addCoin, removeCoin }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export default WatchlistProvider;

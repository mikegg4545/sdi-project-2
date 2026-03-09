import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CoinsPage from "./pages/CoinsPage";
import CoinDetailsPage from "./pages/CoinDetailsPage";
import WatchlistPage from "./pages/WatchlistPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coins" element={<CoinsPage />} />
            <Route path="/coins/:id" element={<CoinDetailsPage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;

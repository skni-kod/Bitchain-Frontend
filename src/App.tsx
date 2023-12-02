import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/DashBoard";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import DarkModeProvider from "./context/DarkModeContext";
import Assets from "./pages/Assets";
import QuickBuy from "./pages/QuickBuy";
import P2p from "./pages/P2p";
import Markets from "./pages/Markets";
import Spot from "./pages/Spot";
import Futures from "./pages/Futures";
import Convert from "./pages/Convert";
import Stacking from "./pages/Stacking";
import LeaderBoard from "./pages/LeaderBoard";
import About from "./pages/About";
import Account from "./pages/Account";
import History from "./pages/History";
import Settings from "./pages/Settings";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="homepage" />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="quickbuy" element={<QuickBuy />} />
            <Route path="p2p" element={<P2p />} />
            <Route path="markets" element={<Markets />} />
            <Route path="spot" element={<Spot />} />
            <Route path="futures" element={<Futures />} />
            <Route path="convert" element={<Convert />} />
            <Route path="stack" element={<Stacking />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="about" element={<About />} />
            <Route path="account" element={<Account />} />
            <Route path="history" element={<History />} />
            <Route path="assets" element={<Assets />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;

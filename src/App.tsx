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
import Login from "./pages/Login";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Details from "./pages/Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="homepage" />} />
              <Route path="homepage" element={<HomePage />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="quickbuy" element={<QuickBuy />} />
              <Route path="details" element={<Details />} />
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
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Register />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              zIndex: 1000,
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
            className:
              "bg-bgWhite dark:bg-bgDark1Hover text-bgDark dark:text-bgWhite",
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Members from "./pages/members";
import Finance from "./pages/finance";
import Events from "./pages/events";
import History from "./pages/history";
import Settings from "./pages/settings";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path="members" element={<Members />} />
        <Route path="finance" element={<Finance />} />
        <Route path="events" element={<Events />} />
        <Route path="history" element={<History />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

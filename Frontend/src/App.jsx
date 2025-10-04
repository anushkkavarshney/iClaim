import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FileClaim from "./pages/FileClaim";
import ClaimTracker from "./pages/ClaimTracker";
import CustomerDashboard from "./pages/CustomerDashboard";
import AgentDashboard from "./pages/AgentDashboard";
import ClaimDetail from "./pages/ClaimDetail";
import Analytics from "./pages/Analytics";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/file-claim" element={<FileClaim />} />
        <Route path="/claim-tracker" element={<ClaimTracker />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/agent-dashboard" element={<AgentDashboard />} />
        <Route path="/claim/:id" element={<ClaimDetail />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

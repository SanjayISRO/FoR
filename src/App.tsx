import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { AppProvider } from "./context/AppContext";
import Header from "./components/Layouts/Header/Header";
import Sidebar from "./components/Layouts/Sidebar/Sidebar";
import SimulationSetup from "./pages/SimulationSetup/SimulationSetup";
import SimulationAnalytics from "./pages/SimulationAnalytics/SimulationAnalytics";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <div className="body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<SimulationSetup />} />
            <Route path="/simulation-analytics" element={<SimulationAnalytics />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;

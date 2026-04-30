import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import Dashboard from "./pages/Dashboard";
import Preferences from "./pages/Preferences";
import Unsubscribe from "./pages/Unsubscribe";
import Navbar from "./components/Navbar";


function App() {
  return (
   
    <Router>
       <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/unsubscribe/:token" element={<Unsubscribe />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
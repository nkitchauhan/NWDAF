import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from './components/login/LoginScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<DashboardScreen />} />
        <Route exact path="/" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

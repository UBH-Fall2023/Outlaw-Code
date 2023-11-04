
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter basename={process.env.REACT_APP_BASE_URL}></BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;

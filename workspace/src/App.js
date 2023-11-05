import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Files from './pages/Files';

function App() {

  
  const [backenData, setBackendData] = useState([{}])

  useEffect(()=> {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div className='App'>
      <div className='outlaw-network'>Outlaw Network</div> 
      <Router>
        
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/files" element={<Files/>}/>
            
          </Routes>
        
      </Router>
    </div>
   
   
  );
}

export default App;

import './Dashboard.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Dashboard() {
  return (
    
    <div className="colored-background">
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/cowboys" />
      </head>
      <body>
        <h1 className="main-title">Outlaw Network</h1>
        {/* Button container with space between buttons */}
        <div className="button-container">
          <Link to="/register">
            <button className="buttons" type="submit">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="buttons" type="submit">
              Login
            </button>
          </Link>
        </div>
      </body>
    </div>
    
  );
}

export default Dashboard;

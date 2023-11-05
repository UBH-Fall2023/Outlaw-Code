import './Dashboard.css'; 
import "react-router-dom";
import Register from './Register';
import Login from './Login';

function Dashboard() { 

        
    return ( 
    <div className="colored-background">
    <head> <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/cowboys" /> 
    </head> 
    <body> 
    <h1 className="main-title">Outlaw Network</h1> 
    {/* Button container with space between buttons */} 
    <div className="button-container"> 
    <button className="buttons" type="submit" onClick={Register}>Register</button> 
    <button className="buttons" type="submit" onClick={Login}>Login</button> 
    </div> 
    </body> 
    </div> 
    ); 
} 

export default Dashboard;

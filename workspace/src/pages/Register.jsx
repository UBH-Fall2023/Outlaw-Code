import React, {useState} from 'react';
import './Register.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  function validatePassword(username,password,){

    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const usernamePattern = /^[a-zA-Z0-9]+$/
    
    //Minimum eight characters, at least one letter and one number
    //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript


    if ( username.length == 0 ){
      alert ("Username field is empty");
        //some feedback on empty fields
        return false
    }

    if (password.length == 0){
        
        alert("Password field is empty");
        //some feedback on empty fields
        return false
    }

    console.log(pattern.test(password))

    if (pattern.test(password) == false){
        alert("Password must contain 8+ characters, including at least one letter and number.")
        //some feedback on weak pass
        return false
    }

    if (usernamePattern.test(username) == false){
        
        alert("Username is invalid");
        return false
        //some feedback on weak pass
    }

    else if((usernamePattern.test(username)==true) && (pattern.test(password)==true)){
      return true
      alert("User registered!");
      navigate("/files");
    }
}

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted with data:', formData);
    let form = new FormData(document.querySelector("form"))
    
    console.log(form.get("username"), form.get("password"))
    
        
    const username = form.get("username")
    const password = form.get("password")

    //const feedback = validatePassword (username, password)
    

   };
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 //need to add password regex
  return (
    
    <div className="Reg">
      <header className="Reg-header">
      <link
        rel="stylesheet"
        href="https://fonts.cdnfonts.com/css/cowboys"
      />
        
      </header>
      <body>
      <button className="Header-title">Outlaw Network</button>
          <div className="Reg-rectangle">
            <form onSubmit={handleSubmit}>
            <div className="enterforms">
              <label htmlFor="username" className='username'>Username:</label>
                <input className='input-box'
                type="username"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                /> 
              <label htmlFor="password" className='password'>Password:</label>
                <input className='input-box'
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                /> 
            </div>
            </form>
          </div>
          <button onClick={handleSubmit} className="Reg-button"> Register </button>
      </body>
    </div>
    
  );
}

export default Register;
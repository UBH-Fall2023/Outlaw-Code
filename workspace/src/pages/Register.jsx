import React, {useState} from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Star from "../assets/sheriff.png";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
function Register() {

  const navigate = useNavigate();

  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted with data:', formData);
    let form = new FormData(document.querySelector("form"))
    
    console.log(form.get("username"), form.get("password"))
    
        
    const username = form.get("username")
    const password = form.get("password")

    //regex for pass and user
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const usernamePattern = /^[a-zA-Z0-9]+$/
    
    //Minimum eight characters, at least one letter and one number
    //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript


    if ( username.length == 0 ){
      alert ("Username field is empty");
        //some feedback on empty fields
        
    }

    if (password.length == 0){
        alert("Password field is empty");
        console.log(pattern.test(password))
        //some feedback on empty fields
        
    }

    

    if (pattern.test(password) == false){
        alert("Password must contain 8+ characters, including at least one letter and number.")
        //some feedback on weak pass
        
    }

    if (usernamePattern.test(username) == false){
  
        alert("Username is invalid");
        
        //some feedback on weak pass
    }

    else if((usernamePattern.test(username)==true) && (pattern.test(password)==true)){
      alert("User registered!");
      navigate("/files");
    }



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
        <link href="https://fonts.cdnfonts.com/css/carnivalee-freakshow" rel="stylesheet"/>
      </header>
      <body>
        <Link to="/">
        <button className="Header-title">File Frontier</button>
        </Link>
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
      
      <div className="myform-container"> 
          <img src={Star} alt="Star"className='star' />
          </div>
    </div>
    
  );
}

export default Register;
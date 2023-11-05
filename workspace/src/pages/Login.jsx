import React, {useState} from 'react';
import "../App.css";
import './Register.css';
import Star from "../assets/sheriff.png";

// A functional component for the dashboard page
function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch('ends/login', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        //   })
        //   .then(response => {
        //     if (response.ok) {
        //       return response.json();
        //     }
        //     alert('Login failed'); // You can customize this error message
        //   })
        //   .then(data => {
        //     console.log('Login successful:', data);
                //alert("Login successful")
        //     // You can handle the successful login here, e.g., redirect the user.
        //   })
        //   .catch(error => {
        //     console.error('Login error:', error);
        //     // You can handle the login error, e.g., display an error message.
        //   });
        // You can implement your login logic here, e.g., send a request to an authentication server.
        console.log('Login form submitted with data:', formData);
      };

    const [formData, setFormData] = useState({ username: '', password: '' });
   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        };


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
          <button className="Reg-button"> Login </button>
      </body>
    </div>

      

       



      
        
    
  );
}

export default Login;

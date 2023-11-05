import React, {useState} from 'react';
import "../App.css";
import Star from "../assets/sheriff.png";

// A functional component for the dashboard page
function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch('/api/login', {
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
        //     throw new Error('Login failed'); // You can customize this error message
        //   })
        //   .then(data => {
        //     console.log('Login successful:', data);
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
    <div >

        
        <form onSubmit={handleSubmit} className="form">
           
            <label htmlFor="username" className='username'>Username:</label>
            <input className='input-box'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required/>

            <br></br>
            
            <label htmlFor="password" className='password'>Password:</label>
            <input className='input-box'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            />

            <br></br><br></br>

            <button type="submit" className='login-btn'>Login</button>
        </form>
      
        <img
            alt="sheriff badge"
            width={"250px"}
            src={Star}/>
    </div>
  );
}

export default Login;

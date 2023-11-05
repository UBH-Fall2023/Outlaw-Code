import React, {useState} from 'react';
import './Register.css';


function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();
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
          </div>
          <button className="Reg-button"> Register </button>
      </body>
    </div>
  );
}

export default Register;

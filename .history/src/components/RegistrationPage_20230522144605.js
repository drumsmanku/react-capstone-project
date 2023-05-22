import React from 'react';
import '../Assets/back1.png';
import './RegistrationPage.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function RegistrationPage() {
  const mystorage=localStorage.getItem('RegistrationFormData')||0;
  const [formData, setFormData] = useState({
    Name:'',
    UserName:'',
    Email:'',
    Number:'',
  });
  const navigate = useNavigate();
  const setTheData=(event)=>{
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });
  }
  const handleChange=(event) => {
    event.preventDefault();
    localStorage.setItem('RegistrationFormData', JSON.stringify(formData));
    console.log('done');
    console.log( JSON.parse(localStorage.getItem('registrationData')));
    navigate('/success');
    
  }

  const [ischecked, setChecked]=useState(false);
  const setCheckedValue=(event)=>{
    setChecked(event.target.checked);
  }
  const buttonStyle = {
    backgroundColor: ischecked ? '#72DB73' : '#999999', 
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className="reg-page">
      <div className="first-div">
        <div className="first-first-div">
          <h1>Discover new things on Superapp</h1>
        </div>
      </div>
      <div className="second-div">
        <h1>Super App</h1>
        <h4>Create your New Account</h4>
        <form action="" onSubmit={handleChange}>
          <input type="text" placeholder='Name' name='Name' value={formData.Name} required onChange={setTheData} />
          <input type="text" placeholder='UserName' name='UserName' value={formData.UserName} required onChange={setTheData} />
          <input type="email" name="Email" id="mail" placeholder='Email' value={formData.Email} required onChange={setTheData}/>
          <input type="number" name="Number" id="number" placeholder='Mobile' value={formData.Number} required onChange={setTheData}/>
          <div className="checkbox1">
            <input type="checkbox" name="check" id="check" onChange={setCheckedValue} required /><label htmlFor="check">Share my registration data with Superapp</label>
          </div>
          <button type="submit" disabled={!ischecked} style={buttonStyle}>Sign Up</button>
          <div style={{width:'23rem', color:'#7C7C7C', fontFamily:'DM Sans', fontSize:'0.8rem', paddingLeft:'0.5rem'}}>
            <p>By clicking on Sign up. you agree to Superapp <a href="/" style={{textDecoration:'none', color:'#72DB73'}}>Terms and Conditions of Use</a></p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <a href="/" style={{textDecoration:'none', color:'#72DB73'}}>Privacy Policy</a></p>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage
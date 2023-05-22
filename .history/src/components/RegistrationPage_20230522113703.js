import React from 'react';
import '../Assets/back1.png';
import './RegistrationPage.css';

function RegistrationPage() {
  const style={
    backgroundColor: '#FFFFFF',

  }
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
        <form action="">
          <input type="text" placeholder='Name' required />
          <input type="text" placeholder='UserName' required />
          <input type="email" name="mail" id="mail" placeholder='Email' required/>
          <input type="number" name="number" id="number" placeholder='Mobile' required/>
          <div className="checkbox1">
            <input type="checkbox" name="check" id="check" /><label htmlFor="check">Share my registration data with Superapp</label>
          </div>
          <button type="submit">Sign Up</button>
          <div style={{width:'23rem', color:'#7C7C7C', fontFamily:'DM Sans', fontSize:'0.8rem', paddingLeft:'0.5rem'}}>
            <p>By clicking on Sign up. you agree to Superapp Terms and Conditions of Use</p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp Privacy Policy</p>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage
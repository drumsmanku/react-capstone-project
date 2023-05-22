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
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage
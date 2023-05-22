import React from 'react';
import '../Assets/back1.png';
import './RegistrationPage.css';

function RegistrationPage() {
  return (
    <div className="reg-page">
      <div className="first-div">
        <div className="first-first-div">
          <h1>Discover new things on Superapp</h1>
        </div>
      </div>
      <div className="second-div">
        <h1>Super App</h1>
        <h2>Create your Account</h2>
        <form action="">
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='UserName' />
          <input type="email" name="mail" id="mail" />
          <input type="number" name="number" id="number" />
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage
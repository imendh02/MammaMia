import React, { useState } from 'react';
import './SigninSignup.css';
import Sign from './Sign';

function SigninSignup() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <div className={'container ' + (isActive ? 'sign-up-mode' : '')}>
        <nav id='Navbar'>
          <div className='nav-logo'>
            <img src='/Images/Logo.svg' alt='' />
          </div>
        </nav>
        <Sign />
        <div className='panels-container'>
          <div className='panel left-panel'>
            <div className='content-sign'>
              <h2>New here ?</h2>
              <p>Create your account. For free!</p>
              <button
                className='button-sign'
                id='sign-up-btn'
                onClick={handleClick}
              >
                Sign up
              </button>
            </div>
            <img src='img/log.svg' className='image' alt='' />
          </div>
          <div className='panel right-panel'>
            <div className='content-sign'>
              <h2>One of us ?</h2>
              <p>
                To keep Connected with us please login with your personal info.
              </p>
              <button
                className='button-sign'
                id='sign-in-btn'
                onClick={handleClick}
              >
                Sign in
              </button>
            </div>
            <img src='img/register.svg' className='image' alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default SigninSignup;

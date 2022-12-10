import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

function Sign() {
  const [logInputs, setLogInputs] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const [regInputs, setRegInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { login } = useContext(AuthContext);

  const handleLogChange = (e) => {
    setLogInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChanges = (e) => {
    setRegInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [error, setError] = useState(null);
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:8800/SigninSignup/register',
        regInputs
      );
      navigate('/');
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleLogSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(logInputs);
      navigate('/');
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className='forms-container'>
      <div className='signin-signup'>
        {/* Sign In */}
        <form className='sign-in-form'>
          <h2 className='title'>Sign in</h2>
          <div className='input-field'>
            <FaUserAlt className='icon' />
            <input
              type='text'
              placeholder='Username'
              name='username'
              onChange={handleLogChange}
            />
          </div>
          <div className='input-field'>
            <FaLock className='icon' />
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleLogChange}
            />
          </div>
          {err && <p>{err}</p>}
          <input
            type='submit'
            value='Login'
            className='sign'
            onClick={handleLogSubmit}
          />
          <Link className='lost'>Lost your password?</Link>
          <p className='social-text'>Or Sign in with social platforms</p>
          <div className='social-media'>
            <Link className='social-icon'>
              <FaFacebookF />
            </Link>
            <Link className='social-icon'>
              <FaTwitter />
            </Link>
            <Link className='social-icon'>
              <FaGoogle />
            </Link>
            <Link className='social-icon'>
              <FaLinkedinIn />
            </Link>
          </div>
        </form>

        {/* Sign Up */}
        <form action='#' class='sign-up-form'>
          <h2 class='title'>Sign up</h2>
          <div class='input-field'>
            <FaUserAlt className='icon' />
            <input
              type='text'
              placeholder='Username'
              name='usernameR'
              onChange={handleChanges}
            />
          </div>
          <div class='input-field'>
            <MdEmail className='icon' />
            <input
              type='email'
              placeholder='Email'
              name='emailR'
              onChange={handleChanges}
            />
          </div>
          <div class='input-field'>
            <FaLock className='icon' />
            <input
              type='password'
              placeholder='Password'
              name='passwordR'
              onChange={handleChanges}
            />
          </div>
          <input
            type='submit'
            className='sign'
            value='Sign up'
            onClick={handleSubmit}
          />
          {error && <p>{error}</p>}
          <p class='social-text'>Or Sign up with social platforms</p>
          <div class='social-media'>
            <Link className='social-icon'>
              <FaFacebookF />
            </Link>
            <Link className='social-icon'>
              <FaTwitter />
            </Link>
            <Link className='social-icon'>
              <FaGoogle />
            </Link>
            <Link className='social-icon'>
              <FaLinkedinIn />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;

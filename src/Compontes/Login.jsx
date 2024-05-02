import React from 'react';
import login from '../Assets/login.png'
import user from '../Assets/user.png'
import footer from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Login = () => {
  return (
    <>
      <div className='zip-file'>
        <div className='two-in-one'>
          <img id='explain' src={login} alt="" />

          <div className='one-or-two'>
            <img id='user-icon' src={user} alt="" />
            <h3 id='cd'>Login</h3>
            <input id='ef' type="text" placeholder='Email' /> <br /> <br />
            <input id='ef' type="text" placeholder='Password' /> <br /> <br />
            <button id='gh'>Login</button>
            <h4 id='ij'>Dont' have an <br /> account? <span id='kl'>Register</span></h4>
          </div>
        </div>

        <div>
          <Footer/>
        </div>

        <footer>
          <hr />
          <p id='own'>Copyright 2024,Design and develop by <span id='my-name'>Mr.Praveen Kumar</span>,All rights reserved.</p>
        </footer>




      </div>
    </>

  );
}

export default Login;



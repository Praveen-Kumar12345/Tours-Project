import React from 'react';
import login from '../Assets/login.png'
import register from '../Assets/register.png'
import user from '../Assets/user.png'
import footer from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Register = () => {
  return (
    <>
      <div className='zip-file'>
        <div className='two-in-one' id='extra'>
          <img id='on' src={register} alt="" />

          <div className='one-or-two'>
            <img id='user-icon' src={user} alt="" />
            <h3 id='cd'>Register</h3>
            <input id='ef' type="text" placeholder='User Name' /> <br /> <br />
            <input id='ef' type="text" placeholder='Email' /> <br /> <br />
            <input id='ef' type="text" placeholder='Password' /> <br /> <br />
            <button id='ait'>Create Account</button>
            <h4 id='ij'>Already have an <br /> account? <span id='kl'>Login</span></h4>
          </div>
        </div>
        <div>
          <Footer />
        </div>

        <footer>
          <hr />
          <p id='own'>Copyright 2024,Design and develop by <span id='my-name'>Mr.Praveen Kumar</span>,All rights reserved.</p>
        </footer>




      </div>
    </>

  );
}

export default Register;



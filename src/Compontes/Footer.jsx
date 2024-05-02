import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/stayle.css";
import logof from '../Assets/logo.png';


const Footer = () => {
  return (
    <div>
      <div>
      <div className="footer">
        <div className="f-img d-flex mt-3 p-4 ">
          <div className="img1">
            <img id='achivers-it' src={logof} alt="" />
            <p>Lorem ipsum dolor, sit amet <br></br> consectetur adipisicing elit. <br /> ipusum,natus!</p>

            <div className="icons ">
              <Link className="link-without p-2" to='/' ><i class="fa-solid fa-user"></i></Link>
              <Link className="link-without p-2" to='/' ><i class="fa-brands fa-github"></i></Link>
              <Link className="link-without p-2" to='/' ><i class="fa-brands fa-instagram"></i></Link>
              <Link className="link-without p-2" to='/' ><i class="fa-brands fa-linkedin"></i></Link>
            </div>
          </div>
          <div className="discover">
            <h5>Discover</h5>
            <ul>
              <li> <Link to='/' className="link-without-decoration" >Home</Link></li>
              <li><Link to='/Home' className="link-without-decoration">About</Link></li>
              <li> <Link to='/Tour' className="link-without-decoration">Tours</Link></li>
            </ul>

          </div>
          <div className="quicklink">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to='/' className="link-without-decoration">Gallery</Link></li>
              <li> <Link to='/Register' className="link-without-decoration">Register</Link></li>
              <li>  <Link to='/Login' className="link-without-decoration">Login</Link></li>
            </ul>
          </div>
          <div className="contact ">
            <h5>Contant</h5>

            <p><i class="fa-solid fa-location-dot"></i> <b>Address :</b> Bangalore ,Karanataka  </p>
            <p><i class="fa-regular fa-envelope"></i> <b>Email :</b>PraveenKumar144336@Gmail.Com</p>
            <p><i class="fa-solid fa-phone"></i>  <b>Phone :</b> +91 6303218962</p>

          </div>

        </div>
      </div>
    </div>

      
    </div>
  );
}

export default Footer;

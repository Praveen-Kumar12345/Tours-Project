import React from 'react';
import banner from '../Assets/tour.jpg'
import tour from '../Assets/male-tourist.png'
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';


const Tour = () => {
  return (
    <>
      <div>
        <div>
          <img id='all' src={banner} alt="" />
          <h2 id='to'>All Tours</h2>
          <div className='ten'>
            <div className='Icon_search'>
              <h5 id='Loc-1'> <i id='icon-1' class="fa-solid fa-location-dot"></i>Location </h5>
              <input id='par-1' type="text" placeholder='Where are you going?' />
            </div>
            <div className='Icon_search'>
              <h5 id='Loc-1'> <i id='icon-1' class="fa-regular fa-compass"></i> Distance  </h5>
              <input id='par-1' type="text" placeholder='Where are you going?' />
            </div>
            <div className='Icon_search'>
              <h5 id='Loc-1'> <i id='icon-1' class="fa-solid fa-users"></i>Max People </h5>
              <input id='par-1' type="number" value="0" placeholder='Where are you going?' />

            </div>
            <div className='it'>
              <span className='types'><i class="fa-solid fa-magnifying-glass"></i></span>

            </div>
          </div>
          <div>
            <div className='blue'>
              <div className='now'>
                <h3 >Subscribe now for usefull travelling information. <br /></h3>
                <input type="text" placeholder="Enter your email" id='toy' /> <br />
                <button id='welcome'>Subscribe</button>
                <p>Lorem ipsum dolor, sit amet consectetur  <br />Ouia odio iure quasi Deserent,similique in!</p>


              </div>
              <div>
                <img id='tourist' src={tour} alt="" />
              </div>
            </div>
          </div>





    <div>
      <div className="footer">
        <div className="f-img d-flex mt-3 p-4 ">
          <div className="img1">
            <img id='achivers-it'src={logo} alt="" />
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
              <li> <Link to='/Tours' className="link-without-decoration">Tours</Link></li>
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
            <p><i class="fa-regular fa-envelope"></i> <b>Email :</b>  PraveenKumar@Gmail.Com</p>
            <p><i class="fa-solid fa-phone"></i>  <b>Phone :</b> +91 6303218962</p>

          </div>

        </div>
      </div>
    </div>
        </div>
        <footer>
          <hr />
          <p id='own'>Copyright 2024,Design and develop by <span id='my-name'>Mr.Praveen Kumar</span>,All rights reserved.</p>
        </footer>

      </div>


    </>
  );
}

export default Tour;

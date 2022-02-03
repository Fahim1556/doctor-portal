import React from 'react';
import Logo from '../img/Logo.png';

const Navbar = () => {
  return(

      <nav className='navbar'>
          <div className='navbar-text'>

              <div className='logo'><img src={Logo}alt="" />
              
              </div>
              <ul>
                  <li>
                      <a href="#">Doctor</a>
                    </li>
                  <li>
                      <a href="#">Service</a>
                 </li>
                  <li>
                      <a href="#">Pharmacy Owner</a>
                 </li>
                  <li>
                      <a href="#">About Us</a>
                  </li>
                  <li>
                      <a href="#">Blog</a>
                  </li>
                  <li>
                      <a href="#">Contact</a>
                  </li>
                  <li>
                      <a href="#">FAQ</a>
                    </li>
                  <div className='nav-btn'>
                  <button className='btn'>Login</button>
                  </div>
              </ul>



          </div>

      </nav>
  )
   
};

export default Navbar;

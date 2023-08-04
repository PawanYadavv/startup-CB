import React from 'react';
import './Navbar.css'; 
import Companies from "./Companies";
import Details from "./Details";
import Footer from './Footer';

const Navbar = () => {
  return (
    <div className="image-container">
    <nav className="navbar">
      <div className="navbar-container">
         <span className="heading-nav">
         CareerBloomers
            </span>
        <ul className="nav-menu">
          <li className="nav-item">
          Login
          </li>
          <li className="nav-item">
          FindJobs
          </li>
        </ul>
      </div>
    </nav>


    <div id='itemss' className='Item-homes'>
      <div className='images-grid'>
<img src="https://media.licdn.com/dms/image/C4D08AQFGcQktCKrvIQ/croft-frontend-shrinkToFit1024/0/1618353900687?e=2147483647&v=beta&t=RAQEQmGexqiV1EuYFuk_MEUeMcsq86Gjjt7aH5YzW64" alt="not-found" className='img-clas'/>

<div className="items-square">
  {/* <h1>Bloom with CareerBloomers</h1> */}
  <p>At CareerBloomers, we believe that every student deserves the right opportunity to shine and reach their full potential. We are a dedicated platform designed to empower students, fresh graduates, and young professionals on their journey towards a successful career.
 </p>
</div>
      </div>
  </div>

  {/* <br /> */}
  {/* <hr className='hr-tag' /> */}
          <div className="sign-in-section">
        <h1>Get Your dream job now with CareerBloomers</h1>
        <div className="sign-in-buttons">
          <a href="https://www.linkedin.com" className="linkedin-button">
               <i className="fa fa-linkedin" id='linkedin-id'></i>
            Sign in with LinkedIn
          </a>
      
          <a id="google-signup-link" href="/login/google-oauth2/?next=/" className="btn btn-lg btn-wide btn-social google-button">
                            <img className="google-signin" src="https://static.instahyre.com/images/icons/google-signin.webp" alt='errro' />Sign in with Google
                        </a>
<a href="https://mail.google.com">
          <p className="or-signup">or signup using email</p>
</a>
        </div>
        <div className="columns-heading">
            <p className='para'>Curated list of top companies</p>
            <p className='para'>Complete privacy and no spam</p>
        </div>
      </div>

      <Companies />
      <br />
      <Details />
      <br />
      <Footer />
    </div>

  );
};

export default Navbar;
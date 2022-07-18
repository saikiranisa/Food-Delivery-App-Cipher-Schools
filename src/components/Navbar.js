import React from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom';
import OfferModal from './OfferModal';

function Navbar() {

    return (
      <>
        <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center">
            <nav className="navbar-dark d-inline-flex align-items-center flex-grow-1">

    <Link to="/" className="navbar-brand">
      <img id="nav-logo" src="data:image/png;base64,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" alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
      <span className="nav-title">Food</span><span className="nav-title-to">ie</span>
    </Link>
    
    </nav>
    <div className="d-inline-flex m-2 logincategory">
      <Link to="" className="aboutHotel btn-lg text-white hoverMe" data-bs-toggle="offcanvas" data-bs-target="#about-hotel" data-bs-keyboard="true" role="button">About us</Link>
      <div className="">
      <Link to="/login"><button type="button" className="btn btn-outline-light btn-lg text-white loginbtn me-2">Login</button></Link></div>
      <div className="">
      <Link to="/register"><button type="button" className="btn btn-light btn-lg me-2">Sign up</button></Link>
        </div>
        </div>
    
        </div>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="about-hotel">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="about-hotel">who are we?</h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body px-3">
          <hr/>
          <div>
          Our technology platform connects customers, restaurant partners and 
          delivery partners, serving their multiple needs. Customers use our platform to search and 
          discover their favourite food items by sitting in their home or office etc,Customers no need to go to restaurant to eat their favorite food, All they need is to order their desired food and give us a feedback how they enjoyed it by reviews and ratings. 
          </div>
         <hr/>
         <div className="d-flex flex-wrap">
         <Link to="/menu"><button type="button" className="btn btn-outline-success rounded-pill btn-sm m-2 mx-1">Menu</button></Link>
         <Link to="/"><button type="button" className="btn btn-outline-warning rounded-pill btn-sm m-2 mx-1">Hours & Location</button></Link>
         <Link to="/login"><button type="button" className="btn btn-outline-danger rounded-pill btn-sm m-2 mx-1">Login</button></Link>
         <Link to="/register"><button type="button" className="btn btn-outline-dark rounded-pill btn-sm m-2 mx-1">Signup</button></Link>
         <Link to="#"><button type="button" className="btn btn-outline-dark btn-sm rounded-pill disabled m-2 mx-1">Admin</button></Link>
         <Link to="#"><button type="button" className="btn btn-outline-primary btn-sm rounded-pill m-2 mx-1" data-bs-toggle="offcanvas" data-bs-keyboard="true" data-bs-target="#offerModal">Offers</button></Link>
         </div>
        </div>
      </div>
      <OfferModal/>
      </>
    )
}

export default React.memo(Navbar)

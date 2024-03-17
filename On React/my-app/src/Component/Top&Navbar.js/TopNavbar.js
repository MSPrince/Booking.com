import React from 'react';
import './TopNavbar.css'; // Make sure this path is correct

function TopNavbar() {
  return (
    <>
      {/* topbar */}
      <div className="superNav border-bottom py-2 bg-primary">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <select className="me-3 border-0 p-1 language">
                <option value="en-us" className="mb-2">ENGLISH (UK)</option>
                <option value="en-us" className="mb-2">हिन्दी</option>
                <option value="Français" className="mb-2">Français</option>
                <option value="简体中文" className="mb-2">简体中文</option>
                <option value="Deutsch" className="mb-2">Deutsch</option>
              </select>

              <select className="me-3 border-0 p-1 currency">
                <option value="INR">Indian Rupee (INR)</option>
                <option value="EUr">Euro (EUR)</option>
                <option value="AED">Emirates Dirham (AED)</option>
                <option value="GBP">Pound Sterling (GBP)</option>
                <option value="AUD">Australian Dollar (AUD)</option>
              </select>
              <span className="me-3"><i className="fa-solid fa-phone me-1 topbar"></i>
                <strong><a href="tel:+91-789-717-3138" className="mobNo"> +91-789-717-3138 </a>
                </strong></span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block d-sm-block d-xs-none text-end">
              <span className="me-3"><i className="fa-solid fa-truck topbar me-1"></i><a className="text-white shipping"
                href="#">Shipping</a></span>
              <span className="me-3"><i className="fa-solid fa-file topbar me-2"></i><a className="text-white shipping"
                href="#">Policy</a></span>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand css-text-mask" href="#" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/abstract-bokeh-background_996449-1641.jpg?w=900')", backgroundPosition: "0px 0px" }}>Booking.com</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active"> <a className="nav-link me-3" href="#"><i className="fa-solid fa-bed me-2"
                style={{ color: '#FFD43B' }}></i> Stays </a> </li>
              <li className="nav-item"><a className="nav-link me-3" href="#"> <i className="fa-solid fa-plane me-2"
                style={{ color: '#FFD43B' }}></i> Flights </a></li>
              <li className="nav-item"><a className="nav-link me-3" href="#"><i className="fa-solid fa-hotel me-2"
                style={{ color: '#FFD43B' }}></i> Flights + Hotel </a></li>
              <li className="nav-item"><a className="nav-link me-3" href="#"><i className="fa-solid fa-car me-2"
                style={{ color: '#FFD43B' }}></i> Car Rentals</a></li>
              <li className="nav-item"><a className="nav-link me-3" href="#"><i className="fa-solid fa-magnet me-2"
                style={{ color: '#FFD43B' }}></i> Attractions </a></li>
              <li className="nav-item"><a className="nav-link me-3" href="#"><i className="fa-solid fa-taxi me-2"
                style={{ color: '#FFD43B' }}></i> Airport Taxis </a></li>
            </ul>
            <ul className="navbar-nav lo">
              <li className="nav-item"><a href="#" className="nav-link login1">Login</a></li>
            </ul>
          </div> {/* navbar-collapse.// */}
        </div> {/* container-fluid.// */}
      </nav>
    </>
  )
}

export default TopNavbar;

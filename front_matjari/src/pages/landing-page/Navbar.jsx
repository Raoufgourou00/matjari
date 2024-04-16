import './Navbar.css'
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 0) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      

      
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);




    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-light bg-white fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
          <div className="container-lg px-0">
          
            <a className="navbar-brand fs-2 fw-bolder mb-lg-2" id='brand-name' href="#">Matjari</a>
            <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">متجري</h5>
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div className="offcanvas-body">
              <ul className="navbar-nav align-items-center justify-content-start flex-grow-1 pe-0">
                <li className="nav-item nav-mob-item me-lg-4 rounded">
                  <Link className="nav-link" to="/features">المميزات</Link>
                </li>
                <li className="nav-item nav-mob-item me-lg-4 rounded">
                  <Link className="nav-link" href="#">الأسعار</Link>
                </li>
                <li className="nav-item nav-mob-item me-lg-4 rounded">
                  <Link className="nav-link" href="#">تواصل معنا</Link>
                </li>
              </ul>

              <div className='d-flex flex-column flex-lg-row gap-3 nav-mob-btn'>
              <button className="btn nav-btn" id='create-account-btn'>إنشاء حساب</button>
              <button className="btn nav-btn border border-1 text-muted" id='register-btn'>تسجيل الدخول</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
      </>
        
    );
}

export default Navbar;



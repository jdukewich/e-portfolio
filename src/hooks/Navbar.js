import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';
import '../style.css';
import Home from './Home';
import About from './About';

function Navbar(props) {  
  return (      
    <header>          
      <div id="slide-out" className="side-nav fixed">
        <ul className="custom-scrollbar">              
          <li>
            <div className="logo-wrapper waves-light">                       
              <img src="https://www.psu.edu/profiles/psu_profile/themes/psu_main/logonew.png" alt="Penn State University" className="img-fluid flex-center" />          
            </div>
          </li>
          <li>
            <ul className="social">                                                                    
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/john-dukewich" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" style={{ fontSize: '2rem' }}></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/jdukewich" rel="noopener noreferrer">
                  <i className="fab fa-github-square" style={{ fontSize: '2rem' }}></i>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="collapsible collapsible-accordion">
              <li><div className="collapsible-header waves-effect arrow-r nav-div"><i className="fas fa-chevron-right"></i>Pages<i
                    className="fas fa-angle-down rotate-icon"></i></div>
                <div className="collapsible-body">
                  <ul className="list-unstyled">
                    <li><div className="waves-effect nav-div" onClick={() => props.setPage(<About />)}>About me</div></li>
                    <li><div className="waves-effect nav-div" onClick={() => props.setPage(<Home />)}>Home</div></li>
                  </ul>
                </div>
              </li>
              <li><div className="collapsible-header waves-effect arrow-r nav-div">
                <i className="far fa-envelope"></i> Contact me<i className="fas fa-angle-down rotate-icon"></i></div>
                <div className="collapsible-body">
                  <ul className="list-unstyled">
                    <li><div className="waves-effect nav-div">FAQ</div></li>
                    <li><div className="waves-effect nav-div">Write a message</div></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div className="sidenav-bg mask-strong"></div>
      </div>
      <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav">            
        <div className="float-left">
          <div data-activates="slide-out" className="button-collapse white-text nav-div"><i className="fas fa-bars"></i></div>
        </div>            
        <div className="breadcrumb-dn mr-auto">
          <p>John Dukewich E-Portfolio</p>
        </div>
        <ul className="nav navbar-nav nav-flex-icons ml-auto">
          <li className="nav-item">
            <div className="nav-link"><i className="fas fa-envelope"></i> <span className="clearfix d-none d-sm-inline-block">Contact</span></div>
          </li>
          <li className="nav-item">
            <div className="nav-link"><i className="fas fa-comments"></i> <span className="clearfix d-none d-sm-inline-block">Support</span></div>
          </li>
          <li className="nav-item">
            <div className="nav-link"><i className="fas fa-user"></i> <span className="clearfix d-none d-sm-inline-block">Account</span></div>
          </li>
        </ul>
      </nav>
    </header>   
  );
}

export default Navbar;

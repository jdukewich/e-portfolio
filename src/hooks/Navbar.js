import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';
import '../style.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Coursework from './Coursework';
import Reflection from './Reflection';
import ExecutiveSummary from './ExecutiveSummary';
import InstructionSet from './InstructionSet';
import TechDescription from './TechDescription';
import SudokuSolver from './SudokuSolver';
import Contact from './Contact';

function Navbar(props) {  
  let navSize = '1rem';
  if (props.font) {
    navSize = '1.75rem';
  }

  return (      
    <header>          
      <div id="slide-out" className="side-nav fixed">
        <ul className={props.contrast ? "custom-scrollbar contrast-skin ps" : "custom-scrollbar ps"}>              
          <li>
            <div className="text-center mt-4 mx-2">
              <span style={{ fontSize: navSize }}>Find me on LinkedIn and Github</span>
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
            <ul className="collapsible collapsible-accordion" style={{ fontSize: navSize }}>
              <li><div className="collapsible-header waves-effect nav-div no-collapse" onClick={() => props.setPage(<Home />)}>
                <i className="fas fa-home"></i>Home</div>
              </li>
              <li><div className="collapsible-header waves-effect nav-div no-collapse" onClick={() => props.setPage(<About/>)}><i className="fas fa-user"></i>About Me</div></li>
              <li><div className="collapsible-header waves-effect nav-div no-collapse" onClick={() => props.setPage(<Resume />)}><i className="far fa-file"></i>Résumé</div></li>                            
              <li><div className="collapsible-header waves-effect arrow-r nav-div" onClick={() => props.setPage(<Coursework setPage={props.setPage} />)}><i className="fas fa-chevron-right"></i>Coursework<i
                    className="fas fa-angle-down rotate-icon"></i></div>
                <div className="collapsible-body">
                  <ul className="list-unstyled">  
                    <li><div className="waves-effect nav-div" onClick={() => props.setPage(<ExecutiveSummary />)}>Executive Summary</div></li>                                                          
                    <li><div className="waves-effect nav-div" onClick={() => props.setPage(<TechDescription />)}>Technical Description</div></li>
                    <li><div className="waves-effect nav-div" onClick={() => props.setPage(<InstructionSet />)}>Instruction Set</div></li>
                    <li><div className="waves-effect nav-div" onClick={() => props.setPage(<SudokuSolver />)}>Sudoku Solver</div></li>                    
                  </ul>
                </div>
              </li> 
              <li><div className="collapsible-header waves-effect nav-div no-collapse" onClick={() => props.setPage(<Reflection />)}><i className="fas fa-book-reader"></i>Reflection</div></li> 
              <li><div className="collapsible-header waves-effect nav-div no-collapse" onClick={() => props.setPage(<Contact />)}><i className="fas fa-envelope"></i>Contact Me</div></li>          
            </ul>
          </li>
        </ul>
        <div className={props.contrast ? "sidenav-bg mask-strong contrast-skin" : "sidenav-bg mask-strong"}></div>
      </div>
      <nav className={props.contrast ? "navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav contrast-skin" : "navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav"}>               
        <div className="float-left">
          <div data-activates="slide-out" className="button-collapse white-text nav-div"><i className="fas fa-bars"></i></div>          
        </div>            
        <div className="breadcrumb-dn mr-auto">
          <p style={{ fontSize: navSize }}>John Dukewich E-Portfolio</p>
        </div>
        <ul className="nav navbar-nav nav-flex-icons ml-auto">
          <li className="nav-item dropdown">
            <div className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false" style={{ fontSize: navSize}}><i className="fas fa-universal-access"></i>Accessibility</div>
            <div className="dropdown-menu dropdown-menu-right dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
              <div className="dropdown-item waves-effect" style={{ fontSize: navSize}} onClick={() => props.toggleContrast(!props.contrast)}>High Contrast Mode</div>
              <div className="dropdown-item waves-effect" style={{ fontSize: navSize}} onClick={() => props.toggleFont(!props.font)}>Font Size</div>              
            </div>
          </li>
        </ul>        
      </nav>
    </header>   
  );
}

export default Navbar;

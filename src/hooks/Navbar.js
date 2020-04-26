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
  return (      
    <header>          
      <div id="slide-out" className="side-nav fixed">
        <ul className="custom-scrollbar">              
          <li>
            <div className="text-center mt-3 mx-2">
              <span>Find me on LinkedIn and Github</span>
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
              <li><div className="collapsible-header waves-effect nav-div no-collapse" onClick={() => props.setPage(<Home />)}>
                <i class="fas fa-home"></i>Home</div>
              </li>
              <li><div className="collapsible-header waves-effect nav-div no-collapse" onClick={() => props.setPage(<About/>)}><i class="fas fa-user"></i>About Me</div></li>
              <li><div className="collapsible-header waves-effect nav-div no-collapse" onClick={() => props.setPage(<Resume />)}><i class="far fa-file"></i>Résumé</div></li>                            
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
              <li><div className="collapsible-header waves-effect nav-div no-collapse" onClick={() => props.setPage(<Reflection />)}><i class="fas fa-book-reader"></i>Reflection</div></li> 
              <li><div className="collapsible-header waves-effect nav-div no-collapse" onClick={() => props.setPage(<Contact />)}><i class="fas fa-envelope"></i>Contact Me</div></li>          
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
          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false"><i class="fas fa-universal-access"></i>Accessibility</div>
            <div class="dropdown-menu dropdown-menu-right dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
              <div class="dropdown-item">High Contrast Mode</div>
              <div class="dropdown-item">Font Size</div>              
            </div>
          </li>
        </ul>
      </nav>
    </header>   
  );
}

export default Navbar;

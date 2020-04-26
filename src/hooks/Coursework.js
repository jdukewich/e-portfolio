import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';
import ExecutiveSummary from './ExecutiveSummary';
import InstructionSet from './InstructionSet';
import TechDescription from './TechDescription';
import SudokuSolver from './SudokuSolver';

function Coursework(props) { 
  return (     
    <div className="container">   
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title"><h2>Coursework</h2></div>
              <div className="h5-responsive mb-4">This portfolio contains samples of my work from various courses. This work highlights
              my skills as a computer scientist and computer programmer as well as my strong technical communication skills.</div>

              <div className="h5-responsive mb-4">
                In the 
                <span className="link-page" onClick={() => props.setPage(<ExecutiveSummary />)}> Executive Summary </span> 
                assignment, I read four research papers relating to the BERT natural language processing model and wrote my own abstracts 
                of the papers as well as an executive summary of all four papers, highlighting their main purposes.
              </div>

              <div className="h5-responsive mb-4">
              In the
              <span className="link-page" onClick={() => props.setPage(<TechDescription />)}> Technical Description </span>
              assignment, I provide a detailed description of how neural networks work in machine learning. This description assumes appropriate
              background knowledge in calculus and linear algebra that computer science undergraduate students would have.
              </div>

              <div className="h5-responsive mb-4">
              In this 
              <span className="link-page" onClick={() => props.setPage(<InstructionSet />)}> Instruction Set</span>,
              I explain how to deploy and host your own Wordpress site using Amazon Web Services (AWS). This guide is suited for any audience
              comfortable with computers, but extra information is explained for those who want to understand some of the finer details.
              </div>

              <div className="h5-responsive mb-4">
              As a <span className="link-page" onClick={() => props.setPage(<SudokuSolver />)}> final project </span> 
              for an Introduction to Artificial Intelligence course, my partner and I investigated solving the classic Sudoku puzzle
              by modeling the puzzle as a Constraint Satisfaction Problem. Constraint Satisfaction Problems have viable solutions algorithms developed, so
              my partner and I specifically investigated the effects of using different heuristics in the backtracking algorithm.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default Coursework;

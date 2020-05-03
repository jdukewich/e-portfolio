import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function SudokuSolver() { 
  return (     
    <div className="container-fluid">   
      <div className="row">
        <div className="col">          
          <div className="card mb-4">            
            <div className="card-body">   
              <div className="card-title text-center"><div className="h2-responsive">Sudoku as Constraint Satisfaction</div></div>
                <div className="h5-responsive mb-2">
                In artificial intelligence, constraint satisfaction is a popular methodology for solving certain problems. This project
                research into the practical effects of constraint satisfaction algorithms and how efficient they are relating to the classic
                Sudoku puzzle. The experimentation and findings are meant to generalize to Sudoku puzzles of arbitrary size, instead of the usual
                9 by 9 grid.             
                </div>   
                <div className="embed-responsive embed-responsive-16by9">
                  <embed className="embed-responsive-item" src="/DS_497_Final_Project.pdf" />
                </div>                                          
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default SudokuSolver;
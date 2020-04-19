import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function Home() { 
  return (     
    <div className="container">   
      <div className="row">
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <div className="card-title"><h2>Home</h2></div>
              <div className="card-text">Welcome to my personal website! My name is John Dukewich, and 
              I am a young professional in the field of software engineering and computer science.</div>
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default Home;

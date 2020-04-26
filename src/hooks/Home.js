import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function Home() { 
  return (     
    <div className="container">   
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title"><h2>Welcome!</h2></div>
              <div className="h5-responsive mb-4">Welcome to my personal website! My name is John Dukewich, and 
              I am a young professional in the field of software engineering and computer science.</div>

              <div className="h5-responsive mb-4">This website includes samples of my work
              from various courses that demonstrates my effective technical communication abilities as well as my passion for computer science. 
              Please have a look around my site to see more about my skills, work, and experiences.</div>

              <div className="h5-responsive mb-4">This site was designed to follow Google's <a target="_blank" href="https://material.io/" rel="noopener noreferrer">Material Design</a> principles by utilizing
              the <a target="_blank" href="https://mdbootstrap.com/" rel="noopener noreferrer">Material Design Bootstrap</a> library.</div>

              <div className="col text-center">
                <img src="headshot.jpg" alt="A headshot of John Dukewich" />
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default Home;

import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function Resume() { 
  return (     
    <div className="container-fluid">   
      <div className="row">
        <div className="col">          
          <div className="card full-page">            
            <div className="card-body">   
              <div className="card-title text-center"><h2>Résumé</h2></div>
              My résumé contains a brief summary of some of my past work experiences as well as my technical skills. If you have any questions about my experiences, I would be happy to answer them!              
              <div class="embed-responsive embed-responsive-16by9">
                <embed class="embed-responsive-item" src="/resume.pdf" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default Resume;

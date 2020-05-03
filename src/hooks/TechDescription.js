import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function TechDescription() { 
  return (     
    <div className="container-fluid">   
      <div className="row">
        <div className="col">          
          <div className="card mb-4">            
            <div className="card-body">   
              <div className="card-title text-center"><div className="h2-responsive">Technical Description</div></div>
                <div className="h5-responsive mb-2">
                This technical description provides a high-level overview of neural networks while beginning to detail some
                of their mathematical theory. This description assumes the reader will have background knowledge in calculus and linear
                algebra. This description is intended to be similar to something that could be found in an undergraduate textbook or lecture notes.             
                </div>        
                <div className="embed-responsive embed-responsive-16by9">
                  <embed className="embed-responsive-item" src="/TechnicalDescription.pdf" />
                </div>             
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default TechDescription;
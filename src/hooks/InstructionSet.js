import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function InstructionSet() { 
  return (     
    <div className="container-fluid">   
      <div className="row">
        <div className="col">          
          <div className="card mb-4">            
            <div className="card-body">   
              <div className="card-title text-center"><div className="h2-responsive">Instruction Set</div></div>
                <div className="h5-responsive mb-2">
                This instruction set guides a reader through setting up their own Wordpress website using Amazon Web Services (AWS).
                This guide is intended for those who are comfortable with computer networking and server management, but readers of all levels of
                computer knowledge should be able to follow along.             
                </div>      
                <div className="embed-responsive embed-responsive-16by9">
                  <embed className="embed-responsive-item" src="/InstructionSet.pdf" />
                </div>          
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default InstructionSet;
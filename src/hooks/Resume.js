import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function Resume() { 
  return (     
    <div className="container-fluid">   
      <div className="row">
        <div className="col">          
          <div className="card mb-4">            
            <div className="card-body">   
              <div className="card-title text-center"><div className="h2-responsive">Résumé</div></div>
                <div className="h5-responsive mb-2">
                My résumé contains a brief summary of some of my past work experiences as well as my technical skills. I have plenty of other projects and experiences, so check out other sections of my portfolio as well! If you have any questions about my experiences, I would be happy to answer them!              
                </div>          
                <div className="embed-responsive embed-responsive-16by9">
                	<object className="embed-responsive-item" data="resume.pdf">                		
   					 				<p><a href="resume.pdf">Download PDF</a></p>
                	</object>                               
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default Resume;

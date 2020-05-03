import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function ExecutiveSummary() { 
  return (     
    <div className="container-fluid">   
      <div className="row">
        <div className="col">          
          <div className="card mb-4">            
            <div className="card-body">   
              <div className="card-title text-center"><div className="h2-responsive">Executive Summary</div></div>
                <div className="h5-responsive mb-2">
                This executive summary contains four abstracts of research papers about a machine learning model known as BERT. BERT
                is a transformer model that attempts to learn word embeddings, mapping similarities between words mathematically. 
                After reading four papers about the uses of BERT, I summarized the overall ideas of BERT into a single executive summary.             
                </div>         
                <div className="embed-responsive embed-responsive-16by9">
                  <embed className="embed-responsive-item" src="/ExecutiveSummary.pdf" />
                </div>           
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default ExecutiveSummary;
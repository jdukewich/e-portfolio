import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function TechDescription() { 
  return (     
    <div className="container-fluid">   
      <div className="row">
        <div className="col">          
          <div className="card">            
            <div className="card-body">   
              <div className="card-title text-center"><h2>Technical Description</h2></div>
                <div className="h5-responsive mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet mi quis tempus mattis. Aenean tempor magna massa, 
                id consectetur tortor pharetra vel. Aliquam sed malesuada elit. Sed posuere mauris ac eros imperdiet pharetra. Duis 
                eleifend elit fermentum orci semper porta. Pellentesque at risus enim. Morbi convallis sed mi sit amet sagittis.              
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
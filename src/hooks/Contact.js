import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function Contact() { 
  return (     
    <div className="container-fluid">   
      <div className="row">
        <div className="col">          
          <div className="card mb-4">            
            <div className="card-body">   
              <div className="card-title text-center p-2"><div className="h2-responsive">Contact Me</div></div>
              <div className="h5-responsive">Unfortunately, this website is a collection of static files, so there is no means for you to automatically send me an email with a form on this site. Feel free to email me at:</div> 
              <div className="col text-center">
                <img src="email.png" alt="jpd5666 [at] psu [dot] edu" />  
              </div>  
              <div className="h5-responsive">You can also reach out to me on <a target="_blank" href="https://www.linkedin.com/in/john-dukewich" rel="noopener noreferrer">LinkedIn</a> or <a target="_blank" href="https://github.com/jdukewich" rel="noopener noreferrer">Github</a>.</div>                      
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default Contact;
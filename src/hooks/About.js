import React from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function About() { 
  return (     
    <div className="container">   
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title"><h2>About Me</h2></div>
              <div className="h5-responsive mb-4">I currently attend Penn State University pursuing a Bachelor of Science in Computer Science. 
              My passion for computer science is evident in my coursework, professional experience, and extracurricular activities. Specifically, I
              am extremely interested in web development as well as artificial intelligence.</div>

              <div className="h5-responsive mb-4">I have web development experience from my software engineering internship experience, and I have worked with artificial intelligence
              and natural language processing through a part-time job with the Nittany AI Alliance at Penn State.</div>

              <div className="h5-responsive mb-4">I dedicate a large amount of my time as a volunteer of the Penn State Dance Marathon (THON&trade;). In my role
              as a Systems Administrator on the Technology Committee, I have been able to combine my passions for computer science and volunteering. This role
              has allowed me to learn and apply industry-standard technologies, such as Docker, Amazon Web Services (AWS), and the Elastic Stack.</div>

              <div className="h5-responsive mb-4">Some of my hobbies include running, skiing, and playing sports (soccer, tennis, and volleyball mostly). I also enjoy programming side projects,
              such as personal websites.
              </div>
              <div className="col text-center">
                <img src="thon.jpg" alt="John Dukewich with two friends at THON 2020" />
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default About;

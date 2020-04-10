import React, { useState } from 'react';
import '../bootstrap.min.css';
import '../mdb.min.css';

function Home() { 
  const [count, setCount] = useState(0);

  return (     
    <div className="container">   
      <div className="row">
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  Count is {count}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-outline-primary btn-rounded waves-effect" onClick={() => setCount(count + 1)}>
                    Increase count
                  </button>
                  <button className="btn btn-outline-primary btn-rounded waves-effect" onClick={() => setCount(0)}>
                    Reset count
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     
  );
}

export default Home;

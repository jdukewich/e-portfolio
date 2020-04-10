import React, { useState } from 'react';
import './bootstrap.min.css';
import './mdb.min.css';
import Home from './hooks/Home';
import Navbar from './hooks/Navbar';

function App() {   
  const [page, setPage] = useState(<Home />);

  return (
    <div className="fixed-sn mdb-skin">       
        <Navbar setPage={setPage} />  
        <main>
          {page}
        </main>      
    </div>
  );
}

export default App;

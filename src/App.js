import React, { useState } from 'react';
import './bootstrap.min.css';
import './mdb.min.css';
import Home from './hooks/Home';
import Navbar from './hooks/Navbar';

function App() {   
  const [font, toggleFont] = useState(false);
  const [contrast, toggleContrast] = useState(false);
  const [page, setPage] = useState(<Home />);

  let size = '1rem';
  if(font) {
  	size = '2rem';
  }

  return (
    <div className={contrast ? "fixed-sn mdb-skin contrast-skin" : "fixed-sn mdb-skin"} style={{ minHeight: '100vh' }}>       
        <Navbar setPage={setPage} toggleFont={toggleFont} toggleContrast={toggleContrast} font={font} contrast={contrast} />  
        <main style={{ fontSize: size }}>
          {page}
        </main>      
    </div>
  );
}

export default App;

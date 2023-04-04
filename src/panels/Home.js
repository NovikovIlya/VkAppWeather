import React, { useState, useEffect, useContext } from 'react';
import { HashRouter ,Route,Routes } from 'react-router-dom';
import Tomorrow from './pages/tomorrow';
import './Home.css'

import Main from './pages/Main'


function Home(){
  

  const [privet,setPrivet] = useState('zdarova')

  return (
    
      <div className="App">
      <HashRouter >
        <Routes>
         <Route path='/' element={ <Main/>} />
        
         <Route path='/tomorrow' element={ <Tomorrow/>} />
         
        </Routes> 
      </HashRouter>
      {/* <Main/> */}
    </div>
    
    
      
  );
}

export default Home;
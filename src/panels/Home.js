import React, { useState, useEffect } from 'react';
import './Home.css'
import { BrowserRouter,Route ,Routes,Link} from 'react-router-dom';
import Main from './pages/Main'
import City from './pages/City'
import Tomorrow from './pages/tomorrow';

function Home(){
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path='/' element={ <Main/>} />
         {/* <Route path='/:id' element={ <City/>} /> */}
         <Route path='/tomorrow' element={ <Tomorrow/>} />
         <Route path='*' element={<div>Не найдено</div>} />
        </Routes> 
      </BrowserRouter>
    </div>
      
  );
}

export default Home;
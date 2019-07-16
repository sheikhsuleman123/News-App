import React from 'react';
import {BrowserRouter , Route } from 'react-router-dom';
import './App.css';

//Components
import Header from './component/Header/Header.js'
import Home from './component/Home/home.js';
import PlayerPage from './component/PlayerPage/playerpage.js';

const  App = () => {
  return (
    <BrowserRouter>
    <div className="backcolor">
     <header>
      <Header/>
     </header>
    <Route path ="/" exact component={Home} />
    <Route path ="/playerpage" exact component={PlayerPage} />
    
    
    </div>
      </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './App.css';
import React from "react";
import Form from './components/Form';
import People from './components/People';
import { Router } from "@reach/router"
import Planets from './components/Planets';
import Starships from './components/Starships';

function App() {
  return (
    <div className="App">
      <div className='imageContainer'>
        <div className='componentContainer'>
          <Form />
          <Router className='routerContainer'>
            <People path="/people/:id" />
            <Planets path="/planets/:id" />
            <Starships path="/starships/:id" />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

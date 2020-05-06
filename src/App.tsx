import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Welcome from './components/Welcome/Welcome'
import ChampionSelect from './components/ChampionSelect/ChampionSelect'
import ChampionDetails from './components/ChampionDetails/ChampionDetails'

function App() {
  return (
    <BrowserRouter>  
      <Route path="/champion-select" component={ChampionSelect}></Route>
      <Route path="/champion-details" component={ChampionDetails}></Route>
      <Route path="/" exact component={Welcome}></Route>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pocetna from './components/stranice/Pocetna';
import Drogerije from './components/stranice/Drogerije';
import PrijaviteSe from './components/stranice/PrijaviteSe';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Pocetna}/>
          <Route path='/drogerije' component={Drogerije}/>
          <Route path='/prijavite_se' component={PrijaviteSe}/>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;

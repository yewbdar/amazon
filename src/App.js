import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css';

import Header from './Header'
import Home from './Home'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header/>
          <Home/>
        </Route>
        <Route  path='/chekout'>
           <p>this is chekout page  </p>
        </Route>
        <Route path='/login'>
         <p>this is login page </p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

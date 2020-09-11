import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './cmp/About'
import Listing from './cmp/Listing'
import Protected from './cmp/Protected'
import Home from './cmp/Home'
import Auth from './cmp/Auth'
import Nav from './cmp/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Nav/>
        <Switch>
          <Route path="/about">
            <About />
            {/* <Protected cmp={About} /> */}
          </Route>
          <Route path="/home">
            <Home />
            {/* <Protected cmp={Home} /> */}
          </Route>
          <Route path="/list">
            <Listing />
            {/* <Protected cmp={Listing} /> */}
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

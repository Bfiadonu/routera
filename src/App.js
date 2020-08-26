import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';


import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      
    
   
  <nav class="navbar navbar-default navbar-fixed-top navbar-light bg-dark mb-5">
  <NavLink exact activeClassName="active" to="/">Home</NavLink>
  <NavLink activeClassName="active" to="/about">About</NavLink>
    <NavLink activeClassName="active" to="/contact">Contact</NavLink>
  </nav>
    
    <div class="jumbotron">
      <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
  </Switch>
    </div>
    </div>
  </Router>
  );
}

export default App;

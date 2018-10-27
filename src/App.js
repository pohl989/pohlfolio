import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './NavBar';



const App = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={Home} />
  </div>
);

export default App;

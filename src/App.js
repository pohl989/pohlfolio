import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './NavBar';



const App = () => (
  <div>
    <NavBar />
    <div style={{paddingTop: '120px'}}>
      <Route exact path="/" component={Home} />
    </div>
  </div>
);

export default App;

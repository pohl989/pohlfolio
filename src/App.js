import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './NavBar';
import MyHeader from './components/MyHeader'


const App = () => (
  <div>
    <MyHeader style={{padding: "50px"}} />
    <NavBar />
    <div style={{paddingTop: '120px'}}>
      <Route exact path="/" component={Home} />
    </div>
  </div>
);

export default App;

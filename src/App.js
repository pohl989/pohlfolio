import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './NavBar';
import MyHeader from './components/WelcomeScreen'
import WelcomeScreen from './components/WelcomeScreen';


const App = () => (
  <div>
    <WelcomeScreen style={{padding: "50px"}} />
    <NavBar />
    <div style={{paddingTop: '120px'}}>
      <Route exact path="/" component={Home} />
    </div>
  </div>
);

export default App;

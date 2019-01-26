import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import WelcomeScreen from './components/WelcomeScreen';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faIgloo, faGithub, faLinkedin)

const App = () => (
  <div>
    <WelcomeScreen style={{padding: "50px"}} />
    <NavBar />
    <div id={"start"} style={{paddingTop: '90px'}}>
      <Route exact path="/" component={Home} />
    </div>
  </div>
);

export default App;

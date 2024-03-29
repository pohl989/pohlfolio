import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faIgloo} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import NavBar from './components/NavBar'
import Home from './components/Home'
import WelcomeScreen from './components/WelcomeScreen'
import Footer from './components/Footer'

library.add(faIgloo, faGithub, faLinkedin)

const App = () => (
  <div>
    <WelcomeScreen style={{padding: '50px'}} />
    <NavBar />
    <div id="start" style={{paddingTop: '90px'}}>
      <Route exact path="/" component={Home} />
    </div>
    <Footer />
  </div>
)

export default App

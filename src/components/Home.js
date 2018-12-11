import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Cards } from '../styledComponents/Card'
import machu from '../images/machu.JPG'
import logo from '../images/Pohl989_logo.png'
import Header from '../styledComponents/Header.js'
import { colors } from '../styledComponents/Defaults'
import Project from './Project'

const styles = {
 
}
class Home extends Component {

  state = {
    projects: [
      {title: "This is an example", url: "www.sample_url.com/1", description: "This is what we what we do 1" },
      {title: "This is an example 1", url: "www.sample_url.com/2", description: "This is what we what we do 2" },
      {title: "This is an example 2", url: "www.sample_url.com/3", description: "This is what we what we do 3"}
    ]
  }

  render(){
    return(
<>
  <div className="background-image"style={styles.backgroundStyle}>
    <Container className='pageprofile'>
      <h2 style={{color: `${colors.neonGreen}`}}>Projects</h2>
      <Cards>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </Cards>
      <h2 style={{color: `${colors.neonGreen}`}}>Skills</h2>

    </Container>
  </div>

</>

    )
  }
}
 
export default Home
import React, { Component } from 'react';
import { 
  Button, 
  Image
} from 'semantic-ui-react'
import styled from 'styled-components'
import Header from '../styledComponents/Header.js'
import logo from '../images/Pohl989_logo.png'
import Background from '../images/dark-gravel.png'

const WelcomeCard = styled.div`
  width: 80%;
  border: 5px solid #9fcf6e;
  border-radius: 20px;
  margin: 20px 0px;
  position: center;
  background-color: rgb(34,34,34);
  flex-direction: column;
  box-shadow: inset 3px 4px 5px #000, 5px 6px 7px rgba(0, 0, 0, .3), inset 1px 2px 3px #fff;
  padding: 5%;
  @media (max-width: 700px) {
    margin: 5px 0px;
    width: 90wh;
    height: 90vh;
    justify-content: space-evenly;
  }
  @media (min-width: 1100px) {
    margin: 20%;
  }
`

const WelcomeBackground = styled.div`
  background-image: url(${Background});
  height: 100vh
  overflow: auto
  display: flex
  justify-content: center
  align-items: center`

class WelcomeScreen extends Component {

  render(){
    return(
      <WelcomeBackground>
        <WelcomeCard>
          <Image centered src={logo} size='small' style={{marginBottom: "15px"}}/>
          <Header size={"large"} align={"center"}>Hello, I'm Ben Pohl.</Header>
          <Header align={"center"} style={{marginBottom: '40px'}}>I'm a Rails + React Developer</Header>
          <a href="#start">
            <Button floated={"right"} color={"blue"} inverted>View my work</Button>
          </a>
        </WelcomeCard>
      </WelcomeBackground>

    )
  }
}
 
export default WelcomeScreen
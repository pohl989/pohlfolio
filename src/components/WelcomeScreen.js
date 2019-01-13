import React, { Component } from 'react';
import styled from 'styled-components'
import Header from '../styledComponents/Header.js'
import logo from '../images/Pohl989_logo.png'
import Background from '../images/dark-gravel.png'
import { WelcomeCard } from '../styledComponents/Card.js'
import { BetterButton } from '../styledComponents/Button.js'

const WelcomeBackground = styled.div`
  background-image: url(${Background});
  height: 100vh
  overflow: auto
  display: flex
  justify-content: center
  align-items: center`

const WelcomeLogo = styled.img`
  margin-bottom: "15px";
  width: "150px";
  height: "auto";
  display: "block";
  position: "relative";
  margin-right: "auto";
  margin-left: "auto;
`


class WelcomeScreen extends Component {

  render(){
    return(
      <WelcomeBackground>
        <WelcomeCard>
          <WelcomeLogo alt="Pohlfolio Logo" src={logo} size='small' style={{marginBottom: "15px", width: "150px", height: "auto", display: "block", position: "relative", marginRight: "auto", marginLeft: "auto"}}/>
          <Header size={"large"} align={"center"}>Hello, I'm Ben Pohl.</Header> 
          <Header align={"center"} style={{marginBottom: '40px'}}>I'm a Rails + React Developer</Header>
          <a href="#start">
            <BetterButton color={'malibu'}>View my work</BetterButton>
          </a>
        </WelcomeCard>
      </WelcomeBackground>

    )
  }
}
 
export default WelcomeScreen
import React from 'react'
import styled from 'styled-components'
import Background from '../images/dark-gravel.png'
import NameCard from './NameCard'
import logo from '../images/Pohl989_logo.png'
import {BetterButton} from '../styledComponents/Button'
import {colors, media} from '../styledComponents/Defaults'

const WelcomeBackground = styled.div`
  background-image: url(${Background});
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;`

const LogoWelcomeBackground = styled.div`
  background-color: white;
  padding: 20px;
  aspect-ratio: 1/1;
  border-radius: 100%;
  display: flex;
  justify-content:center;
  border: 6px solid pink;
  border: 2px solid ${(props) => colors[props.color]} !important;
  box-shadow: 1px 1px 2px rgba(240,240,240,0.3), 0 0 0 2px ${(props) => colors[props.color]};
  margin: 2vh;
`

const LogoWelcome = styled.img`
  margin-bottom: 15px;
  width: 150px;
  height: auto;
  display: block;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  ${media.tablet`
    width: 125px;
  `}
`
const ButtonWrapper = styled.div`
  justify-self: right;
  width: 80%;
`

function WelcomeScreen() {
  return (
    <WelcomeBackground>
      <LogoWelcomeBackground color="malibu">
        <LogoWelcome src={logo} />
      </LogoWelcomeBackground>
      <NameCard />
      <ButtonWrapper>
        <a href="#start">
          <BetterButton color='malibu' >See my work</BetterButton>
        </a>
        <a href="#about" >
          <BetterButton color='white' style={{marginRight: '10px'}}>Read about me</BetterButton>
        </a>
      </ButtonWrapper>
    </WelcomeBackground>

  )
}

export default WelcomeScreen

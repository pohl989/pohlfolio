import React from 'react'
import styled from 'styled-components'
import Background from '../images/dark-gravel.png'
import NameCard from './NameCard'


const WelcomeBackground = styled.div`
  background-image: url(${Background});
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;`


function WelcomeScreen() {
  return (
    <WelcomeBackground>
      <NameCard />
    </WelcomeBackground>

  )
}

export default WelcomeScreen

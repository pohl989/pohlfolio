import React from 'react'
import {WelcomeCard} from '../styledComponents/Card'
import Header from '../styledComponents/Header'
import {BetterButton} from '../styledComponents/Button'
import logo from '../images/Pohl989_logo.png'

const WelcomeLogo = styled.img`
  margin-bottom: "15px";
  width: "150px";
  height: "auto";
  display: "block";
  position: "relative";
  margin-right: "auto";
  margin-left: "auto;
`

export const OldNameCard = () => {
  return (
    <>
      <WelcomeCard>
        <WelcomeLogo
          alt="Pohlfolio Logo"
          src={logo}
          size='small'
          style={{
            marginBottom: '15px',
            width: '150px',
            height: 'auto',
            display: 'block',
            position: 'relative',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        />
        <Header size="large" align="center">Hello, I&apos;m Ben Pohl.</Header>
        <Header align="center" style={{marginBottom: '40px'}}>I&apos;m a Rails + JavaScript Developer</Header>
        <a href="#start">
          <BetterButton color='malibu'>View my work</BetterButton>
        </a>
      </WelcomeCard>
    </>
  )
}



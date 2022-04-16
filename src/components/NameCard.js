
import React from 'react'
import Header from '../styledComponents/Header'
import {colors} from '../styledComponents/Defaults'

const NameCard = () => {
  return (
    <div id="name-card" style={{
      padding: '0px',
      backgroundColor: colors.pink,
      borderRadius: '0.8rem',
      margin: '1rem',
    }} >
      <Header size="large" align="center" font="Obitron" bColor="white">HELLO</Header>
      <Header align="center" font="Obitron" bColor="white">my name is</Header>
      <Header size="large" align="center" bColor="neonGreen" font="Square Peg" background="white">BEN POHL</Header>
      <div style={{padding: '0px 20px'}}>
        <Header align="center" style={{marginBottom: '40px'}} font="Obitron">I&apos;m a Rails + JavaScript Developer</Header>
      </div>
    </div>
  )
}

export default NameCard

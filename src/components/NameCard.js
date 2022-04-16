
import React from 'react'
import Header from '../styledComponents/Header'
import Fader from './Fader'
import {StyledNameCard} from '../styledComponents/Card'

const roles = [
  'web developer',
  'Rails on Rails guy',
  'problem solver',
  'JavaScript coder',
  'pet parent',
  'React lover',
  'Marvel geek',
  'Vue fanatic',
  'dude who loves to code',
]


const NameCard = () => {
  return (
    <StyledNameCard>
      <div style={{padding: '0px 20px'}}>
        <Header size="h1" align="center" font="Obitron" bColor="white">HELLO WORLD!</Header>
      </div>
      <Header align="center" font="Obitron" bColor="white" sub="true">my name is</Header>
      <Header size="large" align="center" bColor="neonGreen" font="Square Peg" background="white">BEN POHL</Header>
      <div style={{padding: '0px 20px'}}>
        <Header align="center" style={{marginBottom: '40px'}} font="Obitron">I&apos;m a <Fader texts={roles}></Fader></Header>
      </div>
    </StyledNameCard>
  )
}

export default NameCard

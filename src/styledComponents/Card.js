import styled from 'styled-components'
import { media, colors } from './Defaults'

const cardShadow = "inset 3px 4px 5px #000, 5px 6px 7px rgba(0, 0, 0, .3), inset 1px 2px 3px #fff"



export const Cards = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: stretch;
`

export const Card = styled.div`
  width: 80%;
  border: 5px solid ${colors.neonGreen};
  border-radius: 20px;
  margin: 20px 0px;
`

export const ProjectCard  = styled(Card)`
  width: 50%;
  height: auto;
  background-color: rgb(34,34,34);
  box-shadow: ${cardShadow};
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 290px;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  border-radius: .28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  -webkit-transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  -webkit-transition: box-shadow .1s ease,-webkit-transform .1s ease;
  transition: box-shadow .1s ease,-webkit-transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease,-webkit-transform .1s ease;
`

export const ProjectImage = styled.div`
  width: 50%;
  height: auto;
  background-color: rgb(34,34,34);
  box-shadow: ${cardShadow};
`

export const WelcomeCard  = styled(Card)`
  position: center;
  background-color: rgb(34,34,34);
  flex-direction: column;
  box-shadow: ${cardShadow};
  padding: 5%;
  ${media.desktop`
    margin: 20%;
    `
  }
  ${media.tablet`
    background: pink;
    margin: 5px 7px;
    width: 90wh;
    justify-content: space-evenly;
    `
  }
`
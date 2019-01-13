import styled from 'styled-components'
import { media, colors } from './Defaults'

const cardShadow = "inset 3px 4px 5px #000, 5px 6px 7px rgba(0, 0, 0, .3), inset 1px 2px 3px #fff"
const cardShadow2 = "inset 3px 4px 5px rgba(45, 45, 45, .2)"

const borderRadius = ".8em;"

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
  border-radius: ${borderRadius};
  margin: 20px 10px;
  transition: 0.6s;
`

export const ProjectCard  = styled(Card)`
  height: auto;
  background-color: rgb(34,34,34);
  box-shadow: ${cardShadow2};
  max-width: 100%;
  position: relative;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  min-width: 280px;
  max-width: 400px;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: 5px solid ${colors.neonGreen};
  box-shadow: ${cardShadow};
  &:hover{
    border: 8px solid ${colors.malibu};
  }
`

export const TextCard = styled(Card)`
  background-color: rgba(256, 256, 256, 0.1);
  box-shadow: ${cardShadow};
  color: ${colors.white};
  width: 100%;
  padding: 20px 20px;
  text-align: left;
  font-family: 'Roßboto Mono', monospace;
  font-size: '1.6em';
  box-sizing: inherit;
  display: flex;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  background-color: rgb(34,34,34);
  box-shadow: ${cardShadow2};
  border-top-right-radius: .4em;
  border-top-left-radius: .4em;
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
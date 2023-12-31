import styled from 'styled-components'
import {media, colors} from './Defaults'

const cardShadow = 'inset 3px 4px 5px #000, 5px 6px 7px rgba(0, 0, 0, .3), inset 1px 2px 3px #fff'
const cardShadow2 = 'inset 3px 4px 5px rgba(45, 45, 45, .2)'

const borderRadius = '.8em;'

export const Cards = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: stretch;
`

export const Card = styled.div`
  width: 80%;
  border: 5px solid ${colors.pink};
  border-radius: ${borderRadius};
  margin: 20px 10px;
  transition: 0.6s;
`

export const StyledNameCard = styled.div`
  padding: 0px;
  background-color: ${colors.pink};
  background:linear-gradient(217deg, ${colors.pink}, ${colors.burgandy} 70.71%);
  border-radius: 0.8rem;
  margin: 1.5rem;
  border: 5px solid ${colors.white};
  min-width: 95%;
  ${media.tablet`
    min-width: 70%;
    max-width: 1000px;
    border-width: 6px;
    `}
  ${media.desktop`
    min-width: 50%;
    max-width: 1000px;
    `}
  ${media.giant`
    min-width: 1000px;
    max-width: 1000px;
`}
`

export const ProjectCard = styled(Card)`
  height: 90%;
  width: 100%;
  background-color: rgb(34,34,34);
  box-shadow: ${cardShadow2};
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
  &:hover{
    border: 8px solid ${colors.malibu};
  }
`

export const TextCard = styled(Card)`
  background-color: rgba(256, 256, 256, 0.1);
  box-shadow: ${cardShadow};
  color: ${colors.white};
  padding: 20px 20px;
  text-align: left;
  font-family: 'Roßboto Mono', monospace;
  font-size: 1.2rem;
  box-sizing: inherit;
  display: flex;
  width: 100%;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;
    max-width: 1100px;
  `}
`

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  background-color: rgb(34,34,34);
  box-shadow: ${cardShadow2};
  border-top-right-radius: .4em;
  border-top-left-radius: .4em;
`

export const NamedCard = styled.img`
  width: 100%;
  height: auto;
  background-color: rgb(34,34,34);
  box-shadow: ${cardShadow2};
  border-top-right-radius: .4em;
  border-top-left-radius: .4em;
`


export const WelcomeCard = styled(Card)`
  position: center;
  background-color: rgb(34,34,34);
  flex-direction: column;
  box-shadow: ${cardShadow};
  padding: 5%;
  ${media.desktop`
    margin: 20%;
    `}
  ${media.tablet`
    margin: 5px 7px;
    width: 90wh;
    height: 60vh;
    justify-content: space-evenly;
    `
}
`

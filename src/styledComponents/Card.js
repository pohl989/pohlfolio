import styled from 'styled-components'
import { media, colors } from './Defaults'

const cardShadow = "inset 3px 4px 5px #000, 5px 6px 7px rgba(0, 0, 0, .3), inset 1px 2px 3px #fff"

export const ProjectCard  = styled.img`
  width: 40%;
  border: 5px solid ${colors.neonGreen};
  border-radius: 20px;
  background-color: rgb(34,34,34);
  flex-direction: column;
  box-shadow: ${cardShadow};
  margin: 5%;
`

export const WelcomeCard  = styled.div`
  width: 80%;
  border: 5px solid ${colors.neonGreen};
  border-radius: 20px;
  margin: 20px 0px;
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
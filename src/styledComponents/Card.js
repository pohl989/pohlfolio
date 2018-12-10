import styled from 'styled-components'


export const WelcomeCard  = styled.h1`
  width: 80%;
  border: 5px solid #9fcf6e;
  border-radius: 20px;
  margin: 20px 0px;
  position: center;
  background-color: rgb(34,34,34);
  flex-direction: column;
  box-shadow: inset 3px 4px 5px #000, 5px 6px 7px rgba(0, 0, 0, .3), inset 1px 2px 3px #fff;
  padding: 5%;
  @media (max-width: 700px) {
    margin: 5px 0px;
    width: 90wh;
    justify-content: space-evenly;
  }
  @media (min-width: 1100px) {
    margin: 20%;
}
`
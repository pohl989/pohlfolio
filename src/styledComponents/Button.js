import styled from 'styled-components'
import { colors } from './Defaults'


export const BetterButton = styled.button`
  background-color: transparent;
  box-shadow: 1px 1px 2px rgba(240,240,240,0.3), 0 0 0 2px ${props => colors[props.color]};
  text-shadow: 1px 1px 2px rgba(240,240,240,0.3), 0 0 0 2px ${props => colors[props.color]};
  color: ${props => colors[props.color]};
  border: 2px solid ${props => colors[props.color]} !important;
  background: transparent none;
  padding: 11px 21px; 
  cursor: pointer;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  margin: 0 .25em 0 0;
  padding: .78571429em 1.5em .78571429em;
  text-transform: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: .9rem;
  float: right;
  &:hover{
    background: ${props => colors[props.color]};
    color: #222222;
    font-weight: 900;
    text-shadow: 1px 1px 1px #ddd
    box-shadow: "inset 3px 4px 5px #ddd, 5px 6px 7px rgba(240, 240, 240, .3), inset 1px 2px 3px #222222"
  }
`

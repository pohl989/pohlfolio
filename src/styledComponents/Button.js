import styled from 'styled-components'


export default styled.button`
  margin: ${props => subHeader(props.sub)};
  text-align: ${props => align(props.align)};
  font-size: ${props => fontSize(props.size)};
  font-family: 'Roboto Mono', monospace;
  color: ${props => color(props.bColor)};
`
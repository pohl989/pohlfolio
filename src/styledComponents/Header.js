import styled from 'styled-components'
//This is just an example of how to write styled components. Please
// Update and delete this comment

const fontSize = (size) => {
  switch(size) {
    case 'huge':
      return '20vmin'
    case 'large':
      return '8vmin'
    case 'medium':
      return '6vmin'
    case 'small':
      return '4vmin'
    case 'h1':
      return '10vmin'
    case 'h2':
      return '8vmin'
    case 'h3':
      return '6vmin'
    case 'h4':
      return '5vmin'
    case 'h5':
      return '4vmin'
    case 'h6':
      return '3vmin'
    default:
      return '4vmin'
  }
}

const color = (color) => {
  switch(color){
    case 'white':
      return '#fff !important'
    case 'orange':
     return '#ff5722'
    default:
      return '#fff'
  }
}

const subHeader = (sub=false) => {
  if(sub){
    return "0px 0px 15px 0px"
  } else {
    return "15px 0px 5px 0px"
  }  
}

const align = (align) => {
  switch(align){
    case 'left':
      return 'left'
    case 'right':
      return 'right'
    case 'center':
      return 'center'
    default:
      return 'left'
  }
}


export default styled.h1`
  margin: ${props => subHeader(props.sub)};
  text-align: ${props => align(props.align)};
  font-size: ${props => fontSize(props.size)};
  font-family: 'Roboto Mono', monospace;
  color: ${props => color(props.bColor)};
`

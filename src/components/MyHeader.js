import React, { Component } from 'react';
import { Container, 
  Grid, 
  Segment, 
  Image
} from 'semantic-ui-react'
import styled from 'styled-components'

const styles = {
 
}

const Welcome = styled.div`
  position: static;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: lime;
  height: 100%`

class MyHeader extends React.Component {

  render(){
    return(
<>
<div style={styles.backgroundStyle} >
    <Welcome>
    <div className='cencenter'>
      <h3>Ben Pohl</h3>
      <h5>pohl989@gmail.com</h5>
      <h5>pohl989@gmail.com</h5>
      <h5>pohl989@gmail.com</h5>
      <h5>pohl989@gmail.com</h5>
      <h5>pohl989@gmail.com</h5>

      </div>
    </Welcome>
  </div>

</>

    )
  }
}
 
export default MyHeader
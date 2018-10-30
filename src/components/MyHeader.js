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

height:100vh`

class MyHeader extends React.Component {

  render(){
    return(
<>
<div style={styles.backgroundStyle} >
    <Welcome>
    <div className='cencenter'>
      <h3>Ben Pohl</h3>
      <h5 style={{color: 'white'}}>pohl989@gmail.com</h5>
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
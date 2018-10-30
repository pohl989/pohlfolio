import React, { Component } from 'react';
import { Container, 
  Grid, 
  Segment, 
  Image
} from 'semantic-ui-react'
import styled from 'styled-components'
import Header from '../styledComponents/Header.js'
import logo from '../images/Pohl989_logo.png'


const styles = {
 
}

const Welcome = styled.div`

height:100vh`

class MyHeader extends React.Component {

  render(){
    return(
      <div style={styles.backgroundStyle} >
        <Welcome>
          <div className='cencenter'>
            <Header style={{marginTop: '100px'}} as="h1" align="center">Ben Pohl</Header>
            <Header>Ben Pohl</Header>
            <Image src={logo} size='large' />
            <h5 style={{color: 'white'}}>pohl989@gmail.com</h5>
            <h5>pohl989@gmail.com</h5>
            <h5>pohl989@gmail.com</h5>
            <h5>pohl989@gmail.com</h5>
            <h5>pohl989@gmail.com</h5>

          </div>
        </Welcome>
      </div>

    )
  }
}
 
export default MyHeader
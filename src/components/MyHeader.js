import React, { Component } from 'react';
import { Container, 
  Grid, 
  Button, 
  Image
} from 'semantic-ui-react'
import styled from 'styled-components'
import Header from '../styledComponents/Header.js'
import logo from '../images/Pohl989_logo.png'
import Background from '../images/houndstooth-pattern.png'


const styles = {
  width: "100%",
  backgroundRepeat: "repeat-y",
  backgroundImage: `url(${Background})`
}


const Welcome = styled.div`
  background-image: url(${Background});
  height:100vh`

class MyHeader extends React.Component {

  render(){
    return(
      <Welcome>
        <div style={{styles}} >
          <Header style={{marginTop: '100px'}} as="h1" align="center"></Header>
          <Header>Hello, I'm Ben Pohl.</Header>
          <Header>I'm a fullstack Rails + React Developer</Header>
          <Image src={logo} size='large' />
          <Button>Click Me</Button>
        </div>
      </Welcome>

    )
  }
}
 
export default MyHeader
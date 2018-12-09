import React, { Component } from 'react';
import { Container, 
  Grid, 
  Button, 
  Image
} from 'semantic-ui-react'
import styled from 'styled-components'
import Header from '../styledComponents/Header.js'
import logo from '../images/Pohl989_logo.png'
import Background from '../images/volcano-pattern.png'


const styles = {
  boxStyles: {
    width: "500px",
    border: "2px solid red",
    borderRadius: "20px",
    margin: "5%",
    padding: "5%",
    position: "center",
    backgroundColor: "rgba(76, 175, 80, 0.3)"
  }
}


const Welcome = styled.div`
  background-image: url(${Background});
  height:100vh
  overflow: auto`

class MyHeader extends React.Component {

  render(){
    return(
      <Welcome>
        <div style={styles.boxStyles}>
          <div>
            <Header style={{marginTop: '0px'}} as="h1" align="center"></Header>
            <Header>Hello, I'm Ben Pohl.</Header>
            <Header>I'm a fullstack Rails + React Developer</Header>
            <Image src={logo} size='large' />
            <Button>Click Me</Button>
          </div>
        </div>
      </Welcome>

    )
  }
}
 
export default MyHeader
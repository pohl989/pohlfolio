import React, { Component } from 'react';
import { Container, 
  Grid, 
  Button, 
  Image
} from 'semantic-ui-react'
import styled from 'styled-components'
import Header from '../styledComponents/Header.js'
import logo from '../images/Pohl989_logo.png'
import Background from '../images/dark-gravel.png'
import machu from '../images/machu.JPG'


const styles = {
  boxStyles: {
    width: "80%",
    border: "5px solid #9fcf6e",
    borderRadius: "20px",
    margin: "20px 0px",
    padding: "5%",
    position: "center",
    backgroundColor: "rgb(34,34,34)",
    flexDirection: "column",
    boxShadow: "inset 3px 4px 5px #000",
  }
}


const Welcome = styled.div`
  background-image: url(${Background});
  height: 100vh
  overflow: auto
  display: flex
  justify-content: center
  align-items: center`

class MyHeader extends React.Component {

  render(){
    return(
      <Welcome>
        <div style={styles.boxStyles}>
            <Image centered src={logo} size='small' style={{marginBottom: "15px"}}/>
          <div style={{display: "flex", justifyContent: "space-around" }}>
            <div>
              <Header size={"large"} align={"center"}>Hello, I'm Ben Pohl.</Header>
              <Header align={"center"} style={{marginBottom: '40px'}}>I'm a Rails + React Developer</Header>
            </div>
          </div>
          <div style={{alignSelf: "flex-end", flexDirection: "row-reverse"}}>
            <Button floated={"right"} color={"blue"} inverted>View my work</Button>
          </div>
        </div>
      </Welcome>

    )
  }
}
 
export default MyHeader
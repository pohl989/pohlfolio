import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components'
import logo from './images/Pohl989_logo.png'

const StyledMenu = styled.nav`
  background-color: rgba(0,0,0,.5) !important;
  border: 1px solid #555 !important;
  border-left: 0 !important;
  border-right: 0 !important;
  position: absolute !important;
  border-radius: none !important;
  width: 100%;
  position:sticky !important;  
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index:1;`

const StyledUL = styled.ul`
  list-style: none;
  margin: 0;
  display: flex !important;
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  padding: 0px;
  display: block;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 3px;
  justify-content: flex-end;
`
const StyledLi = styled.li`
  flex: 0 1 auto;
  display: inline-flex;
  text-align: -webkit-match-parent;
  list-style: none;
  padding: 30px 20px;
  align-self: flex-end;
`

class NavBar extends Component {

render() {
  return  (
    <StyledMenu id="navbar" fixed={'top'}>
      <StyledUL>
      
        <StyledLi style={{padding: '0px', marginBottom: '10px'}}>
          <Link to="/">
            <Image src={logo} size='tiny' />
          </Link>  
        </StyledLi>
        <StyledLi>
          <Link to="/">
            Projects
          </Link>  
        </StyledLi>
        <StyledLi>
          <Link to="/events" >
            My Skills
          </Link>
        </StyledLi>
      </StyledUL>
    </StyledMenu>
  );
  }
}


export default withRouter(NavBar);

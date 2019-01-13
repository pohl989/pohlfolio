import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../images/Pohl989_logo.png'

const StyledMenu = styled.nav`
  box-shadow: 2px 3px 4px rgba(45,45,45,0.6), inset 2px 3px 4px rgba(45,45,45,0.9);
  background-color: rgba(0,0,0,.8) !important;
  border: 5px solid #555 !important;
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

const NavLogo = styled.img`
  width: 80px;
  display: block; 
  height: auto;
  position: relative;
`
const StyledLink = styled.a`
  text-decoration: none;
  color: #4183c4;
`

class NavBar extends Component {

render() {
  return  (
    <StyledMenu id="navbar" fixed={'top'}>
      <StyledUL>
      
        <StyledLi style={{padding: '0px', marginBottom: '10px'}}>
          <a href="#start">
            <NavLogo src={logo} alt="Pohlfolio Logo" />
          </a>  
        </StyledLi>
        <StyledLi>
          <StyledLink href="#start">
            Projects
          </StyledLink>  
        </StyledLi>
        <StyledLi>
          <StyledLink href="#about" >
            About Me
          </StyledLink>
        </StyledLi>
      </StyledUL>
    </StyledMenu>
  );
  }
}


export default withRouter(NavBar);

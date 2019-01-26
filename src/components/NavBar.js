
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { media } from '../styledComponents/Defaults'
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
  z-index:1;
  ${media.phone`
    height: 70px;
    `
  }
`

const StyledUL = styled.ul`
  list-style: none;
  margin: 0;
  display: inline-flex;
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  padding: 0px;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 3px;
  justify-content: flex-end;
  ${media.phone`
    font-size: 12px;
    justify-content: center;
  `
  }
`
const StyledLi = styled.li`
  flex: 0 1 auto;
  display: inline-flex;
  text-align: -webkit-match-parent;
  list-style: none;
  padding: 30px 20px;
  align-self: flex-end;
    ${media.phone`
    font-size: 12px;
    display: none;
  `
}
`


const NavLogo = styled.img`
  width: 80px;
  display: block; 
  height: auto;
  position: relative;
  ${media.phone`
    width: 70px;
    `
}
`
const StyledLink = styled.a`
  text-decoration: none;
  color: #4183c4;
`

const StyledLinkIcon = styled(StyledLink)`
  color: green;
`

class NavBar extends Component {

render() {
  return  (
    <StyledMenu id="navbar" >
         <a href="#start" style={{display: "inline-flex", maxHeight: "60px", marginLeft: "2vw"}}>
            <NavLogo src={logo} alt="Pohlfolio Logo" />
          </a>  
      <StyledUL>
      
        <StyledLi style={{padding: '0px', marginBottom: '10px'}}>
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
      <StyledLinkIcon href="www.githhub.com/pohl989" >
        <a 
            target="_blank"  
            rel="noopener noreferrer"
            href={"https://www.github.com/pohl989"} 
            style={{textDecoration: "none", display: "flex", alignItems: "center", flexGrow: "1",maxWidth: "400px"}} 
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
        </a>
      </StyledLinkIcon>
      <StyledLink href="#about" >
        <a 
            target="_blank"  
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/pohl989/"} 
            style={{textDecoration: "none", display: "flex", alignItems: "center", flexGrow: "1",maxWidth: "400px"}} 
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
        </a>
      </StyledLink>
    </StyledMenu>
  );
  }
}


export default withRouter(NavBar);

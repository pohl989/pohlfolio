
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {media, colors} from '../styledComponents/Defaults'
import logo from '../images/Pohl989_logo.png'
import logoGreen from '../images/Pohl989_logo_green.png'

const StyledMenu = styled.nav`
  background:linear-gradient(217deg, ${colors.pink}, ${colors.burgandy} 70.71%);
  position: absolute;
  border-radius: none;
  width: 100%;
  position:sticky;  
  position: -webkit-sticky;
  top: 0;
  z-index:1;
  ${media.tablet`
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
  padding: 0px;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 3px;
  justify-content: flex-end;
  ${media.tablet`
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
  ${media.tablet`
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
  margin: 2px;
  ${media.tablet`
    width: 70px;
    `
}
`
const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.white};
  :hover {
    color: ${colors.neonGreen};
  }
`

const MyFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${colors.white};
  padding: 15px 5px;
  a:hover & {
    color: ${colors.neonGreen};
  }
  `

class NavBar extends Component {
  state = {
    navHover: true,
  }

  logoHeader = (hover) => {
    return ( hover ? <NavLogo src={logo} alt="Pohlfolio Logo" /> : <NavLogo src={logoGreen} alt="Pohlfolio Logo" />)
  }

  render() {
    const {navHover} = this.state
    return (
      <StyledMenu id="navbar" className="nav-background">
        <a href="#start" style={{display: 'inline-flex', maxHeight: '60px', marginLeft: '2vw', marginTop: '5px'}}>
          {this.logoHeader(navHover)}
        </a>
        <StyledUL>
          <StyledLi style={{padding: '0px', marginBottom: '10px'}}/>
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
        <div style={{display: 'inline-flex', float: 'right', height: 'auto', paddingRight: '2vw'}}>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/pohl989"
              style={{textDecoration: 'none', display: 'flex', alignItems: 'center', flexGrow: '1', maxWidth: '400px'}}
            >
              <MyFontAwesomeIcon
                icon={['fab', 'github']}
                size="3x"
                style={{padding: '15px 5px'}}
                onMouseEnter={this.githubHover} />
            </a>
          </div>
          <div >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/pohl989/"
              style={{textDecoration: 'none', display: 'flex', alignItems: 'center', flexGrow: '1', maxWidth: '400px'}}
            >
              <MyFontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
            </a>
          </div>
        </div>
      </StyledMenu>
    )
  }
}


export default withRouter(NavBar)

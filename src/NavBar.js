import React, { Component } from 'react';
import { Menu,Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components'


const StyledMenu = styled(Menu.Menu)`
  background-color: rgba(0,0,0,.5) !important;
  border: 1px solid #555 !important;
  border-left: 0 !important;
  border-right: 0 !important;
  position: absolute !important;
  border-radius: none !important;
  width: 100%;
`

const StyledUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  padding: 30px 20px;
  display: block;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 3px;
`

class NavBar extends Component {



render() {
  return  (
    <StyledMenu fixed={'top'}>
    <header class="header-scrolled">
   <div>
    <nav>
      <StyledUL>
        <li>
          <Link to="/">
                Home
          </Link>  
        </li>
        <li>
          <Link to="/events" >
            Events
          </Link>
        </li>
      </StyledUL>
    </nav>
    </div>
    </header>

      </StyledMenu>
  );
  }
}


export default withRouter(NavBar);


// <div class="logo-wrap">
//     <a class="logo" href="/">TableBooking</a>
//   </div>


// <Menu.Menu position='right'>
// <Menu.Item
  // name='Logout'
  // onClick={() => dispatch(handleLogout(history))}
// />
// </Menu.Menu> 

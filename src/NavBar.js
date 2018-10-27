import React, { Component } from 'react';
import { Menu,Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';


class NavBar extends Component {


render() {
  return  (
    <Menu.Menu position="center">
    <header class="header-scrolled">
   <div>
    <nav>
      <ul>
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
      </ul>
    </nav>
    </div>
    </header>

      </Menu.Menu>
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

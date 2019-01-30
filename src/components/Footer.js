
import React, { Component } from 'react';

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { media, colors } from '../styledComponents/Defaults'



class Footer extends Component {

  render() {
    return  (
      <div id="footer" style={{paddingTop: "40px", height: "30px"}} >
        <div style={{padding: "10px", borderTop: `5px solid ${colors["neonGreen"]}`, backgroundColor: "rgb(0,0,0)", display: "flex", justifyContent: "flex-end"}}>
          <p style={{color: `${colors["pink"]}`, fontsize: "16px", fontWeight: "700", marginRight: "8vh"}}>Built with React</p>
        </div>
      </div>
    );
    }
}


export default Footer
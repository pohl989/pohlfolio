
import React from 'react'

import {colors} from '../styledComponents/Defaults'


const footerStyle = {
  padding: '10px',
  borderTop: `5px solid ${colors.neonGreen}`,
  backgroundColor: 'rgb(0,0,0)',
  display: 'flex',
  justifyContent: 'flex-end',
}

const Footer = () => {
  return (
    <div id="footer" style={{paddingTop: '40px', height: '30px'}} >
      <div
        style={footerStyle}
      >
        <p
          style={{
            color: `${colors.malibu}`,
            fontsize: '16px',
            fontWeight: '700',
            marginRight: '8vh',
          }}
        >Built with React</p>
      </div>
    </div>
  )
}

export default Footer

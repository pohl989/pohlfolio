import styled from 'styled-components'
import { media } from './Defaults'


export const Container = styled.div`
  display: block;
  max-width: 100% !important;
  margin-right: 2%;
  margin-left: 2%;
  ${media.giant`
    width: 1100px;
    margin-left: auto !important;
    margin-right: auto !important; 
    `
  }
  ${media.desktop`
    width: 900px;
    margin-left: auto !important;
    margin-right: auto !important;
    `
  }
  ${media.tablet`
    width: 90% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    `
  }
  ${media.phone`
    width: 95% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    `
  }  
  `

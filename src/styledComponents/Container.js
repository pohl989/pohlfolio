import styled from 'styled-components'
import { media } from './Defaults'


export const Container = styled.div`
  display: block;
  max-width: 100% !important;
  margin-right: 2%;
  margin-left: 2%;
  ${media.tablet`
    width: 700px !important;
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
  ${media.giant`
    width: 1100px;
    margin-left: auto !important;
    margin-right: auto !important; 
    `
  }
  `

// @media only screen and (min-width: 1200px)
// <style>…</style>
// .ui.container {
//     width: 1127px;
//     margin-left: auto!important;
//     margin-right: auto!important;



//   @media only screen and (max-width: 1199px) and (min-width: 992px)
// <style>…</style>
// .ui.container {
//     width: 933px;
//     margin-left: auto!important;
//     margin-right: auto!important;


//     @media only screen and (max-width: 991px) and (min-width: 768px)
//     <style>…</style>
//     .ui.container {
//         width: 723px;
//         margin-left: auto!important;
//         margin-right: auto!important;
//     }

//     @media only screen and (max-width: 767px)
//     <style>…</style>
//     .ui.container {
//         width: auto!important;
//         margin-left: 1em!important;
//         margin-right: 1em!important;
//     }
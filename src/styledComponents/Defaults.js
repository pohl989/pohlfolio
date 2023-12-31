import {css} from 'styled-components'

const sizes = {
  giant: 1824,
  desktop: 1117,
  tablet: 768,
  phone: 376,
}

export const colors = {
  mineShaft: '#222222',
  neonGreen: '#9fcf6e',
  malibu: '#5cafff',
  pink: '#d28492',
  orange: '#ff5722',
  black: '#000',
  white: '#fff',
  burgandy: '#ab4a81',
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  // const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

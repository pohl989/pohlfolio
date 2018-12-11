import { css } from 'styled-components'

const sizes = {
  giant: 1824,
  desktop: 1117,
  tablet: 768,
  phone: 376,
}

export const colors = {
  mineShaft: "#222222",
  neonGreen: "#9fcf6e",
  malibu: "#5cafff",
  orange: "#ff5722",
  black: "#000",
  white: "#fff",
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
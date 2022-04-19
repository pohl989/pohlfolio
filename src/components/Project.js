import React from 'react'
import PropTypes from 'prop-types'

// ? temp move out once it looks goood
import styled from 'styled-components'
const cardShadow2 = 'inset 3px 4px 5px rgba(45, 45, 45, .2)'
import {colors, media} from '../styledComponents/Defaults'
const borderRadius = '.8em;'

// ? never to be used with external content
function createMarkup(markup) {
  return {__html: markup}
}

const ProjectImageContainer = styled.div`
  min-width:300px;
  max-width: 400px;
  min-height: 300px;
  border-top-right-radius: .4em;
  border-bottom-right-radius: .4em;
  ${media.tablet`
      width: 100%;
      min-width: 100%;
      border-top-right-radius: .4em;
      border-top-left-radius: .4em;
      border-bottom-right-radius: 0em;
    `}
`

const ProjectImage = styled.img`
  ${media.tablet`
    border-top-right-radius: .4em;
    border-top-left-radius: .4em;
    border-bottom-right-radius: 0em;
  `}
  width: 100%;
  height: 100%;
  background-color: rgb(34,34,34);
  box-shadow: ${cardShadow2};
  border-top-right-radius: .4em;
  border-bottom-right-radius: .4em;
  object-fit: cover; 
  overflow: hidden;
  object-position: top left;
`
const NewProjectCardBody = styled.div`
  ${media.tablet`
      max-width: 100%;
    `}
  flex-grow: 1;
  border: none;
  border-top: 1px solid rgba(34,36,38,.1);
  background: 0 0;
  margin: 0;
  padding: 1em 1em;
  box-shadow: none;
  font-size: 1em;
  border-radius: 0;
  text-decoration: none;
  max-width: 60%;
`

const NewProjectCard = styled.div`  
  ${media.tablet`
      flex-direction: column;
    `}
  width: 100%;
  border: 5px solid ${colors.pink};
  border-radius: ${borderRadius};
  margin: 20px 10px;
  transition: 0.6s;
  background-color: rgba(256,256,256,0.1);
  color: white;
  box-shadow: ${cardShadow2};
  display: flex;
  flex-direction: row-reverse;
  padding: 0;
  border: 5px solid ${colors.neonGreen};
`


function Project( {title, description, subTitle, imageUrl}) {
  return (
    <NewProjectCard >
      <ProjectImageContainer>
        <ProjectImage src={imageUrl}/>
      </ProjectImageContainer>
      <NewProjectCardBody>
        <div style={{
          fontWeight: '700',
          lineHeight: '1.3rem',
        }}>
          <h2
            style={{
              color: colors.pink,
              marginBottom: '5px',
              marginTop: '0px',
            }}
          >
            {title}
          </h2>
        </div>
        <div
        >
          <h5
            style={{
              fontSize: '1em',
              fontWeight: '800',
              marginTop: '5px',
            }}
          >
            {subTitle}
          </h5>
        </div>
        <div style={{
          clear: 'both',
        }}
        >
          <p
            dangerouslySetInnerHTML={createMarkup(description)}
            style={{
              fontSize: '1.2rem',
              fontFamily: '\'Roßboto Mono\', monospace',
            }}>
          </p>
        </div>

      </NewProjectCardBody>
    </NewProjectCard>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default Project

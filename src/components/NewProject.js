import React from 'react'
import PropTypes from 'prop-types'

// ? temp move out once it looks goood
import styled from 'styled-components'
const cardShadow2 = 'inset 3px 4px 5px rgba(45, 45, 45, .2)'
import {colors} from '../styledComponents/Defaults'
const borderRadius = '.8em;'

const ProjectImageContainer = styled.div`
  min-width:300px;
  max-width: 400px;
  min-height: 300px;
  border-top-right-radius: .4em;
  border-bottom-right-radius: .4em;
`

const ProjectImage = styled.img`
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

const NewProjectCard = styled.div`  
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


function NewProject( {title, description, subTitle, imageUrl}) {
  return (
    <NewProjectCard >
      <ProjectImageContainer>
        <ProjectImage src={imageUrl}/>
      </ProjectImageContainer>
      <div style={{
        flexGrow: '1',
        border: 'none',
        borderTop: '1px solid rgba(34,36,38,.1)',
        background: '0 0',
        margin: '0',
        padding: '1em 1em',
        boxShadow: 'none',
        fontSize: '1em',
        borderRadius: '0',
        textDecoration: 'none',
        maxWidth: '60%',
      }}
      >
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
          <p style={{
            fontSize: '1.2rem',
            fontFamily: '\'Roßboto Mono\', monospace',
          }}>
            {description}
          </p>
        </div>

      </div>
    </NewProjectCard>
  )
}

NewProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default NewProject
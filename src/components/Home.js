import React from 'react'
import {TextCard} from '../styledComponents/Card'
import {Container} from '../styledComponents/Container'
import {media} from '../styledComponents/Defaults'
import Project from './Project'
import styled from 'styled-components'
import Header from '../styledComponents/Header'
import {featuredProjects, aboutMeOne, aboutMeTwo} from '../content'
// import bioPhoto from '../images/bio.png'

// ? never to be used with external content
function createMarkup(markup) {
  return {__html: markup}
}

export const Cards = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: stretch;
`


const AboutMe = styled.p`
  margin: 20px; 
  max-width: 100%;
 ${media.tablet`
    max-width: 50%;
  `}
`

function Home() {
  return (
    <>
      <div className="background-image">
        <Container >
          <span id="projects">
            <Header size="h4" bColor="neonGreen" >
              Projects
            </Header>
          </span>
          <Cards>
            {featuredProjects.map( (single) =>
              <Project
                key={ single.id }
                title={single.title}
                subTitle={single.subTitle}
                description={single.description}
                imageUrl={single.imageUrl}
                link={single.link}
              />,
            )}
          </Cards>
          <span id="about">
            <Header size="h4" bColor="neonGreen" >
              About Me
            </Header>
          </span>
          <Cards>
            <TextCard>
              <AboutMe
                dangerouslySetInnerHTML={createMarkup(aboutMeOne)}
              >
              </AboutMe>
              <AboutMe
                dangerouslySetInnerHTML={createMarkup(aboutMeTwo)}
              >
              </AboutMe>
            </TextCard>
          </Cards>
        </Container>
      </div>
    </>
  )
}


export default Home

import React from 'react'
import {TextCard} from '../styledComponents/Card'
import {Container} from '../styledComponents/Container'
import {colors} from '../styledComponents/Defaults'
import NewProject from './NewProject'
import styled from 'styled-components'

// import bioPhoto from '../images/bio.png'
import featuredProjects from '../featured-projects'

export const Cards = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: stretch;
`
const aboutMe =
    `Hello, I\'m Ben Pohl. 
    I\'m a Rails + React Developer. 
    Creating great user experiences is a passion of mine. 
    When I know that I am building something that solves a problem for someone it makes my day. 
    I love the work that I do as a developer. 
    Every day I get to sit in front of code and make the world a better place.`

function Home() {
  return (
    <>
      <div className="background-image">
        <Container >
          <h2 id="projects" style={{color: `${colors.neonGreen}`}}>Projects</h2>
          <Cards>
            {featuredProjects.map( (single) =>
              <NewProject
                key={ single.id }
                title={single.title}
                subTitle={single.subTitle}
                description={single.description}
                imageUrl={single.imageUrl}
                link={single.link}
              />,
            )}
          </Cards>
          <h2 id= "about" style={{color: `${colors.neonGreen}`}}>About Me</h2>
          <Cards>
            <TextCard>
              <p
                style={{fontSize: '1.5em'}}>
                { aboutMe }
              </p>
            </TextCard>
          </Cards>
        </Container>
      </div>
    </>
  )
}


export default Home

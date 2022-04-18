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
const aboutMeOne =
    `Hello, I\'m Ben Pohl. 
    I\'m a fullstack Developer. I love the problem solving aspect of the job. I love a new challenge whether is it 
    on the backend writing a new service, delayed job, or rake task. I also enjoy working on the front end creating 
    a solid component structure, dyanmic form validations, or creating that perfect transition`

const aboutMeTwo =
    `My current day to day tech stack includes, Ruby on Rails, Vue and React. In my current position I write code for a internal system
    that manages federal contracts, projects, invoices, and members.`

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
                style={{margin: '20px'}}>
                { aboutMeOne }
              </p>
              <p
                style={{margin: '20px'}}>
                { aboutMeTwo }
              </p>
            </TextCard>
          </Cards>
        </Container>
      </div>
    </>
  )
}


export default Home

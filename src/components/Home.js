import React, {Component} from 'react'
import {Cards, TextCard} from '../styledComponents/Card'
import {Container} from '../styledComponents/Container'
import {colors} from '../styledComponents/Defaults'
import Project from './Project'

// import bioPhoto from '../images/bio.png'
import featuredProjects from '../featured-projects'

const styles = {

}
class Home extends Component {
  state = {
    aboutMe: `Hello, I\'m Ben Pohl. 
    I\'m a Rails + React Developer. 
    Creating great user experiences is a passion of mine. 
    When I know that I am building something that solves a problem for someone it makes my day. 
    I love the work that I do as a developer. 
    Every day I get to sit in front of code and make the world a better place.`,
  }
  render() {
    const {aboutMe} = this.state
    return (
      <>
        <div className="background-image"style={styles.backgroundStyle}>
          <Container >
            <h2 id="projects" style={{color: `${colors.neonGreen}`}}>Projects</h2>
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
            <h2 id= "about" style={{color: `${colors.neonGreen}`}}>About Me</h2>
            <Cards>
              <TextCard>
                <p style={{fontSize: '1.5em'}}>
                  {aboutMe}
                </p>
              </TextCard>
            </Cards>
          </Container>
        </div>

      </>

    )
  }
}

export default Home

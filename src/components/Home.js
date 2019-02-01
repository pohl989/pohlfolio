import React, { Component } from 'react';
import { Cards, TextCard } from '../styledComponents/Card'
import { Container } from '../styledComponents/Container'
import { colors } from '../styledComponents/Defaults'
import Project from './Project'
import member from '../images/cnsrvit_member.png'
import tablebooking from '../images/tablebooking.png'
import flashcards from '../images/flash_cards.png'
import memory from '../images/memory.png'
// import bioPhoto from '../images/bio.png'


const styles = {
 
}
class Home extends Component {

  state = {
    projects: [
      {
        id: 1, 
        title: "CNSRVIT", 
        imageUrl: member, 
        description: "Developed solutions for project management, invoicing, member management", 
        subTitle: "Full Stack Rails Web Suite",
        link: "https://cnsrvit.usaconservation.org/"
      },
      {
        id: 2, 
        title: "TableBooking App", 
        imageUrl: tablebooking, 
        subTitle: "Rails + React Proof of Concept",
        description: "Worked with a small team from Dev Point Labs to create a table booking proof of concept utilizing React, Redux, & Rails", 
        link: "https://tablebooking-dpl.herokuapp.com/" 
      },
      {
        id: 3, 
        title: "React Flash Cards", 
        imageUrl: flashcards, 
        subTitle: "Rails + React App",
        description: "I created a fun little Flash Card app utilizing Rails & React with Semantic UI.", 
        link: "https://rails-react-flashcards.herokuapp.com/" 
      },
      {
        id: 4, 
        title: "Drag Queen Memory Game", 
        imageUrl: memory, 
        subTitle: "JQuery mini app",
        description: "I decided to make a Drag Queen Memory Game with JQuery. Because... why not? The world needed this.", 
        link: "https://github.com/pohl989/memory-game" 
      },
    ], 
    aboutMe: "Hello, I'm Ben Pohl. I'm a Rails + React Developer. Creating great user experiences is a passion of mine. When I know that I am building something that solves a problem for someone it makes my day. I love the work that I do as a developer. Every day I get to sit in front of code and make the world a better place."
  }

  render(){
    const { aboutMe, projects } = this.state
    return(
      <>
        <div className="background-image"style={styles.backgroundStyle}>
          <Container >
            <h2 id="projects" style={{color: `${colors.neonGreen}`}}>Projects</h2>
            <Cards>
                {projects.map( (single) => 
                  <Project 
                    key={ single.id }
                    title={single.title}
                    subTitle={single.subTitle}
                    description={single.description}
                    imageUrl={single.imageUrl}
                    link={single.link}
                  />
                
                
                
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
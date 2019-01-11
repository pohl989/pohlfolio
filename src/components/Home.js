import React, { Component } from 'react';
// import { Container } from 'semantic-ui-react'
import { Cards } from '../styledComponents/Card'
import machu from '../images/machu.JPG'
import logo from '../images/Pohl989_logo.png'
import Header from '../styledComponents/Header.js'
import { Container } from '../styledComponents/Container'
import { colors } from '../styledComponents/Defaults'
import Project from './Project'
import member from '../images/cnsrvit_member.png'
import tablebooking from '../images/tablebooking.png'
import flashcards from '../images/flash_cards.png'


const styles = {
 
}
class Home extends Component {

  state = {
    projects: [
      {
        title: "CNSRVIT", 
        imageUrl: member, 
        description: "Developed solutions for project management, invoicing, member management", 
        subTitle: "Full Stack Rails Web Suite",
        link: "https://tablebooking-dpl.herokuapp.com/"
      },
      {
        title: "TableBooking App", 
        imageUrl: tablebooking, 
        subTitle: "Rails + React Proof of Concept",
        description: "Worked with a small team from Dev Point Labs to create a table booking proof of concept utilizing React, Redux, & Rails", 
        link: "https://tablebooking-dpl.herokuapp.com/" 
      },
      {
        title: "React Flash Cards", 
        imageUrl: flashcards, 
        subTitle: "Rails + React App",
        description: "I created a fun little Flash Card app utilizing Rails & React with Semantic UI.", 
        link: "https://rails-react-flashcards.herokuapp.com/" 
      },
    ]
  }

  render(){
    return(
<>
  <div className="background-image"style={styles.backgroundStyle}>
    <Container >
      <h2 style={{color: `${colors.neonGreen}`}}>Projects</h2>
      <Cards>
        {this.state.projects.map( (single, index) => 
          <Project 
            key={index}
            title={single.title}
            subTitle={single.subTitle}
            description={single.description}
            imageUrl={single.imageUrl}
          ></Project>
          
          
          
          )}
      </Cards>
      <h2 style={{color: `${colors.neonGreen}`}}>Skills</h2>
      <h2 style={{color: `${colors.neonGreen}`}}>About Me</h2>
      <p style={{color: `${colors.white}`, fontSize: '1.2em'}}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
    </Container>
  </div>

</>

    )
  }
}
 
export default Home
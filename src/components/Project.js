import React, { Component } from 'react';
import { ProjectCard } from '../styledComponents/Card'
import { Image, Card, Icon } from 'semantic-ui-react'
import machu from '../images/machu.JPG'


class Project extends Component {


  render() {
    return(
      <Card>
        <Image src={machu} />
        <Card.Content>
          <Card.Header>CNSRVIT</Card.Header>
          <Card.Meta>Full Stack Rails Web Suite</Card.Meta>
          <Card.Description>Developed solutions for project management, invoicing, member management </Card.Description>
        </Card.Content>
      </Card>
    )
  }

}

export default Project
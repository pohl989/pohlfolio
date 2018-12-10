import React, { Component } from 'react';
import { ProjectCard } from '../styledComponents/Card'
import { Image } from 'semantic-ui-react'
import machu from '../images/machu.JPG'


class Project extends Component {


  render() {
    return(
      <ProjectCard src={machu}>
      </ProjectCard>
    )
  }

}

export default Project
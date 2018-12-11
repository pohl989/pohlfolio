import React, { Component } from 'react';
import { ProjectCard } from '../styledComponents/Card'
import { Image } from 'semantic-ui-react'
import machu from '../images/machu.JPG'


class Project extends Component {


  render() {
    
    return(
      <>
      <ProjectCard>
        <Image src={machu} />
        <div style={{
          flexGrow: "1",
          border: "none",
          borderTop: "1px solid rgba(34,36,38,.1)",
          background: "0 0",
          margin: "0",
          padding: "1em 1em",
          boxShadow: "none",
          fontSize: "1em",
          borderRadius: "0"
        }}
        >
          <div style={{
            fontWeight: "700",
            fontSize: "1.28571429em",
            marginTop: "-.21425em",
            lineHeight: "1.28571429em"
          }}>
            CNSRVIT
          </div>
          <div style={{
            fontSize: "1em",
            color: "rgba(0,0,0,.4)"
          }}
          >
            Full Stack Rails Web Suite
          </div>
          <div style={{
            clear: "both",
            color: "rgba(0,0,0,.68)"

          }}
          >
            Developed solutions for project management, invoicing, member management
          </div>

        </div>
      </ProjectCard>
      </>
    )
  }

}

export default Project
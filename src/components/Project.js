import React from 'react';
import { ProjectCard, ProjectImage } from '../styledComponents/Card'

function Project( { title, description, subTitle, imageUrl, link }) {
  return(
    <>
      <a 
        target="_blank"  
        rel="noopener noreferrer"
        href={link} 
        style={{textDecoration: "none", display: "flex", alignItems: "center", flexGrow: "1",maxWidth: "400px"}} 
      >
        <ProjectCard >
          <ProjectImage  src={imageUrl}/>
          <div style={{
            flexGrow: "1",
            border: "none",
            borderTop: "1px solid rgba(34,36,38,.1)",
            background: "0 0",
            margin: "0",
            padding: "1em 1em",
            boxShadow: "none",
            fontSize: "1em",
            borderRadius: "0",
            textDecoration: "none"
          }}
          >
            <div style={{
              fontWeight: "700",
              fontSize: "1.28571429em",
              marginTop: "-.21425em",
              lineHeight: "1.28571429em",
              color: "#111"
            }}>
              {title}
            </div>
            <div style={{
              fontSize: "1em",
              color: "rgba(0,0,0,.4)"
            }}
            >
              {subTitle}
            </div>
            <div style={{
              clear: "both",
              color: "rgba(0,0,0,.68)"

            }}
            >
              {description}
            </div>

          </div>
        </ProjectCard>
      </a>
    </>
  )
  

}





export default Project
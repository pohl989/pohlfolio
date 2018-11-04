import React, { Component } from 'react';
import { Container, 
  Grid, 
  Segment, 
  Image
} from 'semantic-ui-react'
import machu from '../images/machu.JPG'
import logo from '../images/Pohl989_logo.png'
import Header from '../styledComponents/Header.js'


const styles = {
 
}
class Home extends React.Component {

  render(){
    return(
<>
<div className="background-image"style={styles.backgroundStyle} >
    <Container className='pageprofile'>
    <div className='cencenter'>
    <Image src={machu} size='large' circular />
    <Image src={logo} size='large' />
    <Image src={machu} size='large' circular />
    <Image src={machu} size='large' circular />
    <Image src={machu} size='large' circular />
      <Header as="h1">Ben Pohl</Header>
      <h5>pohl989@gmail.com</h5>
      </div>
      <Grid columns={3} >
      <Grid.Row color='black' textAlign='center'>
      <Grid.Column>
        <Segment color='black' inverted>
          @pohl989
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          github
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          twitter
        </Segment>
      </Grid.Column>
        <Grid.Column className='gutter'>
          </Grid.Column>
          </Grid.Row>
          </Grid>
          <Grid>
          <Grid.Column>
        </Grid.Column>
      </Grid>
    </Container>
  </div>

</>

    )
  }
}
 
export default Home